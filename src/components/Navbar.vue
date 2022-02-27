<template>
    <nav>
        <div class="py-4 d-flex justify-content-between align-items-center cust-bottom">
            <div class="brand">
                <img class="w-75" src="@/assets/images/logo.svg" alt="brand-image" />
            </div>
            <div class="cart">
                <div class="shopping-cart" @click="onClose">
                    <img class="w-75" src="@/assets/images/shopping-cart.svg" alt="shopping-cart" />
                    <span class="cart-size">{{ cartSize }}</span>
                </div>
                <div class="cart-items" v-if="cartVisible">
                    <div class="close-icon" @click="onClose">x</div>

                    <CartItem />

                    <div class="cart-footer">
                        <button class="btn-clear" @click="onClear">Clear</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCartStore } from "@/stores/cart";
import CartItem from "./CartItem.vue";

export default {
    components: { CartItem },
    computed: {
        ...mapState(useCartStore, { cartSize: "getCartSize" }),
        ...mapActions(useCartStore, ["clearCart"]),
    },
    setup() {
        const cartStore = useCartStore();
        return { cartStore };
    },
    data() {
        return { cartVisible: false };
    },
    methods: {
        onClose() {
            if (this.cartSize > 0) {
                this.cartVisible = !this.cartVisible;
                return;
            }
            this.cartVisible = false;
        },
        onClear() {
            this.cartStore.clearCart();
            this.onClose();
        },
    },
};
</script>

<style scoped>
.cust-bottom {
    border-bottom: 3px solid #e4e4e4;
}

.cart,
.shopping-cart {
    position: relative;
    cursor: pointer;
}

.cart-size {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: black;
    color: #fff;
    padding: 2px 4px;
    line-height: 1;
    font-weight: bold;
}

.cart-items {
    position: absolute;
    top: calc(100% + 25px);
    right: 0;
    background-color: #fff;
    border: 3px solid #e4e4e4;
    width: 300px;
    z-index: 1;
}

.close-icon {
    padding: 10px;
    text-align: right;
    font-weight: bolder;
    cursor: pointer;
    border-bottom: 1px solid #e4e4e4;
}

.btn-clear {
    width: 100%;
    background-color: #000;
    border: 1px solid #e4e4e4;
    color: #fff;
    padding: 4px;
}

.cart-footer {
    padding: 10px;
}
</style>
