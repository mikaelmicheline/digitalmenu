<template>
  <BaseModal
    :is-open="isOpen"
    title="Add to Cart"
    @close-button-click="$emit('closeButtonClick')">
    <p>{{ product?.name }}</p>
    <p>{{ `\$${product?.salePrice}` }}</p>
    <p>Amount</p>
    <p>Comments</p>
  </BaseModal>
</template>

<script lang="ts" setup>
import ProductModel from '@/models/ProductModel'
import { defineProps, withDefaults, defineEmits } from 'vue'

interface Props {
  isOpen?: boolean,
  product?: ProductModel
}

withDefaults(defineProps<Props>(), {
  isOpen: false
})

defineEmits(['closeButtonClick'])
</script>

<style scoped>
</style>
