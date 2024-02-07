<template>
  <li :class="type">
    <router-link v-if="link" :to="link">{{ message }}</router-link>
    <p v-else>{{ message }}</p>
  </li>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

type Props = {
  message: string;
  link: string;
  type: string;
}

withDefaults(defineProps<Props>(), {
  type: 'info',
  link: undefined
})
</script>

<style scoped>
li {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: var(--default-box-shadow);
}

li > a,
li > p {
  color: var(--white-1);
  display: inline-block;
}

li > a:hover {
  text-decoration: underline;
}

.success {
  background-color: var(--green);
}

.warning {
  background-color: var(--red);
}

</style>
