<template>

  <component :is="isSkeleton ? 'Skeleton' : 'div'" class="category">
    <h2 v-if="!isSkeleton">{{ data?.category }}</h2>
  </component>

  <div v-if="!isSkeleton" class="products-grid">
    <MenuProductListItem v-for="product in data?.products" :key="product.productId" :is-skeleton="false" :data="product" />
  </div>
  <div v-else class="products-grid">
    <MenuProductListItem v-for="index in 4" :key="index" />
  </div>

</template>

<script lang="ts" setup>
import MenuProductListItem from './MenuProductListItem.vue'
import { defineProps, withDefaults } from 'vue'
import CategoryWithProductsModel from '@/models/CategoryWithProductsModel'

type Props = {
  isSkeleton?: boolean
  data?: CategoryWithProductsModel
}

withDefaults(defineProps<Props>(), {
  isSkeleton: true,
  data: undefined
})

</script>

<style scoped>
.category {
  min-height: 50px;
  background-color: var(--background-2);
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  box-shadow: var(--default-box-shadow);
}

.products-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  gap: 28px;
  margin: 0 auto 80px auto;
}

@media only screen and (min-width: 500px) {
  .products-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media only screen and (min-width: 800px) {
  .products-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (min-width: 1100px) {
  .products-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
