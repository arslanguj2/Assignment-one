<template>
    <div class="photo-heading d-flex justify-content-between align-items-center">
        <h3 class="photo-cust">Photography / <span>Premium Photos</span></h3>
        <div class="d-flex no-small-media align-items-center">
            <div class="sorting cursor-pointer p-2 d-flex align-items-center">
                <img src="@/assets/images/arrow-up.svg" alt="" />
                <img src="@/assets/images/arrow-down.svg" alt="" />
                <p class="mb-0 p-2">Sort By</p>
            </div>
            <select name="" v-model="sortType">
                <option value="price">Price</option>
                <option value="alphabetically">A-Z</option>
            </select>
        </div>
        <div class="no-big-media">
            <img src="@/assets/images/sort-price-icon.svg" alt="" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sort: { type: String, default: "price", validator: (value) => value === "price" || value === "alphabetically" },
    },
    data() {
        return { sortType: this.sort };
    },
    watch: {
        sortType(value) {
            this.$emit("sort-change", value);
        },
    },
    emits: ["sort-change"],
};
</script>

<style scoped>
.photo-cust {
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
}

.photo-cust span {
    color: #9b9b9b;
}
</style>
