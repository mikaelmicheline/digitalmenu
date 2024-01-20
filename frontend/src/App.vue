<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  --background-1: #FFFDF7;
  --background-2: #F0F0E7;

  --font-1: #5B5B5B;
  --font-2: #494744;
}

[data-theme="dark"] {
  --background-1: #5B5B5B;
  --background-2: #494744;

  --font-1: #FFFDF7;
  --font-2: #F0F0E7;
}

* {
  margin: 0;
  padding: 0;
  font-style: normal;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
  line-height: 1.2;
}

html {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-1);
  background-color: var(--background-1);
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

h1 {
  font-size: 1.78rem;
}

h2 {
  font-size: 1.66rem;
}

h3 {
  font-size: 1.52rem;
}

h4 {
  font-size: 1.4rem;
}

h5 {
  font-size: 1.26rem;
}

h6 {
  font-size: 1.1rem;
}

p {
  font-size: 1rem;
}

a {
  color: var(--font-1);
  cursor: pointer;
}

@media only screen and (min-width: 640px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.86rem;
  }

  h3 {
    font-size: 1.64rem;
  }

  h4 {
    font-size: 1.52rem;
  }

  h5 {
    font-size: 1.38rem;
  }

  h6 {
    font-size: 1.24rem;
  }

  p {
    font-size: 1.12rem;
  }
}

@media only screen and (min-width: 800px) {
  h1 {
    font-size: 2.4rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.8rem;
  }

  h5 {
    font-size: 1.6rem;
  }

  h6 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1.16rem;
  }
}

</style>
