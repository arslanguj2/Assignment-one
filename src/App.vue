<template>
    <div class="container-xxl">
        <Navbar />
        <FeaturedProduct />
        <ProductsListing />
    </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import FeaturedProduct from "./components/FeaturedProduct.vue";
import ProductsListing from "./components/products-listing/index.vue";
export default {
    components: { Navbar, FeaturedProduct, ProductsListing },
};
</script>

<style></style>
