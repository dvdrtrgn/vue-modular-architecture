<template>
  <section>
    <h1 class="mb-3">Cart</h1>

    <div v-if="isCartEmpty">
      No items in the cart.
    </div>

    <template v-else>
      <div>
        <div v-for="item in items" :key="item.id">
          <div>
            <img src="/widget.png" width="100" />
          </div>

          <div>
            <div>
              {{ item.title }}
            </div>

            <div class="green--text">$ {{ item.price }}</div>
          </div>

          <div>
            <button
              @click="$store.commit('cart/REMOVE_ITEM', item.id)"
              color="red"
              class="btn white--text"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div class="mt-3 green--text text-center text-h6">
        Total: $ {{ totalPrice }}
      </div>
    </template>
  </section>
</template>

<script>
  export default {
    name: 'Cart',

    computed: {
      items() {
        return this.$store.state.cart.items || [];
      },

      isCartEmpty() {
        return this.items.length === 0;
      },

      totalPrice() {
        const price = this.items.reduce(
          (acc, product) => acc + product.price,
          0
        );
        return price.toFixed(2);
      },
    },
  };
</script>
