<template>
  <section :class="{ 'item-skeleton': !dataLoaded, 'item-product': dataLoaded }">

    <component :is="dataLoaded ? 'header' : 'Skeleton'" class="product-header">
      <h1>{{ product?.name }}</h1>
    </component>

    <div class="product-data">
      <component :is="dataLoaded ? 'div' : 'Skeleton'" class="product-picture"></component>
      <component :is="dataLoaded ? 'div' : 'Skeleton'" class="product-info">
        <p v-if="dataLoaded">{{ product?.description }}</p>
        <p v-if="dataLoaded">{{ `\$${product?.salePrice}` }}</p>
        <AddToCartButton v-if="dataLoaded" />
      </component>
    </div>

  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
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
})

const pictureUrl = computed(() => {
  return `url(${config.apiUrl}${product.value?.picture})`
})

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
  margin-top: 30px;
  height: 300px;
}

.item-product .product-picture {
  background-image: v-bind(pictureUrl);
  background-position: center;
  background-size: cover;
  min-width: 40%;
}

.product-info {
  flex-grow: 4;
  background-color: var(--background-2);
  margin-top: 30px;
  padding: 20px;
}

.item-skeleton .product-info {
  height: 300px;
}

@media only screen and (min-width: 640px) {
  .product-data {
    display: flex;
    flex-direction: row;
  }

  .product-info {
    margin-left: 30px;
  }
}
</style>
