<template>

  <div class="item-wrapper">

    <div class="first-column">

      <div class="item-picture-large">
      </div>

    </div>

    <div class="second-column">

      <div class="first-row">

        <div class="item-picture-small">
        </div>

        <div class="item-info">
          <p>{{data?.product.name}}</p>
          <p>Comments: <em>{{ data?.comments ? 'yes' : 'no' }}</em></p>
          <p>Amount: <em>{{ data?.amount }}</em></p>
          <p>Total: <em>{{ `\$${totalPrice}` }}</em></p>
        </div>

      </div>

      <div class="second-row">
        <EditProductButton />
        <RemoveFromCartButton @click="removeFromCart" />
      </div>

    </div>

  </div>

</template>

<script lang="ts" setup>
import { computed, defineProps, withDefaults } from 'vue'
import CartProductModel from '@/models/CartProductModel'
import EditProductButton from './EditProductButton.vue'
import RemoveFromCartButton from './RemoveFromCartButton.vue'
import config from '@/config'
import { useStore } from 'vuex'

const store = useStore()

type Props = {
  data?: CartProductModel
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined
})

const pictureUrl = computed(() => {
  return `url(${config.apiUrl}${props.data?.product.picture})`
})

const totalPrice = computed(() => {
  return (props.data?.product?.salePrice || 0) * (props.data?.amount || 0)
})

function removeFromCart () {
  store.dispatch({
    type: 'cart/removeProduct',
    value: {
      companyId: props.data?.product?.companyId,
      cartProductId: props.data?.id
    }
  })
}

</script>

<style scoped>

.item-wrapper {
  width: 100%;
  padding: 6px;
  margin-bottom: 20px;
  background-color: var(--background-2);
  box-shadow: var(--default-box-shadow);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.first-column {
  display: none;
  flex: 0 0 40%;
  align-self: stretch;
  margin-right: 10px;
}

.item-picture-large {
  width: 100%;
  height: 100%;
  align-self: stretch;
  background-image: v-bind(pictureUrl);
  background-position: center;
  background-size: cover;
  position: relative;
  transition: opacity 0.2s ease-in-out;
  flex-grow: 0;
  flex-shrink: 0;
}

.second-column {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1 1 60%;
}

.first-row {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.item-picture-small {
  flex: 0 0 40%;
  align-self: stretch;
  background-image: v-bind(pictureUrl);
  background-position: center;
  background-size: cover;
  position: relative;
  transition: opacity 0.2s ease-in-out;
}

.item-info {
  flex: 1 1 60%;
  margin-left: 10px;
}

.item-info > p {
  margin-bottom: 6px;
}

.item-info > p:first-of-type {
  font-weight: 500;
  margin-bottom: 10px;
}

.second-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

em {
  opacity: 0.8;
}

@media only screen and (min-width: 460px) {
  .item-picture-small {
    display: none;
  }

  .first-column {
    display: block;
  }
}

@media only screen and (min-width: 800px) {
  .item-picture-small {
    display: block;
  }

  .first-column {
    display: none;
  }

  .item-wrapper {
    margin-bottom: 30px;
    padding: 10px;
  }
}

@media only screen and (min-width: 900px) {
  .item-picture-small {
    display: none;
  }

  .first-column {
    display: block;
  }
}

</style>
