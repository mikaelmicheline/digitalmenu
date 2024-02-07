<template>
  <section>

    <div class="hero">

      <div class="hero-title">
        <div>
          <h1>Your menu.</h1>
          <p>Everywhere.</p>
        </div>
      </div>

      <div class="hero-img"></div>

    </div>

  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>

.hero {
  position: relative;
  margin-top: 60px;
  width: 100%;
  height: 360px;
}

.hero-title {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.hero-title > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hero h1 {
  color: var(--font-2);
  font-size: 2.2rem;
  font-weight: 700;
  text-shadow: 2px 2px 3px var(--background-1);
}

.hero p {
  color: var(--font-2);
  font-size: 1.6rem;
  font-weight: 700;
  font-style: italic;
  letter-spacing: 2px;
  text-shadow: 2px 2px 3px var(--background-1);
}

.hero-img {
  background-image: url(/src/assets/home-hero.jpg);
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  top: 0;
  left: 0;
}

@media only screen and (min-width: 640px) {
  .hero {
    height: 440px;
  }

  .hero h1 {
    font-size: 3rem;
  }

  .hero p {
    font-size: 2rem;
    letter-spacing: 4px;
  }
}

@media only screen and (min-width: 800px) {
  .hero {
    height: 600px;
  }

  .hero h1 {
    font-size: 4.4rem;
  }

  .hero p {
    font-size: 3rem;
    letter-spacing: 6px;
  }
}

</style>
