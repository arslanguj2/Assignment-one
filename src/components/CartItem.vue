<template>
    <div class="cart-item" v-for="product in cartProducts" :key="product.name">
        <div class="d-flex justify-content-between">
            <div class="item-info">
                <h4>{{ product.name }}</h4>
                <p>${{ product.price }}</p>
            </div>
            <img class="item-image" :src="getImageUrl(product.image)" alt="" />
        </div>
    </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";
import { mapState } from "pinia";

export default {
    computed: {
        ...mapState(useCartStore, { cartProducts: "getCartProducts" }),
    },
    methods: {
        getImageUrl(image) {
            return image.src ? image.src : image;
        },
    },
};
</script>

<style scoped>
.cart-item {
    width: 100%;
    padding: 10px;
}

.cart-item {
    border-bottom: 1px solid #e4e4e4;
}

.item-info p {
    margin-bottom: 0px;
}

.item-image {
    height: 100%;
    max-height: 70px;
    max-width: 120px;
    object-position: center;
    object-fit: cover;
}
</style>
