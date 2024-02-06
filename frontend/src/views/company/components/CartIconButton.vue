<template>
  <BaseIconButton
    class="button"
    kind="link"
    :icon-light="iconLight"
    :icon-dark="iconDark"
    :to="`/company/${$route.params.companyId}/cart`">
    <div v-if="productAmount" class="product-amount">{{ productAmount }}</div>
  </BaseIconButton>
</template>

<script lang="ts" setup>
import iconLight from '@/assets/cart-light.svg'
import iconDark from '@/assets/cart-dark.svg'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const store = useStore()
const route = useRoute()

const { companyId } = route.params

const productAmount = computed<string>(() => {
  const amount = store.getters['cart/getCartTotalAmount'](companyId)
  if (amount === 0) return ''
  if (amount > 99) return '99'
  return amount
})

const productAmountDivSize = computed<string>(() => {
  const amount = store.getters['cart/getCartTotalAmount'](companyId)
  if (amount < 10) return '24px'
  return '26px'
})

</script>

<style scoped>
.button {
  position: relative;
}

.product-amount {
  background-color: var(--green);
  border-radius: 50%;
  width: v-bind(productAmountDivSize);
  height: v-bind(productAmountDivSize);
  font-size: 0.88rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 20px;
  top: -10px;
  color: var(--white-1);
}
</style>
