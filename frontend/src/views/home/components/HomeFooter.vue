<template>
  <footer>

    <div class="first-row">
      <div class="title">
        <p>Digital Menu</p>
        <p>Your menu. Everywhere.</p>
      </div>
      <div class="social-links">
        <a class="social-link"><span id="instagram"></span></a>
        <a class="social-link"><span id="facebook"></span></a>
        <a class="social-link"><span id="youtube"></span></a>
      </div>
    </div>

    <div class="second-row">
      <div class="legal">
        <a href="#privacy">Privacy Notice</a>
        <a href="#cookies">Cookies</a>
      </div>
      <div class="copyright">© 2024 Digital Menu</div>
    </div>

  </footer>
</template>

<script lang="ts" setup>
</script>

<style scoped>

footer {
  margin-top: 30px;
  background-color: var(--background-2);
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
}

.first-row,
.second-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.first-row {
  margin-bottom: 20px;
}

.title {
  display: flex;
  flex-direction: column;
}

.title > p:first-child {
  font-size: 1.3rem;
}

.title > p:last-child {
  font-size: 0.8rem;
}

.social-link {
  display: inline-block;
  margin-left: 4px;
}

.social-link > span {
  background-color: inherit;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  transition: opacity 0.2s ease-in-out;
}

.social-link > span:hover {
  opacity: 0.8;
}

#instagram {
  background-image: url(/src/assets/instagram-light.svg);
}

#facebook {
  background-image: url(/src/assets/facebook-light.svg);
}

#youtube {
  background-image: url(/src/assets/youtube-light.svg);
}

:root[data-theme="dark"] #instagram {
  background-image: url(/src/assets/instagram-dark.svg);
}

:root[data-theme="dark"] #facebook {
  background-image: url(/src/assets/facebook-dark.svg);
}

:root[data-theme="dark"] #youtube {
  background-image: url(/src/assets/youtube-dark.svg);
}

.legal {
  display: flex;
  flex-direction: column;
}

.legal a {
  text-decoration: underline;
  font-size: 0.8rem;
  line-height: 1.6;
}

.copyright {
  font-size: 0.8rem;
  line-height: 1.6;
  align-self: flex-end;
}

@media only screen and (min-width: 640px) {
  footer {
    margin-top: 40px;
    padding: 20px 20px;
  }

  .title {
    flex-direction: row;
    align-content: end;
  }

  .title p:last-child {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-left: 6px;
    transform: translateY(-2px);
  }

  .social-link > span {
    width: 32px;
    height: 32px;
  }

  .legal {
    flex-direction: row;
  }

  .legal a:last-child {
    margin-left: 18px;
  }
}

@media only screen and (min-width: 800px) {
  footer {
    margin-top: 50px;
    padding: 30px 30px;
  }
}

</style>
