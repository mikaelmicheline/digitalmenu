<template>
  <button>{{ text }}</button>
</template>

<script lang="ts" setup>
import { defineProps, computed, withDefaults } from 'vue'

type Props = {
  text?: string
  color?: string
  icon?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '100%'
})

const iconUrl = computed(() => {
  return `url(${props.icon})`
})
</script>

<style scoped>
button {
  background-color: v-bind(color);
  border: 0;
  color: var(--white-1);
  width: v-bind(width);
  height: 44px;
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
  background-image: v-bind(iconUrl);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

</style>
