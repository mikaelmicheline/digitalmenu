<template>

  <CompanyHeader :company-name="company?.name" />

  <main>

    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>

    <div class="space"></div>

    <CompanyFooter></CompanyFooter>

  </main>
  <NotificationList />
</template>

<script lang="ts" setup>
import CompanyHeader from '@/views/company/components/CompanyHeader.vue'
import CompanyFooter from '@/views/company/components/CompanyFooter.vue'
import CompanyModel from '@/models/CompanyModel'
import CompanyService from '@/services/CompanyService'
import { useStore } from 'vuex'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()

const company = ref<CompanyModel>()
const isOpen = ref<boolean>()

async function refreshCompanyData (): Promise<void> {
  const { companyId } = route.params
  if (typeof companyId !== 'string') return

  const storedCompany = (await store.getters['company/getCompany'](companyId)) as CompanyModel | undefined

  if (storedCompany) {
    company.value = { ...storedCompany }
    setTimeout(() => { refreshCompanyData() }, 20000)
    return
  }

  const fetchedCompany = await CompanyService.getCompany(companyId)

  if (fetchedCompany.result === 'notFound') {
    router.push('/notFound')
    return
  }

  if (fetchedCompany.result === 'success') {
    company.value = { ...fetchedCompany.content }
  } else {
    company.value = undefined
  }

  store.dispatch({
    type: 'company/setCompany',
    value: { company: { ...fetchedCompany.content } }
  })

  setTimeout(() => { refreshCompanyData() }, 5000)
}

onMounted(async () => {
  refreshCompanyData()
})

watch(company, async () => {
  if (company.value?.isOpen === isOpen.value) return

  isOpen.value = company.value?.isOpen

  if (isOpen.value) {
    store.dispatch({
      type: 'notifications/notify',
      value: {
        notification: {
          message: 'HEY, WE ARE NOW OPEN!',
          type: 'success'
        }
      }
    })
  }

  if (!isOpen.value) {
    store.dispatch({
      type: 'notifications/notify',
      value: {
        notification: {
          message: 'SORRY, WE ARE CLOSED NOW',
          type: 'warning'
        }
      }
    })
  }
})

</script>

<style scoped>
section {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.space {
  width: 100%;
  height: 600px;
}
</style>
