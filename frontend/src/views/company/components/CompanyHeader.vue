<template>
  <header>

    <p>{{ companyName || '...' }}</p>

    <nav>
      <ul>
        <li><MenuButton /></li>
        <li><CartButton /></li>
        <li><ThemeToggler /></li>
      </ul>
    </nav>

  </header>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import CartButton from '@/views/company/components/CartButton.vue'
import MenuButton from '@/views/company/components/MenuButton.vue'

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

header > p {
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

@media only screen and (min-width: 640px) {
  header {
    padding: 12px 20px;
  }
}

@media only screen and (min-width: 800px) {
  header {
    padding: 16px 30px;
    flex-direction: row;
  }

  header > p {
    text-align: left;
    height: 100%;
    margin: 0 20px 0 0;
  }

  nav {
    flex: 0 0 140px;
  }

  ul {
    justify-content: space-between;
  }
}

</style>
