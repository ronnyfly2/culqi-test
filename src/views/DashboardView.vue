<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { storeToRefs } from "pinia"
import { useAuth } from '@/stores/auth'
import { useEmployee } from '@/stores/employee'

import skeletonTable from '@/components/skeleton/Table.vue'


const authStore = useAuth()
const employeeStore = useEmployee()

const { employeesData, total, loading, cargosList } = storeToRefs(employeeStore)
const { user } = storeToRefs(authStore)

const limit = ref(10)
const currentPage = ref(1)

const initials = computed(() => `${user.value.nombre.split(' ')[0].charAt(0)}${user.value.nombre.split(' ')[1].charAt(0)}`)

const imgLogo = computed(
  () =>
    new URL(
      '@/assets/images/logo-black.svg',
      import.meta.url
    ).href
)
const logout = () => {
  authStore.logout()
}

const getEmployees = () => {
  employeeStore.getEmployees(limit.value, currentPage.value)
}

watch(limit, () => {
  getEmployees()
})
watch(currentPage, () => {
  getEmployees()
})

getEmployees()
</script>
<template lang="pug">
header.bg-white.flex.justify-end.px-8.py-6.border-b.fixed.w-full.top-0
  .flex.items-center.gap-2
    .rounded-full.w-8.h-8(class="bg-[#EB6F25] justify-center text-xs flex items-center align-center ") {{ initials }}
    span.text-xs {{ user.nombre }} 
aside.fixed.h-screen.border-r(class="w-[280px] py-[24px] px-[32px] bg-[#ffffff] top-0 left-0")
  h1.text-center
    img.online-block.m-auto(:src="imgLogo" alt="Logo Culqi")
  nav.mt-6(class="flex flex-col h-[calc(100%-90px)] justify-between")
    ul.text-left
      li
        a.text-focus.block.py-4(href="#" class="hover:text-focus")
          v-icon.mr-2(name="la-users-solid" scale="1")
          | Empleados
      li
        a.block.py-4(href="#" class="hover:text-focus")
          v-icon.mr-2(name="la-briefcase-solid" scale="1")
          | Reclutamiento
    button.border.border-culqi-primary.bg-white.text-culqi-primary.w-full.px-6.mt-6(class="py-[20px] rounded-[10px]" @click="logout") Salir

.w-screen.m-auto.mt-6.pt-16(class="bg-[#E9EAEC] pl-[280px] h-[calc(100vh-25px)]")
  .container.px-6.m-auto
    .flex.flex-col(class="p-[24px] bg-white rounded-[16px] shadow-lg")
      .flex.mb-6.justify-between.items-center
        h3.text-2xl.font-bold Empleados
        .w-16.h-6.rounded-lg.animate-pulse(v-if="loading" class="bg-[#F1F2F4]")
        .flex.justify-between.gap-4(v-else class="w-[297px]")
          button.border.border-culqi-primary.bg-white.text-culqi-primary.w-full(class="h-[56px] rounded-[10px]") 
            v-icon.mr-2(name="la-file-download-solid" scale="1")
            | Descargar
          button.bg-culqi-primary.text-white.w-full(class="h-[56px] rounded-[10px]") 
            v-icon.mr-2(name="la-plus-solid" scale="1")
            | Nuevo
      .flex.gap-4.justify-stretch.animate-pulse(v-if="loading")
        .w-full.h-6.my-4.rounded-lg(class="bg-[#F1F2F4]")
        .w-full.h-6.my-4.rounded-lg(class="bg-[#F1F2F4]")
        .w-full.h-6.my-4.rounded-lg(class="bg-[#F1F2F4]")
      .flex.gap-4.justify-stretch.mb-6(v-else)
        .input-group.relative(class="basis-8/12")
          input(placeholder="Buscar empleado" class="h-[54px] border border-gray-300 w-full py-4 px-5 focus:outline-none focus:border focus:border-focus hover:border-focus rounded-[10px]")
          v-icon(name="la-search-solid" scale="1" class="absolute top-[18px] right-[14px]")
        select(class="basis-4/12 h-[54px] border border-gray-300 w-full py-4 px-5 focus:outline-none focus:border focus:border-focus hover:border-focus rounded-[10px]")
          option(value="") Nombre de cargo
          option(v-for="item in cargosList" :value="item") {{ item }}
      .overflow-auto(class="max-h-[596px]")
        skeleton-table(v-if="loading")
        table.w-full.text-xs(v-else)
          thead.sticky.top-0
            tr.text-left(class="leading-[19.2px] bg-[#FAFAFA] text-[#687588]")
              th(class="p-4 rounded-tl-[10px] rounded-bl-[10px]")
                span.block Nombre
              th(class="p-4")
                span.block Nombre Cargo
              th(class="p-4")
                span.block Departamento
              th(class="p-4")
                span.block Oficina
              th(class="p-4")
                span.block Cuenta
              th(class="p-4 rounded-tr-[10px] rounded-br-[10px] text-right")
                span.block Acciones
          tbody(v-if="employeesData && employeesData.length > 0")
            tr(class="bg-[#fdfdfd] border-b" v-for="employeeItem in employeesData " :key="employeeItem.id")
              td(class="py-[18px] px-[16px]")
                span.block {{ employeeItem.nombre }}
                span(class="text-[#A0AEC0] text-[10px]") {{ employeeItem.correo }}
              td(class="py-[18px] px-[16px]")
                span.block {{ employeeItem.cargo }}
              td(class="py-[18px] px-[16px]")
                span.block {{ employeeItem.departamento }}
              td(class="py-[18px] px-[16px]")
                span.block {{ employeeItem.oficina }}
              td(class="py-[18px] px-[16px]")
                span.block {{ employeeItem.estadoCuenta }}
              td(class="py-[18px] px-[16px]")
                .flex.gap-2.justify-end
                  button.rounded.bg-focus.text-white.px-2.py-2
                    v-icon(name="la-eye-solid" scale="1")
                  button.rounded.text-white.px-2.py-2(class="bg-[#2F78EE]")
                    v-icon(name="la-pencil-alt-solid" scale="1")
                  button.rounded.text-white.px-2.py-2(class="bg-[#E03137]")
                    v-icon(name="la-trash-solid" scale="1")
          tbody(v-else)
            tr
              td(class="py-[18px] px-[16px]" colspan="6")
                .flex.justify-center.items-center
                  span.block(class="text-[#A0AEC0]") No se encontraron resultados
      .flex.mt-6.justify-between.items-center
        .group-buttons.flex(v-if="total > 0")
          button.rounded.border.w-8.h-8.text-xs
            v-icon(name="la-angle-left-solid" scale="1")
          button.rounded.border.w-8.h-8.text-xs(v-for="page in Math.ceil(total/limit)" :key="page" @click="currentPage = page" ) {{ page }}
          button.rounded.border.w-8.h-8.text-xs
            v-icon(name="la-angle-right-solid" scale="1")
        .group
          .flex.items-center.w-56.justify-end.gap-2
            span(class="text-[#A0AEC0] text-xs") Mostranto 1 a {{ employeesData.length }} de {{ total }}
            select(v-model="limit" class="basis-4/12 h-[32px] border border-gray-300 w-full py-2 px-2 focus:outline-none focus:border-focus hover:border-focus rounded-[10px]")
              option(value="10") 10
              option(value="20") 20
              option(value="50") 50
</template>

<style>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  appearance: none;
}
</style>
