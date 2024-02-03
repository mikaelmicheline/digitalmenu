<template>
  <Teleport to="body">
    <div class="back"></div>
  </Teleport>
  <Teleport to="body">
    <div class="card-container">
      <div class="card">
        <header></header>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.back {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.65);
}

.card-container {
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 400px;
  height: 400px;
  background-color: var(--background-2);
  border-radius: 20px;
}

.card header {
  background-color: darkcyan;
  height: 40px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
</style>
