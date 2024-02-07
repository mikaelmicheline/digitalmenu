<template>
  <section>
    <div v-if="cartHasProducts" class="not-empty">
      <CartSummary />
      <CartProductList />
    </div>
    <div v-else class="empty">
      <p>Your cart is empty</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CartSummary from '@/views/company/components/CartSummary.vue'
import CartProductList from '@/views/company/components/CartProductList.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()
const { companyId } = route.params

const cartHasProducts = computed(() => {
  return store.getters['cart/getCartTotalAmount'](companyId) > 0
})
</script>

<style scoped>
section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.not-empty {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.empty {
  width: 100%;
  text-align: center;
}

@media only screen and (min-width: 800px) {
  .not-empty {
    flex-direction: row-reverse;
  }
}
</style>
