<template>
    <div class="row">
        <Product v-for="product in filteredProductsData" :key="product.name" :product="product" />
    </div>
</template>

<script>
import { useProductStore } from "@/stores/products";
import Product from "./Product.vue";

export default {
    components: { Product },
    props: {
        allowedCategories: { type: Array, default: [] },
        allowedRange: { type: Object, default: {} },
        sort: { type: String, default: "price", validator: (value) => value === "price" || value === "alphabetically" },
    },
    watch: {
        allowedCategories: {
            deep: true,
            handler() {
                this.filteredProducts();
            },
        },
        allowedRange: {
            deep: true,
            handler() {
                this.filteredProducts();
            },
        },
        sort: {
            handler() {
                this.filteredProducts();
            },
        },
    },
    data() {
        return { filteredProductsData: [] };
    },
    methods: {
        filteredProducts() {
            let filtered = [...this.products];
            if (this.allowedCategories.length > 0) {
                filtered = filtered.filter((product) => this.allowedCategories.includes(product.category));
            }

            if (this.allowedRange && this.allowedRange.max) {
                filtered = filtered.filter(
                    (product) => this.allowedRange.min <= product.price && product.price <= this.allowedRange.max
                );
            }

            filtered = filtered.sort((a, b) => {
                if (this.sort === "price") {
                    return a.price > b.price;
                }
                return a.name > b.name;
            });

            this.filteredProductsData = filtered;
        },
    },
    mounted() {
        this.filteredProducts();
    },
    setup() {
        const productStore = useProductStore();
        return { products: productStore.getProducts };
    },
};
</script>
