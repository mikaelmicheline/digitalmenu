<template>
  <BaseIconButton
    kind="button"
    :icon-light="iconLight"
    :icon-dark="iconDark"
    @click.prevent="toggleTheme" />
</template>

<script lang="ts" setup>
import iconLight from '@/assets/theme-light.svg'
import iconDark from '@/assets/theme-dark.svg'
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
</style>
