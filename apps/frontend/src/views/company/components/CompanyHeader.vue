<template>
  <header>

    <router-link :to="`/company/${$route.params.companyId}`">{{ companyName || '...' }}</router-link>

    <nav>
      <ul>
        <li><MenuIconButton /></li>
        <li><CartIconButton /></li>
        <li><InfoIconButton /></li>
        <li><ThemeTogglerIconButton /></li>
      </ul>
    </nav>

  </header>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import CartIconButton from '@/views/company/components/CartIconButton.vue'
import MenuIconButton from '@/views/company/components/MenuIconButton.vue'
import InfoIconButton from '@/views/company/components/InfoIconButton.vue'

interface Props {
  companyName?: string
}

defineProps<Props>()
</script>

<style scoped>

header {
  width: 100%;
  background-color: var(--background-2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}

header > a {
  font-size: 1.72rem;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
}

nav {
  width: 100%;
}

ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

@media only screen and (min-width: 520px) {
  header {
    padding: 12px 20px;
    flex-direction: row;
  }

  header > a {
    text-align: left;
    height: 100%;
    margin: 0 20px 0 0;
  }

  nav {
    flex: 0 0 190px;
  }

  ul {
    justify-content: space-between;
  }
}

@media only screen and (min-width: 800px) {
  header {
    padding: 16px 30px;
  }
}

</style>
