<template>
  <button></button>
</template>

<script lang="ts" setup>
</script>

<style scoped>
button {
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
  background-image: url(/src/assets/cart-light.svg);
}

:root[data-theme="dark"] button {
  background-image: url(/src/assets/cart-dark.svg);
}

button:hover {
  opacity: 0.6;
}

</style>
