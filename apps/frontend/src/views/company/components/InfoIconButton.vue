<template>
  <BaseIconButton
    kind="link"
    :icon-light="iconLight"
    :icon-dark="iconDark"
    :to="`/company/${$route.params.companyId}/info`" />
</template>

<script lang="ts" setup>
import iconLight from '@/assets/info-light.svg'
import iconDark from '@/assets/info-dark.svg'
</script>

<style scoped>
</style>
