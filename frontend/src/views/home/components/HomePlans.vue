<template>
  <section id="plans">

  <h2>Plans</h2>

  <div class="plans-content">
    <HomePlan name="Great" :benefits="['Lorem', 'Deserunt', 'Pariatur', 'Consequat', 'Officia', 'Ullamco']" valuePerMonth="$40.00" />
    <HomePlan name="Amazing" :benefits="['Lorem', 'Deserunt', 'Pariatur', 'Consequat', 'Officia', 'Ullamco']" valuePerMonth="$90.00" />
    <HomePlan name="Magnificent" :benefits="['Lorem', 'Deserunt', 'Pariatur', 'Consequat', 'Officia', 'Ullamco']" valuePerMonth="$150.00" />
  </div>

  </section>
</template>

<script lang="ts" setup>
import HomePlan from './HomePlan.vue'
</script>

<style scoped>

section {
  margin: 50px 10px 0 10px;
  scroll-margin-top: 80px;
}

h2 {
  text-align: center;
}

.plans-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10px auto 0 auto;
  max-width: 900px;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 640px) {
  section {
    margin: 60px 20px 0 20px;
  }

  .plans-content {
    margin: 20px auto 0 auto;
  }
}

@media only screen and (min-width: 800px) {
  section {
    margin: 70px 30px 0 30px;
  }

  .plans-content {
    margin: 30px auto 0 auto;
  }
}

</style>
