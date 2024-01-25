<template>
  <section id="partners">

  <h2>Partners</h2>

  <div class="partners-content">
    <div class="partner">
      <router-link to="/company/WonderCakes"></router-link>
    </div>
    <div class="partner">
      <router-link to="/company/WonderCakes"></router-link>
    </div>
    <div class="partner">
      <router-link to="/company/WonderCakes"></router-link>
    </div>
    <div class="partner">
      <router-link to="/company/WonderCakes"></router-link>
    </div>
    <div class="partner">
      <router-link to="/company/WonderCakes"></router-link>
    </div>
    <div class="partner">
      <router-link to="/company/WonderCakes"></router-link>
    </div>
  </div>

  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>

section {
  margin: 50px 10px 0 10px;
  scroll-margin-top: 80px;
}

h2 {
  text-align: center;
}

.partners-content {
  display: grid;
  margin: 30px auto 0 auto;
  width: 100%;
  max-width: 900px;
  grid-template-areas:
    "p1 p1 e1 e1"
    "p1 p1 p2 p2"
    "p3 p3 p2 p2"
    "p3 p3 p4 p4"
    "p5 p5 p4 p4"
    "p5 p5 p6 p6"
    "e2 e2 p6 p6";
  justify-items: center;
  align-items: center;
  justify-content: space-evenly;
  align-content: space-evenly;
  row-gap: 10px;
}

.partner {
  position: relative;
  width: 120px;
  height: 120px;
}

.partner > a {
  display: block;
  width: 100%;
  height: 100%;
}

.partner > a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--background-2);
  background-image: url(/src/assets/restaurant-logo-light.svg);
  background-position-x: center;
  background-position-y: center;
  background-size: 60%;
  background-repeat: no-repeat;
  display: block;
  z-index: -1;
  transition: opacity 0.2s ease-in-out;
}

.partner > a:hover::before {
  opacity: 0.7;
}

:root[data-theme="dark"] .partner > a::before {
  background-image: url(/src/assets/restaurant-logo-dark.svg);
}

.partners-content > div:nth-child(1) {
  grid-area: p1;
}

.partners-content > div:nth-child(2) {
  grid-area: p2;
}

.partners-content > div:nth-child(3) {
  grid-area: p3;
}

.partners-content > div:nth-child(4) {
  grid-area: p4;
}

.partners-content > div:nth-child(5) {
  grid-area: p5;
}

.partners-content > div:nth-child(6) {
  grid-area: p6;
}

@media only screen and (min-width: 400px) {
  .partners-content > div {
    width: 140px;
    height: 140px;
  }
}

@media only screen and (min-width: 500px) {
  .partners-content {
    margin: 40px auto 0 auto;
    grid-template-areas:
    "e1 p1 p1 p2 p2 p3 p3"
    "p4 p4 p5 p5 p6 p6 e2";
  }

  .partners-content > div {
    width: 120px;
    height: 120px;
  }
}

@media only screen and (min-width: 640px) {
  section {
    margin: 60px 20px 0 20px;
  }
}

@media only screen and (min-width: 800px) {
  section {
    margin: 70px 30px 0 30px;
  }

  .partners-content {
    margin: 50px auto 0 auto;
  }

  .partners-content > div {
    width: 160px;
    height: 160px;
  }
}

</style>
