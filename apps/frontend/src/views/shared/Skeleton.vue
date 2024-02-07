<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
div {
  position: relative;
  overflow: hidden;
}

div::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 100%;
  top: 0;
  transform: rotateZ(0deg);
  animation-name: Animation;
  animation-duration: 1.4s;
  animation-delay: 0;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-direction: normal;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);
}

:root[data-theme="dark"] div::before {
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.06), transparent);
}

@keyframes Animation {
  0% { left: -40px; opacity: 0; }
  40% { opacity: 1; }
  80% { opacity: 0.5; }
  100% { left: 100%; opacity: 0; }
}
</style>
