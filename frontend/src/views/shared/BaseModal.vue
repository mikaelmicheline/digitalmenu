<template>
  <Teleport v-if="isOpen" to="body">
    <div class="backdrop" @click="backdropClick">
      <div class="card" @click="cardClick">
        <header>
          <p>{{ title }}</p>
          <BaseIconButton
            kind="button"
            :icon-light="iconLight"
            :icon-dark="iconDark"
            @click.prevent="$emit('closeButtonClick')" />
        </header>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import iconLight from '@/assets/close-light.svg'
import iconDark from '@/assets/close-dark.svg'
import { defineProps, withDefaults, defineEmits } from 'vue'

interface Props {
  title?: string
  isOpen?: boolean
  width?: string
  maxWidth?: string
}

withDefaults(defineProps<Props>(), {
  isOpen: false,
  width: '100%',
  maxWidth: '100%'
})

const emit = defineEmits(['closeButtonClick', 'backdropClick'])

function backdropClick (event: MouseEvent) {
  event.stopPropagation()
  emit('backdropClick')
}

function cardClick (event: MouseEvent) {
  event.stopPropagation()
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.65);
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: v-bind(width);
  max-width: v-bind(maxWidth);
  background-color: var(--background-1);
}

.card > header {
  background-color: var(--background-2);
  height: 40px;
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

.card > div {
  padding: 10px;
}
</style>
