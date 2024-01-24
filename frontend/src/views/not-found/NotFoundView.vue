<template>
  <main>
    <section>
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
  text-align: center;
}

section *:nth-child(1),
section *:nth-child(2) {
  margin-bottom: 20px;
}

button {
  background-color: inherit;
  border: 0;
}

button:hover {
  text-decoration: underline;
}
</style>
