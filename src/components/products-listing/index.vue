<template>
    <div class="filter-area py-5">
        <ListingNavbar @sort-change="onSortChange" :sort="this.sortType" />
        <div class="category-card">
            <div class="row">
                <div class="col-md-3">
                    <Filters @filter-change="onFilterChange" />
                </div>
                <div class="col-md-9">
                    <Products
                        :sort="sortType"
                        :allowedCategories="filters.selectedCategories"
                        :allowedRange="filters.selectedRange"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ListingNavbar from "./ListingNavbar.vue";
import Products from "./Products/index.vue";
import Filters from "./filters/index.vue";

export default {
    components: { ListingNavbar, Products, Filters },
    data() {
        return { filters: {}, sortType: "price" };
    },
    methods: {
        onSortChange(value) {
            this.sortType = value;
        },
        onFilterChange(filters) {
            this.filters = filters;
        },
    },
};
</script>
