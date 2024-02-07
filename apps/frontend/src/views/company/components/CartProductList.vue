<template>
  <transition-group tag="div" name="product-list" class="product-list">
    <CartProductListItem v-for="product in cart?.products" :key="product.id" :data="product" />
  </transition-group>
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

.product-list-enter-from,
.product-list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.product-list-enter-active,
.product-list-leave-active {
  transition: all 0.2s ease-in;
}

.product-list-enter-to,
.product-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

@media only screen and (min-width: 800px) {
  .product-list {
    flex: 1 1;
  }
}
</style>
