<template>
  <section>
    <pre class="note">products/views/Home</pre>

    <h1 class="mb-3">Products</h1>

    <div v-if="isLoading">
      <img size="64" src="/progress.svg" />
    </div>

    <div v-else-if="products.length">
      <div cols="4" v-for="product in products" :key="product.id">
        <div>
          <img height="250" src="/widget.png" />

          <p class="green--text pb-0">${{ product.price }}</p>
          <p>{{ product.title }}</p>

          <div>
            <br />

            <router-link :to="`/products/${product.id}`">View</router-link>

            <button
              v-if="checkIsInCart(product)"
              class="white--text"
              color="red"
              @click="$store.commit('cart/REMOVE_ITEM', product.id)"
            >
              Remove from cart
            </button>
            <button v-else color="primary" @click="addToCart(product)">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",

  data: () => ({
    products: [],
    isLoading: false
  }),

  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    }
  },

  async created() {
    this.isLoading = true;

    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      this.products = data;
    } finally {
      this.isLoading = false;
    }
  },

  methods: {
    checkIsInCart(product) {
      return this.cartItems.some(cartItem => cartItem.id === product.id);
    },

    addToCart(product) {
      this.$store.commit("cart/ADD_ITEM", product);
    }
  }
};
</script>
