<template>
  <div class="product-list">
    <CartProductListItem v-for="product in cart?.products" :key="product.id" :data="product" />
  </div>
</template>

<script lang="ts" setup>
import CartModel from '@/models/CartModel'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import CartProductListItem from './CartProductListItem.vue'

const store = useStore()
const route = useRoute()

const { companyId } = route.params

const cart = computed<CartModel | undefined>(() => {
  return store.getters['cart/getCart'](companyId)
})
</script>

<style scoped>

.product-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

@media only screen and (min-width: 800px) {
  .product-list {
    flex: 1 1;
  }
}
</style>
