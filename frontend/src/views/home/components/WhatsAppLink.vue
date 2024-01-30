<template>
  <a href="#whatsapp">
    <span>
      <slot></slot>
    </span>
  </a>
</template>

<script lang="ts" setup>
</script>

<style scoped>
a {
  padding: 6px 10px;
  border: 1px solid var(--font-1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;
  box-shadow: var(--default-box-shadow);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-2);
}

a:hover {
  transform: scale(1.02);
}

a span {
  width: calc(100% - 32px);
  display: inline-flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}

a::before {
  content: "";
  display: inline-block;
  width: 28px;
  height: 28px;
  margin-right: 4px;
  background-image: url(/src/assets/whatsapp.svg);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

</style>
