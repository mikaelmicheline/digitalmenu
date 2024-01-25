<template>
  <main>
    <section>
      <div class="img"></div>
      <h1>Oops!</h1>
      <p>Page not found</p>
      <button type="button" @click="$router.go(-1)">
        &lt; Back
      </button>
    </section>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section *:nth-child(1),
section *:nth-child(2),
section *:nth-child(3) {
  margin-bottom: 20px;
}

.img {
  width: 100px;
  height: 100px;
  background-image: url(/src/assets/not-found.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}

button {
  background-color: inherit;
  padding-bottom: 2px;
  border: 1px solid transparent;
}

button:hover {
  border-bottom: 1px solid var(--font-1);
}
</style>
