<template>

  <div class="item-wrapper">

    <component :is="isSkeleton ? 'Skeleton' : 'div'" :class="itemClassList">

      <div class="item-picture">
        <router-link v-if="!isSkeleton" :to="`/company/${$route.params.companyId}/product/${data?.productId}`"></router-link>
      </div>

      <div class="item-info">
        <div class="item-info-first-row">
          <router-link v-if="!isSkeleton" :to="`/company/${$route.params.companyId}/product/${data?.productId}`">{{ data?.name }}</router-link>
        </div>
        <div class="item-info-second-row">
          <p v-if="!isSkeleton">{{ `\$${data?.salePrice}` }}</p>
        </div>
        <div v-if="!isSkeleton">
          <AddToCartButton />
        </div>
        <Skeleton class="add-to-cart-button-skeleton" v-else />
      </div>

    </component>

  </div>

</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import ProductModel from '@/models/ProductModel'
import AddToCartButton from './AddToCartButton.vue'
import config from '@/config'

type Props = {
  isSkeleton?: boolean
  data?: ProductModel
}

const props = withDefaults(defineProps<Props>(), {
  isSkeleton: true,
  data: undefined
})

const itemClassList = computed(() => {
  const list: string[] = ['item-base']
  if (props.isSkeleton) list.push('item-skeleton')
  if (!props.isSkeleton) list.push('item-product')
  return list
})

const pictureUrl = computed(() => {
  return `url(${config.apiUrl}${props.data?.picture})`
})

</script>

<style scoped>

.item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-base {
  background-color: var(--background-2);
  box-shadow: var(--default-box-shadow);
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}

.item-skeleton > .item-picture {
  width: 100%;
  height: 190px;
  padding: 6px 6px 0 6px;

}

.item-skeleton > .item-picture::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--background-1);
}

.item-product > .item-picture {
  width: 100%;
  height: 190px;
  background-image: v-bind(pictureUrl);
  background-position: center;
  background-size: cover;
  position: relative;
  transition: opacity 0.2s ease-in-out;
}

.item-product > .item-picture:hover {
  opacity: 0.8;
}

.item-picture > a {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.item-info {
  width: 100%;
  padding: 6px;
}

.item-info-first-row {
  height: 46px;
  width: 100%;
}

.item-info-first-row > a {
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}

.item-info-first-row > a:hover {
  text-decoration: underline;
}

.item-info-second-row {
  height: 44px;
  width: 100%;
}

.item-info-second-row > p {
  text-align: right;
  font-size: 2rem;
}

.add-to-cart-button-skeleton {
  background-color: var(--background-1);
  padding: 8px 12px;
  width: 100%;
  height: 44px;
}
</style>
