<template>
  <header>

    <router-link class="mainLink" to="/">Digital Menu</router-link>

    <div class="right">
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <ThemeToggler />
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

header .mainLink {
  font-size: 1.72rem;
}

.right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

nav {
  display: none;
  margin-right: 10px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

li {
  margin-right: 20px;
}

li {
   transition: transform 0.2s ease-in-out;
}

li:hover {
  transform: translateY(-2px);
}

@media only screen and (min-width: 500px) {
  header {
    padding: 0 20px;
  }
}

@media only screen and (min-width: 640px) {
  nav {
    display: flex;
  }
}

@media only screen and (min-width: 800px) {
  header {
    padding: 0 30px;
  }
}

</style>
