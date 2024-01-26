<template>
  <router-link :to="`/company/${$route.params.companyId}/`"></router-link>
</template>

<script lang="ts" setup>
</script>

<style scoped>
a {
  background-color: inherit;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  transition: opacity 0.2s ease-in-out;
  background-image: url(/src/assets/menu-light.svg);
}

:root[data-theme="dark"] a {
  background-image: url(/src/assets/menu-dark.svg);
}

a:hover {
  opacity: 0.6;
}

</style>
