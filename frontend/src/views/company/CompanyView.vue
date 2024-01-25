
<template>
  <!-- <HomeHeader />
  <main>
    <HomeHero />
    <HomeAbout />
    <HomePartners />
    <HomePlans />
    <HomeContact />
    <HomeFooter />
  </main> -->
  <section>
    {{ company ? company.name : '---' }}
    <p>
      {{ company ? company.isOpen ? 'OPEN NOW' : 'CLOSED' : '---' }}
    </p>
    <div>
      <router-link to="/">home</router-link>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import CompanyModel from '@/models/CompanyModel'
import CompanyService from '@/services/CompanyService'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()

const company = ref<CompanyModel>()

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

</script>

<style scoped>
section{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
