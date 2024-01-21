<template>
  <HomeHeader />
  <main>
    <HomeHero />
    <HomeAbout />
    <HomePartners />
    <div class="temp"></div>
    <div class="temp"></div>
    <HomeFooter />
  </main>
</template>

<script lang="ts" setup>
import HomeHeader from './components/HomeHeader.vue'
import HomeHero from './components/HomeHero.vue'
import HomeAbout from './components/HomeAbout.vue'
import HomePartners from './components/HomePartners.vue'
import HomeFooter from './components/HomeFooter.vue'
</script>

<style scoped>
.temp {
  height: 400px;
}
</style>
