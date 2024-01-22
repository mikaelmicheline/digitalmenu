<template>
  <div class="plan-content">
    <header>
      <p>{{ planInfo.name }}</p>
    </header>
    <div>
      <p>Benefits</p>
      <ul>
        <li v-for="benefit in planInfo.benefits" :key="benefit">{{ benefit }}</li>
      </ul>
    </div>
    <footer>
      <p>{{ planInfo.valuePerMonth }}</p>
      <p>per month</p>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const planInfo = defineProps<{
  name: string;
  benefits: string[];
  valuePerMonth: string;
}>()

</script>

<style scoped>
.plan-content {
  background-color: var(--background-2);
  color: var(--font-2);
  max-width: 250px;
  min-width: 220px;
  margin: 0 16px;
  flex: 1 1 220px;
  margin-bottom: 40px;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  position: relative;
  border-radius: 4px;
}

.plan-content:hover {
  transform: translateY(-6px);
}

.plan-content header {
  position: relative;
  top: -20px;
  left: 10px;
  background-color: var(--font-1);
  width: 100%;
  margin: 0 auto;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px 0;
}

.plan-content header p {
  color: var(--background-2);
  font-size: 2.1rem;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  text-align: center;
  padding: 4px 0;
}

.plan-content div {
  margin-top: 20px;
  text-align: center;
}

.plan-content div ul {
  margin-top: 20px;
}

.plan-content footer {
  border-top: 0.5px solid var(--font-2);
  padding-top: 20px;
  width: 80%;
  margin: 20px auto;
}

.plan-content footer p:first-child {
  font-size: 2.4rem;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  text-align: center;
}

.plan-content footer p:last-child {
  font-size: 0.8rem;
  text-align: center;
  margin-top: 6px;
}
</style>
