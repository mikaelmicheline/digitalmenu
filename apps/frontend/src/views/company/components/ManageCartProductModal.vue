<template>
  <BaseModal
    :is-open="isOpen"
    :title="mode === 'add' ? 'Add to Cart' : 'Edit Product'"
    @close-button-click="$emit('closeButtonClick')"
    @backdrop-click="$emit('backDropClick')"
    width="90%"
    max-width="700px">

      <p class="product-name">{{ product?.name }}</p>

      <form @submit.prevent="submitForm">

        <div class="comments-wrapper">
          <label for="comments">Comments ({{ commentsNumberOfLetters }} / 200)</label>
          <textarea name="comments" id="comments" v-model="comments" maxlength="200" />
        </div>

        <div class="bottom-wrapper">

          <div class="amount-wrapper">

            <p>Amount</p>

            <div class="amount-controls">

              <BaseIconButton
                kind="button"
                background-color="var(--red)"
                :icon-light="minusIcon"
                :icon-dark="minusIcon"
                @click="decreaseAmount" />

              <p>{{ amount }}</p>

              <BaseIconButton
                kind="button"
                background-color="var(--green)"
                :icon-light="plusIcon"
                :icon-dark="plusIcon"
                @click="increaseAmount" />

            </div>

          </div>

          <div class="total-wrapper">
            <p>Total</p>
            <p>{{ `\$${totalPrice}` }}</p>
          </div>

        </div>

        <ConfirmButton class="confirm-button" />
      </form>

  </BaseModal>
</template>

<script lang="ts" setup>
import ProductModel from '@/models/ProductModel'
import ConfirmButton from './ConfirmButton.vue'
import { defineProps, withDefaults, defineEmits, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import plusIcon from '@/assets/plus.svg'
import minusIcon from '@/assets/minus.svg'
import { v4 as uuidv4 } from 'uuid'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

interface Props {
  isOpen?: boolean,
  product?: ProductModel,
  mode?: 'add' | 'edit',
  cartProductId?: string,
  cartProductAmount?: number,
  cartProductComments?: string
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  mode: 'add'
})

const emit = defineEmits(['closeButtonClick', 'backDropClick', 'confirmButtonClick'])

const comments = ref<string>()
const amount = ref<number>()

onMounted(() => {
  amount.value = props.cartProductAmount || 1
  comments.value = props.cartProductComments || ''
})

const commentsNumberOfLetters = computed(() => {
  return comments.value?.length || 0
})

const totalPrice = computed(() => {
  return (props.product?.salePrice || 0) * (amount.value || 0)
})

function increaseAmount () {
  if (amount.value === undefined) amount.value = 0
  if (amount.value >= 99) amount.value = 98
  amount.value++
}

function decreaseAmount () {
  if (amount.value === undefined || amount.value <= 1) amount.value = 2
  amount.value--
}

function submitForm () {
  if (props.mode === 'add') {
    submitFormAdd()
  } else {
    submitFormEdit()
  }

  amount.value = 1
  comments.value = ''

  emit('confirmButtonClick')
}

function submitFormAdd () {
  store.dispatch({
    type: 'cart/addProduct',
    value: {
      companyId: props.product?.companyId,
      product: {
        id: uuidv4(),
        product: props.product,
        amount: amount.value,
        comments: comments.value
      }
    }
  })

  store.dispatch({
    type: 'notifications/notify',
    value: {
      notification: {
        message: 'PRODUCT ADDED TO CART',
        link: `/company/${route.params.companyId}/cart`,
        type: 'success'
      }
    }
  })
}

function submitFormEdit () {
  store.dispatch({
    type: 'cart/editProduct',
    value: {
      companyId: props.product?.companyId,
      cartProductId: props.cartProductId,
      amount: amount.value,
      comments: comments.value
    }
  })

  store.dispatch({
    type: 'notifications/notify',
    value: {
      notification: {
        message: 'PRODUCT EDITED',
        type: 'success'
      }
    }
  })
}
</script>

<style scoped>
.product-name {
  margin-bottom: 20px;
  font-size: 1.4rem;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
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
  outline: none !important;
  border: 1px solid rgba(0, 0, 0, 0.2);
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

.amount-controls {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.amount-controls > p {
  display: inline-block;
  width: 50px;
  text-align: center;
}

.confirm-button {
  margin-top: 10px;
  align-self: flex-end;
}

@media only screen and (min-width: 520px) {
  .product-name {
    font-size: 1.6rem;
    margin-bottom: 28px;
  }

  .bottom-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-content: flex-start;
  }

  .amount-wrapper,
  .total-wrapper {
    flex: 1 1 50%;
  }

  .total-wrapper {
    margin-left: 10px;
  }
}

@media only screen and (min-width: 640px) {
  .amount-wrapper > p,
  .amount-controls > p,
  .total-wrapper > p {
    font-size: 1.2rem;
  }
}

</style>
