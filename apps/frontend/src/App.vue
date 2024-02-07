<template>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
   --white-1: #FFFDF7;
   --white-2: #F0F0E7;

   --dark-gray-1: #5B5B5B;
   --dark-gray-2: #494744;

  --background-1: var(--white-1);
  --background-2: var(--white-2);

  --font-1: var(--dark-gray-1);
  --font-2: var(--dark-gray-2);

  --blue: rgb(91, 144, 200);
  --green: rgb(94, 189, 94);
  --red: rgb(210, 80, 80);

  --default-box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.2);
}

[data-theme="dark"] {
  --background-1: var(--dark-gray-1);
  --background-2: var(--dark-gray-2);

  --font-1: var(--white-1);
  --font-2: var(--white-2);
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

label,
button,
textarea,
select,
input {
  font-family: inherit;
  font-size: inherit;
  color: var(--font-1);
}

textarea:focus,
select:focus,
input:focus {
  font-family: inherit;
  font-size: inherit;
  color: var(--font-1);
}

:root[data-theme="dark"] textarea,
:root[data-theme="dark"] select,
:root[data-theme="dark"] input {
  font-family: inherit;
  font-size: inherit;
  color: var(--background-1);
}

:root[data-theme="dark"] textarea:focus,
:root[data-theme="dark"] select:focus,
:root[data-theme="dark"] input:focus {
  font-family: inherit;
  font-size: inherit;
  color: var(--background-1);
}

button {
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
    font-size: 1.06rem;
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
    font-size: 1.1rem;
  }
}

</style>
