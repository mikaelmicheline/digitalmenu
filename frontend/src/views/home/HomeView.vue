<template>
  <HomeHeader />
  <main>
    <HomeHero />

    <div class="temp"></div>
    <div class="temp"></div>
    <div class="temp"></div>
    <div class="temp"></div>
  </main>
</template>

<script lang="ts" setup>
import HomeHeader from './components/HomeHeader.vue'
import HomeHero from './components/HomeHero.vue'
</script>

<style scoped>
.temp {
  height: 400px;
}
</style>
