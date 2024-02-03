<template>
  <Teleport v-if="isOpen" to="body">
    <div class="back"></div>
  </Teleport>
  <Teleport v-if="isOpen" to="body">
    <div class="card-container">
      <div class="card">
        <header>
          <p>{{ title }}</p>
          <BaseIconButton
            kind="button"
            :icon-light="iconLight"
            :icon-dark="iconDark"
            @click.prevent="closeModal" />
        </header>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import iconLight from '@/assets/close-light.svg'
import iconDark from '@/assets/close-dark.svg'
import { defineProps, withDefaults } from 'vue'

interface Props {
  title?: string
  isOpen?: boolean
}

withDefaults(defineProps<Props>(), {
  isOpen: false
})

function closeModal () {
  console.log('')
}
</script>

<style scoped>
.back {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.65);
}

.card-container {
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  min-width: 200px;
  min-height: 200px;
  background-color: var(--background-1);
  border-radius: 20px;
}

.card > header {
  background-color: var(--background-2);
  height: 40px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.card > header > p {
  background-color: transparent;
  margin-right: 20px;
}
</style>
