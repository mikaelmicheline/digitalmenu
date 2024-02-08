<template>
  <footer>

    <div class="first-row">
      <div class="title">
        <p v-if="displayPoweredBy">powered by</p>
        <p>
          <router-link to="/">Digital Menu</router-link>
        </p>
      </div>
      <div class="subtitle">
        <p>Your menu.</p>
        <p>Everywhere.</p>
      </div>
    </div>

    <div class="second-row">
      <div class="legal">
        <router-link to="/privacy">Privacy Notice</router-link>
        <router-link to="/cookie">Cookie Notice</router-link>
      </div>
      <div class="copyright">© 2024 Digital Menu</div>
    </div>

  </footer>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

type Props = {
  displayPoweredBy: boolean
}

withDefaults(defineProps<Props>(), {
  displayPoweredBy: true
})
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
  align-items: center;
}

.first-row {
  margin-bottom: 20px;
  font-size: 0.8rem;
}

.first-row a {
  font-size: 1.3rem;
}

.title,
.subtitle {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  align-items: flex-start;
}

.subtitle {
  align-items: flex-end;
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

  .title,
  .subtitle {
    flex-direction: row;
    align-content: end;
  }

  .title p:first-child,
  .subtitle p:first-child {
    margin-right: 6px;
  }

  .title p:first-child {
    transform: translateY(3px);
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
