<template>
  <div class="summary">
    <p>Order Summary</p>
    <p>Total: <em>{{ `\$${cartTotalValue}` }}</em></p>
    <PlaceOrderButton />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import PlaceOrderButton from './PlaceOrderButton.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const { companyId } = route.params

const cartTotalValue = computed(() => {
  return store.getters['cart/getCartTotalValue'](companyId)
})
</script>

<style scoped>
.summary {
  background-color: var(--background-2);
  box-shadow: var(--default-box-shadow);
  padding: 6px;
  width: 100%;
  margin-bottom: 40px;
  max-width: 400px;
}

.summary > p {
  font-size: 1.28rem;
  margin-bottom: 20px;
}

.summary > p:nth-of-type(1) {
  font-weight: 500;
  margin-bottom: 20px;
}

em {
  opacity: 0.8;
}

@media only screen and (min-width: 800px) {
  .summary {
    width: 320px;
    margin-bottom: 0;
    margin-left: 20px;
    padding: 10px;
  }
}
</style>
