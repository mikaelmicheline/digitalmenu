<template>
  <section id="about">

  <h2>About</h2>

  <div class="about-content">

    <div class="about-image-container">
      <div class="about-image"></div>
    </div>

    <div class="about-text">
      <p>
        Amet magna ipsum id esse mollit <em>reprehenderit</em> est non elit aute labore.
        Exercitation sit nisi aute excepteur. Do officia id amet adipisicing tempor cillum.
        Commodo culpa aliquip non irure sint irure <em>excepteur</em> ex.
      </p>
      <p>
        Est enim aliquip ullamco eu. Nisi dolor ex adipisicing <em>tempor</em> cupidatat
        cupidatat duis sunt. Irure <em>labore minim</em> sint.
        Tempor quis commodo et reprehenderit irure ex sunt duis.
      </p>
    </div>

  </div>

  </section>
</template>

<script lang="ts" setup>
</script>

<style scoped>

section {
  margin: 30px 10px 0 10px;
  scroll-margin-top: 80px;
}

h2 {
  text-align: center;
}

.about-content {
  display: flex;
  flex-direction: row;
  margin: 30px auto 0 auto;
  max-width: 900px;
  justify-content: center;
  align-items: center;
}

.about-text {
  text-align: center;
  flex: 1 1 50%;
}

.about-text > p:last-child {
  margin-top: 20px;
}

.about-text em {
  font-style: italic;
  font-weight: 600;
}

.about-image-container {
  display: none;
  flex: 1 1 50%;
}

.about-image {
  background-image: url(/src/assets/home-about.jpg);
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  opacity: 0.8;
  border-radius: 50%;
  height: 260px;
  width: 260px;
}

@media only screen and (min-width: 640px) {
  section {
    margin: 40px 20px 0 20px;
  }

  .about-content {
    margin: 40px auto 0 auto;
  }

  .about-image-container {
    display: block;
  }
}

@media only screen and (min-width: 800px) {
  section {
    margin: 40px 30px 0 30px;
  }

  .about-content {
    margin: 50px auto 0 auto;
  }

  .about-image {
    height: 300px;
    width: 300px;
  }
}

</style>
