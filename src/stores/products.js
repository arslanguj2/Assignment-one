import { defineStore } from "pinia";
import { products } from "@/data/products.json";

export const useProductStore = defineStore("products", {
    state: () => {
        return {
            products,
        };
    },
    getters: {
        getProducts: (state) => state.products,
        getCategories: (state) => {
            const categories = new Set();
            state.products.forEach((product) => categories.add(product.category));
            return Array.from(categories);
        },
        getFeaturedProduct: (state) => {
            const featuredProduct = state.products.find((product) => product.featured);
            return featuredProduct;
        },
    },
    actions: {},
});
