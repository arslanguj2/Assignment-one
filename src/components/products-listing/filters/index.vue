<template>
    <div class="category-check">
        <h5>Category</h5>
        <FilterInput
            v-for="category in categories"
            :key="category"
            :inputId="category"
            name="category"
            :value="category"
            :label="category"
            @input="onCategoriesChange"
        />
    </div>
    <div class="price-check">
        <h5>Price range</h5>
        <FilterInput
            v-for="range in priceRanges"
            :key="range.id"
            :inputId="`${range.id}-${range.min}-${range.max}`"
            name="price-range"
            :value="range.id"
            :label="range.label"
            type="radio"
            @input="onRangeChange"
        />
    </div>
</template>

<script>
import { useProductStore } from "../../../stores/products";
import FilterInput from "./FilterInput.vue";

export default {
    components: { FilterInput },
    setup() {
        const productStore = useProductStore();
        return { categories: productStore.getCategories };
    },
    data() {
        return {
            priceRanges: [
                { id: 1, checked: false, min: 0, max: 20, label: "Lower than $20" },
                { id: 2, checked: false, min: 20, max: 100, label: "$20 - $100" },
                { id: 3, checked: false, min: 101, max: 200, label: "$101 - $200" },
                { id: 4, checked: false, min: 201, max: Number.MAX_SAFE_INTEGER, label: "More than $200" },
            ],
            selectedCategories: new Set(),
            selectedRange: null,
        };
    },
    emits: ["filter-change"],
    methods: {
        emitFilterChange() {
            this.$emit("filter-change", {
                selectedCategories: Array.from(this.selectedCategories),
                selectedRange: this.selectedRange,
            });
        },
        onRangeChange(value) {
            if (!isNaN(value)) {
                this.selectedRange = this.priceRanges.find((range) => range.id === parseInt(value));
                this.emitFilterChange();
            }
        },
        onCategoriesChange(value) {
            if (typeof value === "string") {
                if (this.selectedCategories.has(value)) {
                    this.selectedCategories.delete(value);
                } else {
                    this.selectedCategories.add(value);
                }
                this.emitFilterChange();
            }
        },
    },
};
</script>
