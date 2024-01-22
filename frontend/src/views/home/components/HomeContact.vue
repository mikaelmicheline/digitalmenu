<template>
  <section id="contact">

  <h2>Contact</h2>

  <form @submit.prevent="submitForm">

    <div class="form-controls">

      <div class="form-control form-name">
        <label for="contact-name">Name</label>
        <input id="contact-name" name="contact-name" ref="contactName" type="text" placeholder="Type your name here" required />
      </div>

      <div class="form-control form-phone">
        <label for="contact-phone">Phone</label>
        <input id="contact-phone" name="contact-phone" ref="contactPhone" type="text" placeholder="Type your phone number here" required />
      </div>

      <div class="form-control form-email">
        <label for="contact-email">Email</label>
        <input id="contact-email" name="contact-email" ref="contactEmail" type="email" placeholder="Type your email address here" required />
      </div>

      <div class="form-control form-message">
        <label for="contact-message">Message</label>
        <textarea id="contact-message" name="contact-message" ref="contactMessage" rows="4" placeholder="Tell us what you want to know about Digital Menu" required />
      </div>

    </div>

    <footer class="form-buttons">

      <HomeContactSubmitButton :disabled="messageSent">{{ submitFormButtonMessage }}</HomeContactSubmitButton>
      <span> or </span>
      <WhatsAppLink>Use WhatsApp</WhatsAppLink>

    </footer>

  </form>

  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HomeContactSubmitButton from './HomeContactSubmitButton.vue'
import WhatsAppLink from './WhatsAppLink.vue'

const submitFormButtonMessage = ref<string>('Submit Form')
const messageSent = ref<boolean>(false)

const contactName = ref()
const contactPhone = ref()
const contactEmail = ref()
const contactMessage = ref()

function submitForm () {
  messageSent.value = true
  submitFormButtonMessage.value = 'Sending...'

  setTimeout(() => {
    submitFormButtonMessage.value = 'Message Sent!'
    contactName.value.value = ''
    contactPhone.value.value = ''
    contactEmail.value.value = ''
    contactMessage.value.value = ''
  }, 1000)
}
</script>

<style scoped>

section {
  margin: 50px 10px 0 10px;
  scroll-margin-top: 80px;
}

h2 {
  text-align: center;
}

form {
  display: block;
  margin: 30px auto 0 auto;
  max-width: 900px;
}

.form-controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
}

.form-control {
  margin: 0 10px 10px 0;
}

.form-control label {
  display: block;
  margin-bottom: 4px;
}

.form-control input,
.form-control textarea {
  line-height: 1.4;
  width: 100%;
}

.form-control.form-name {
  flex: 2 1 300px;
}

.form-control.form-phone {
  flex: 1 1 200px;
}

.form-control.form-email {
  flex: 1 1 200px;
}

.form-control.form-message {
  flex: 1 1 600px;
}

.form-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.form-buttons > span {
  margin: 10px 0;
}

@media only screen and (min-width: 640px) {
  .form-buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .form-buttons > span {
    margin: 0 10px;
  }
}

@media only screen and (min-width: 640px) {
  section {
    margin: 60px 20px 0 20px;
  }

  form {
    margin: 40px auto 0 auto;
  }
}

@media only screen and (min-width: 800px) {
  section {
    margin: 70px 30px 0 30px;
  }

  form {
    margin: 50px auto 0 auto;
  }
}

</style>
