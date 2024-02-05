<template>
  <BaseModal
    :is-open="isOpen"
    title="Add to Cart"
    @close-button-click="$emit('closeButtonClick')"
    width="90%"
    max-width="800px">

      <p class="product-name">{{ product?.name }}</p>

      <form @submit.prevent="submitForm">

        <div class="comments-wrapper">
          <label for="comments">Comments ({{ commentsNumberOfLetters }} / 200)</label>
          <textarea name="comments" id="comments" v-model="comments" maxlength="200" />
        </div>

        <div class="bottom-wrapper">

          <div class="amount-wrapper">
            <p>Amount</p>
            <p @click="decreaseAmount">-</p>
            <p>{{ amount }}</p>
            <p @click="increaseAmount">+</p>
          </div>

          <div class="total-wrapper">
            <p>Total</p>
            <p>{{ `\$${totalPrice}` }}</p>
          </div>

        </div>

        <ConfirmButton />
      </form>

  </BaseModal>
</template>

<script lang="ts" setup>
import ProductModel from '@/models/ProductModel'
import ConfirmButton from './ConfirmButton.vue'
import { defineProps, withDefaults, defineEmits, ref, computed, onMounted } from 'vue'

interface Props {
  isOpen?: boolean,
  product?: ProductModel
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false
})

defineEmits(['closeButtonClick'])

const comments = ref<string>()
const amount = ref<number>()

onMounted(() => {
  amount.value = 0
})

const commentsNumberOfLetters = computed(() => {
  return comments.value?.length || 0
})

const totalPrice = computed(() => {
  return (props.product?.salePrice || 0) * (amount.value || 0)
})

function increaseAmount () {
  if (amount.value === undefined) amount.value = 0
  if (amount.value === 99) return
  amount.value++
}

function decreaseAmount () {
  if (amount.value === undefined) amount.value = 1
  if (amount.value === 1) return
  amount.value--
}

function submitForm () {
  console.log('')
}
</script>

<style scoped>
.product-name {
  margin-bottom: 20px;
  font-size: 1.4rem;
}

.comments-wrapper {
  margin-bottom: 10px;
}

.comments-wrapper > label {
  margin-bottom: 10px;
  display: block;
}

.comments-wrapper > textarea {
  display: block;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100px;
  max-height: 200px;
}

.bottom-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
}

.amount-wrapper,
.total-wrapper {
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

</style>
