<template>
  <button type="submit" href="#whatsapp">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
</script>

<style scoped>
button {
  padding: 6px 10px;
  border: 1px solid var(--font-1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  box-shadow: var(--default-box-shadow);
  display: inline-block;
  height: 42px;
  background-color: var(--background-2);
}

button:disabled {
  opacity: 0.6;
}

button:enabled:hover {
  transform: scale(1.02);
}

button:enabled:active {
  transform: scale(1.02);
  background-color: var(--background-1);
}

</style>
