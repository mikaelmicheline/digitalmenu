<template>
  <main>
    <h1>This is a H1</h1>
    <h2>This is a H2</h2>
    <h3>This is a H3</h3>
    <h4>This is a H4</h4>
    <h5>This is a H5</h5>
    <h6>This is a H6</h6>
    <p>This is a paragraph</p>
    <button @click="toggleTheme">Toggle theme</button>
    <div class="colors">
      <div>background-1</div>
      <div>background-2</div>
      <div>font-1</div>
      <div>font-2</div>
    </div>
  </main>
</template>

<script lang="ts" setup>
function toggleTheme () {
  const isLight = document.documentElement.getAttribute('data-theme') !== 'dark'
  if (isLight) {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }
}
</script>

<style scoped>

main {
  margin: 40px;
}

main > * {
  margin-bottom: 20px;
  display: block;
}

main > a {
  width: 100px;
}

main > .colors {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 200px;
}

.colors > div {
  flex: 1 1 100px;
  min-width: 120px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.colors :nth-child(1) {
  background-color: var(--background-1);
  color: var(--font-1);
}

.colors :nth-child(2) {
  background-color: var(--background-2);
  color: var(--font-2);
}

.colors :nth-child(3) {
  background-color: var(--font-1);
  color: var(--background-1);
}

.colors :nth-child(4) {
  background-color: var(--font-2);
  color: var(--background-2);
}

</style>
