<template>

  <div class="item-wrapper">
    <component :is="isSkeleton ? 'Skeleton' : 'div'" :class="itemClassList">
      <div class="picture"></div>
      <div class="info" v-if="!isSkeleton">
        <p>{{ data?.name }}</p>
        <p>{{ data?.salePrice }}</p>
        <p>details</p>
        <p>add to Cart</p>
      </div>
    </component>
  </div>

</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import ProductModel from '@/models/ProductModel'
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
  height: 360px;
  background-color: var(--background-2);
  box-shadow: var(--default-box-shadow);
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.item-skeleton > .picture {
  width: 100%;
  height: 60%;
  padding: 12px 12px 0 12px;

}

.item-skeleton > .picture::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--background-1);
}

.item-product > .picture {
  width: 100%;
  height: 60%;
  background-image: v-bind(pictureUrl);
  background-position: center;
  background-size: cover;
}

.info {
  width: 100%;
  padding: 6px;
  height: 40%;
}
</style>
