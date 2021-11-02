<template>
  <section>
    <h1 class="mb-3">Products</h1>

    <div v-if="isLoading">
      <img src="/progress.svg" />
    </div>

    <div class="flex" v-else-if="products.length">
      <div cols v-for="product in products" :key="product.id">
        <div class="stack p1">
          <img src="/widget.png" />

          <div class="flex">
            <p class="green--text pb-0">${{ product.price }}</p>
            <p>{{ product.title }}</p>
          </div>

          <div class="flex btns">
            <router-link class="btn" :to="`/products/${product.id}`"
              >View</router-link
            >

            <button
              v-if="checkIsInCart(product)"
              class="btn white--text"
              color="red"
              @click="$store.commit('cart/REMOVE_ITEM', product.id)"
            >
              Remove from cart
            </button>
            <button
              v-else
              class="btn"
              color="primary"
              @click="addToCart(product)"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { getProducts } from '../../../store/api.js';

  export default {
    name: 'Home',

    data: () => ({
      products: [],
      isLoading: false,
    }),

    computed: {
      cartItems() {
        return this.$store.state.cart.items;
      },
    },

    async created() {
      this.isLoading = true;

      try {
        const { data } = await getProducts();
        this.products = data;
      } finally {
        this.isLoading = false;
      }
    },

    methods: {
      checkIsInCart(product) {
        return this.cartItems.some((cartItem) => cartItem.id === product.id);
      },

      addToCart(product) {
        this.$store.commit('cart/ADD_ITEM', product);
      },
    },
  };
</script>
