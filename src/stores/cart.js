import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        products: [],
    }),
    getters: {
        getCartSize: (state) => state.products.length,
        getCartProducts: (state) => state.products,
    },
    actions: {
        addProduct(product) {
            this.products.push(product);
        },
        clearCart() {
            this.products = [];
        },
    },
});
