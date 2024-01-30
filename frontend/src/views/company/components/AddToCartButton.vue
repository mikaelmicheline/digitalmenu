<template>
  <button>Add to Cart</button>
</template>

<script lang="ts" setup>
</script>

<style scoped>
button {
  background-color: var(--green);
  border: 0;
  color: var(--white-1);
  height: 44px;
  width:100%;
  text-wrap: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
}

button:hover {
  opacity: 0.8;
}

button::before {
  content: "";
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-right: 4px;
  background-image: url(/src/assets/plus.svg);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

</style>
