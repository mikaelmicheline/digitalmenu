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
  background-color: rgb(91, 144, 200);
  color: var(--white-1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: var(--default-box-shadow);
}

.success {
  background-color: rgb(94, 189, 94);
}

.warning {
  background-color: rgb(210, 80, 80);
}

</style>
