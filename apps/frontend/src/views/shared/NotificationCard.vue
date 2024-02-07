<template>
  <li :class="type">
    <p>{{ message }}</p>
  </li>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

type Props = {
  message: string;
  type: string;
}

withDefaults(defineProps<Props>(), {
  type: 'info'
})
</script>

<style scoped>
li {
  width: 100%;
  min-height: 80px;
  padding: 10px;
  border-radius: 10px;
  background-color: var(--blue);
  color: var(--white-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: var(--default-box-shadow);
}

.success {
  background-color: var(--green);
}

.warning {
  background-color: var(--red);
}

</style>
