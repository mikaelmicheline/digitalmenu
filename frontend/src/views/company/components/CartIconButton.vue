<template>
  <BaseIconButton
    kind="link"
    :icon-light="iconLight"
    :icon-dark="iconDark"
    :to="`/company/${$route.params.companyId}/cart`" />
</template>

<script lang="ts" setup>
import iconLight from '@/assets/cart-light.svg'
import iconDark from '@/assets/cart-dark.svg'
</script>

<style scoped>
</style>
