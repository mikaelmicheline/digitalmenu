<template>
  <transition-group tag="ul" name="notification-list">
    <NotificationCard v-for="notification in notifications"
      :key="notification.id"
      :message="notification.message"
      :type="notification.type" />
  </transition-group>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const notifications = computed(() => store.state.notifications.notifications)

</script>

<style scoped>
ul {
  width: 260px;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 0 20px 20px 0;
  overflow: visible;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  grid-auto-flow: row;
  row-gap: 10px;
}

.notification-list-enter-from,
.notification-list-leave-to {
  opacity: 0.4;
  transform: translateX(400px);
}

.notification-list-enter-active,
.notification-list-leave-active {
  transition: all 2.2s ease;
}

.notification-list-enter-to,
.notification-list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

@media only screen and (min-width: 640px) {
  ul {
    margin: 0 40px 40px 0;
    width: 280px;
  }
}

@media only screen and (min-width: 800px) {
  ul {
    margin: 0 60px 60px 0;
    width: 300px;
  }
}

</style>
