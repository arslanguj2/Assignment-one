<template>
    <div class="hero-area on-pc">
        <div class="hero-heading d-flex justify-content-between align-items-center pt-5 pb-3">
            <h3 class="hero-heading-h3">{{ featuredProduct.name }}</h3>
            <button class="hero-btn py-2 px-5" @click="addToCart">ADD TO CART</button>
        </div>
        <div class="hero-img d-flex align-items-end">
            <img :src="featuredProduct.image.src" class="featured-product-image" alt="" />
            <div class="tag-div d-flex align-items-center justify-content-center px-4 py-2">
                <p class="photo-tag mb-0">Photo of the day</p>
            </div>
        </div>
    </div>

    <div class="detail-area py-5">
        <div class="row">
            <div class="col-md-8">
                <h4 class="detail-heading">About the {{ featuredProduct.name }}</h4>
                <h5 class="detail-pets">{{ featuredProduct.category }}</h5>
                <p class="detail-p">
                    {{ featuredProduct.details.description }}
                </p>
            </div>
            <div class="col-md-4">
                <div class="detail-other-buy">
                    <p class="mb-4 mt-media text-end left-media people-buy">People also buy</p>
                    <div class="d-flex justify-content-between img-set pb-5">
                        <img
                            v-for="recommendation in featuredProduct.details.recommendations"
                            :key="recommendation.src"
                            :src="recommendation.src"
                            alt="Detail "
                        />
                    </div>
                </div>
                <div class="sizes">
                    <p class="text-end left-media people-buy">Details</p>
                    <p class="text-end left-media pb-1 m-0">
                        Size: {{ featuredProduct.details.dimmentions.width }} x
                        {{ featuredProduct.details.dimmentions.height }} pixel
                    </p>
                    <p class="text-end left-media pb-1 m-0">Size: {{ featuredProduct.details.size / 1000 }} mb</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useProductStore } from "@/stores/products";
import { useCartStore } from "@/stores/cart";
export default {
    computed: {
        ...mapState(useProductStore, { featuredProduct: "getFeaturedProduct" }),
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },
    methods: {
        addToCart() {
            this.cartStore.addProduct(this.featuredProduct);
        },
    },
};
</script>

<style scoped>
.detail-area {
    border-bottom: 3px solid #e4e4e4;
}
.hero-heading-h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    margin: 0;
}

.hero-btn {
    background: #000000;
    color: white;
    border-radius: 0;
    border: 0;
}

.hero-img {
    height: 60vh;
    position: relative;
}

.tag-div {
    background: #ffffff;
    position: absolute;
    bottom: 0;
    left: 0;
}

.photo-tag {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
}

.photo-tag {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
}

.detail-heading {
    font-weight: bold;
    font-size: 22px;
    line-height: 24px;
    color: #000000;
}

.detail-p {
    font-size: 18px;
    line-height: 190%;
    word-spacing: 3px;
    margin-right: 100px;
    margin-bottom: 0;
}

.detail-pets {
    color: #656565;
}

.people-buy {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
}

.img-set img {
    width: 30%;
}

.featured-product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
