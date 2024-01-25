<template>
  <div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, onMounted } from 'vue'

interface Props {
  width?: string
  height?: string
  display?: string
  backgroundColor?: string
  borderRadius?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  display: 'inline-block',
  backgroundColor: 'black',
  borderRadius: '0'
})

onMounted(() => {
  console.log(props)
})

</script>

<style scoped>
div {
  width: v-bind(width);
  height: v-bind(height);
  display: v-bind(display);
  background-color: v-bind(backgroundColor);
  position: relative;
  overflow: hidden;
  border-radius: v-bind(borderRadius);
}

div::before {
  content: "";
  position: absolute;
  width: 40px;
  height: 100%;
  top: 0;
  left: -40px;
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
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.1), transparent);
}

@-webkit-keyframes Animation {
  0% { left: -40px }
  100% { left: 100% }
}

@-moz-keyframes Animation {
  0% { left: -40px }
  100% { left: 100% }
}

@keyframes Animation {
  0% { left: -40px }
  100% { left: 100% }
}
</style>
