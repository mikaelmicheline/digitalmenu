<template>
  <button @click="toggleTheme"><img :src="imgSource" alt=""></button>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import lightThemeImage from '../../assets/light.svg'
import darkThemeImage from '../../assets/dark.svg'

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

const imgSource = computed(() => {
  if (selectedTheme.value === 'light') {
    return lightThemeImage
  } else {
    return darkThemeImage
  }
})

</script>

<style scoped>
button {
  background-color: inherit;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}

img {
  width: 30px;
  height: 30px;
  transition: opacity 0.2s ease-in-out;
}

img:hover {
  opacity: 0.6;
}

</style>
