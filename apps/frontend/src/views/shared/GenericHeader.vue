<template>
  <header>

    <router-link class="main-link" to="/">Digital Menu</router-link>

    <div class="right">

      <ThemeTogglerIconButton />

    </div>

  </header>
</template>

<script lang="ts" setup>
</script>

<style scoped>

header {
  width: 100%;
  height: 60px;
  background-color: var(--background-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  top: 0;
  padding: 0 10px;
}

header .main-link {
  font-size: 1.72rem;
}

.right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

@media only screen and (min-width: 640px) {
  header {
    padding: 0 20px;
  }
}

@media only screen and (min-width: 800px) {
  header {
    padding: 0 30px;
  }
}

</style>
