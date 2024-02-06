<template>
  <div class="summary">
    <p>Summary</p>
    <p>Total</p>
    <ConfirmButton />
  </div>
</template>

<script lang="ts" setup>
import ConfirmButton from './ConfirmButton.vue'
</script>

<style scoped>
.summary {
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
}

@media only screen and (min-width: 800px) {
  .summary {
    width: 320px;
    margin-bottom: 0;
    margin-left: 20px;
  }
}
</style>
