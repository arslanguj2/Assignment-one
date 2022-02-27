<template>
    <div class="col-md-4 col-sm-6 col-xs-12 col-lg-4">
        <div class="cust-card py-4">
            <div class="cust-card-img position-relative">
                <img :src="getImageUrl(product.image)" alt="" />
                <div class="card-tag px-2 py-1 position-absolute" v-show="product.bestseller">Best Seller</div>
                <button @click="onAddToCart" class="cust-card-btn py-2 position-absolute">ADD TO CART</button>
            </div>
            <div class="cust-card-detail">
                <p class="cust-card-people mb-0">{{ product.category }}</p>
                <h4 class="cust-red-bench mb-0">{{ product.name }}</h4>
                <p class="cust-card-price mb-0">${{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";

export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },
    methods: {
        getImageUrl(image) {
            return image.src ? image.src : image;
        },
        onAddToCart() {
            this.cartStore.addProduct(this.product);
        },
    },
};
</script>

<style scoped>
.cust-card-img {
    width: 100%;
    height: 390px;
}

.cust-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.card-tag {
    background-color: white;
    line-height: 14px;
    top: 0;
}

.cust-card-btn {
    width: 100%;
    background-color: #000000;
    border: 0;
    color: white;
    opacity: 0;
    transition: 0.4s ease-in-out;
    bottom: 0;
    left: 0;
}

.cust-card-img:hover .cust-card-btn {
    opacity: 1;
}
</style>
