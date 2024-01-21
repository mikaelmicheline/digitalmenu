<template>
  <button :class="selectedTheme" @click="toggleTheme"></button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

type AvailableThemes = 'light' | 'dark'
const selectedTheme = ref<AvailableThemes>('light')

onMounted(() => {
  const isDarkThemeSelected = document.documentElement.getAttribute('data-theme') === 'dark'
  if (isDarkThemeSelected) {
    selectedTheme.value = 'dark'
  } else {
    selectedTheme.value = 'light'
  }
})

function toggleTheme () {
  if (selectedTheme.value === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark')
    selectedTheme.value = 'dark'
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    selectedTheme.value = 'light'
  }
}

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
}

.light {
  background-image: url(/src/assets/light.svg);
}

.dark {
  background-image: url(/src/assets/dark.svg);
}

button:hover {
  opacity: 0.6;
}

</style>
