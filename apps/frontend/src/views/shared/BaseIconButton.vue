<template>
  <button v-if="kind==='button'" type="button" class="icon-button">
    <slot></slot>
  </button>
  <router-link v-else :to="to!" class="icon-button">
    <slot></slot>
  </router-link>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from 'vue'

interface Props {
  kind?: 'button' | 'link'
  to?: string
  iconLight?: string
  iconDark?: string
  backgroundColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  kind: 'button',
  to: undefined,
  iconLight: undefined,
  iconDark: undefined,
  backgroundColor: 'invisible'
})

const iconLightUrl = computed(() => {
  return `url(${props.iconLight})`
})

const iconDarkUrl = computed(() => {
  return `url(${props.iconDark})`
})
</script>

<style scoped>
.icon-button {
  background-color: v-bind(backgroundColor);
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
  background-image: v-bind(iconLightUrl);
}

:root[data-theme="dark"] .icon-button {
  background-image: v-bind(iconDarkUrl);
}

.icon-button:hover {
  opacity: 0.6;
}

</style>
