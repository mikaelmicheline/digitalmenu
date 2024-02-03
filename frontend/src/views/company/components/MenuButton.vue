<template>
  <BaseIconButton
    kind="link"
    :icon-light="iconLight"
    :icon-dark="iconDark"
    :to="`/company/${$route.params.companyId}`" />
</template>

<script lang="ts" setup>
import iconLight from '@/assets/menu-light.svg'
import iconDark from '@/assets/menu-dark.svg'
</script>

<style scoped>
</style>
