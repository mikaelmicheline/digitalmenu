<template>
  <section :class="{ 'item-skeleton': !dataLoaded, 'item-product': dataLoaded }">

    <router-link :to="`/company/${$route.params.companyId}/`">{{ '< back to menu' }}</router-link>

    <component :is="dataLoaded ? 'header' : 'Skeleton'" class="product-header">
      <h1>{{ product?.name }}</h1>
    </component>

    <div class="product-data">
      <component :is="dataLoaded ? 'div' : 'Skeleton'" class="product-picture" @click="openModal"></component>
      <component :is="dataLoaded ? 'div' : 'Skeleton'" class="product-info">
        <p v-if="dataLoaded">{{ product?.description }}</p>
        <p v-if="dataLoaded"><em>only </em>{{ `\$${product?.salePrice}` }}</p>
        <AddToCartButton v-if="dataLoaded" />
      </component>
    </div>

    <Teleport to="body">
      <div @click="closeModal" class="product-picture-modal">
        <div></div>
      </div>
    </Teleport>

  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onUnmounted } from 'vue'
import ProductService from '@/services/ProductService'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import ProductModel from '@/models/ProductModel'
import config from '@/config'
import AddToCartButton from './components/AddToCartButton.vue'

const route = useRoute()
const router = useRouter()
const store = useStore()

const dataLoaded = ref<boolean>(false)
const product = ref<ProductModel | undefined>(undefined)
const isModalOpen = ref<boolean>(false)
const shouldAllowModal = ref<boolean>(window.innerWidth >= 800)

async function getProduct (): Promise<void> {
  const { companyId, productId } = route.params
  if (typeof companyId !== 'string') return
  if (typeof productId !== 'string') return

  const storedProduct = (await store.getters['product/getProduct'](companyId, productId)) as ProductModel | undefined

  if (storedProduct) {
    product.value = { ...storedProduct }
    dataLoaded.value = true
    return
  }

  const fetchedProduct = await ProductService.getProduct(companyId, productId)

  if (fetchedProduct.result === 'notFound') {
    router.push('/notFound')
    return
  }

  if (fetchedProduct.result === 'success') {
    product.value = { ...fetchedProduct.content }
  } else {
    product.value = undefined
  }

  dataLoaded.value = true
}

onMounted(() => {
  getProduct()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})

const pictureUrl = computed(() => {
  return `url(${config.apiUrl}${product.value?.picture})`
})

const modalDisplay = computed(() => {
  return isModalOpen.value ? 'flex' : 'none'
})

function openModal () {
  if (!shouldAllowModal.value) return
  isModalOpen.value = true
}

function closeModal () {
  isModalOpen.value = false
}

function onResize () {
  shouldAllowModal.value = window.innerWidth >= 800
}

</script>

<style scoped>
section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.product-header {
  background-color: var(--background-2);
  min-height: 60px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}

.product-header h1 {
  font-size: 1.6rem;
}

.product-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-picture {
  flex-grow: 3;
  background-color: var(--background-2);
  margin-top: 22px;
  height: 300px;
}

.item-product .product-picture {
  background-image: v-bind(pictureUrl);
  background-position: center;
  background-size: cover;
  min-width: 40%;
  cursor: pointer;
}

.product-info {
  flex-grow: 4;
  background-color: var(--background-2);
  margin-top: 22px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.item-skeleton .product-info {
  height: 300px;
}

.product-info > p:first-of-type {
  white-space: pre-wrap;
}

.product-info > p:last-of-type {
  font-size: 2rem;
  text-align: right;
  margin: 30px 0;
}

.product-info > p:last-of-type > em {
  font-size: 1rem;
  opacity: 0.8;
}

.product-picture-modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background-color: rgba(0,0,0,0.65);
  z-index: 3;
  display: v-bind(modalDisplay);
  justify-content: center;
  align-items: center;
}

.product-picture-modal > div {
  width: 80%;
  height: 80%;
  background-image: v-bind(pictureUrl);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

@media only screen and (min-width: 640px) {
  .product-data {
    flex-direction: row;
  }

  .product-info {
    margin-left: 22px;
  }
}
</style>
