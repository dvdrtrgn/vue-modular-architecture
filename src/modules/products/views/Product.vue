<template>
  <section>
    <pre class="note">products/views/Product</pre>

    <div v-if="isLoading">
      <img size="64" src="/progress.svg" />
    </div>

    <template v-else-if="product">
      <div>
        <div cols="4">
          <img height="auto" src="/widget.png" width="50%" />
        </div>

        <div cols="8">
          <div>${{ product.price }}</div>

          <h1>
            {{ product.title }}
          </h1>

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
    </template>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Product",

  data: () => ({
    product: null,
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
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${this.$route.params.id}`
      );
      this.product = data;
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
