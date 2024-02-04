<template>
  <section>
    <div v-if="dataLoaded">
      <MenuProductListCategory v-for="category in categories" :key="category.category" :data="category" :is-skeleton="false" />
    </div>
    <div v-else>
      <MenuProductListCategory />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import ProductService from '@/services/ProductService'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import CategoryWithProductsModel from '@/models/CategoryWithProductsModel'
import MenuProductListCategory from './MenuProductListCategory.vue'

const route = useRoute()
const store = useStore()

const dataLoaded = ref<boolean>(false)
const categories = ref<CategoryWithProductsModel[]>([])

async function getCategories (): Promise<void> {
  const { companyId } = route.params
  if (typeof companyId !== 'string') return

  const storedCategoriesWithProducts = (await store.getters['product/getCategoriesWithProducts'](companyId)) as CategoryWithProductsModel[]

  if (storedCategoriesWithProducts.length > 0) {
    categories.value = storedCategoriesWithProducts
    dataLoaded.value = true
    return
  }

  const fetchedCategoriesWithProducts = await ProductService.getAllCategoriesWithProducts(companyId)

  if (fetchedCategoriesWithProducts.result === 'success') {
    categories.value = fetchedCategoriesWithProducts.content.map(c => ({ ...c }))
  } else {
    categories.value = []
  }

  store.dispatch({
    type: 'product/setCategoriesWithProducts',
    value: { companyId, categories: fetchedCategoriesWithProducts.content }
  })

  dataLoaded.value = true
}

onMounted(() => {
  getCategories()
})

</script>

<style scoped>
section > div {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
