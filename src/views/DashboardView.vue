<script setup lang="ts">
import { computed, } from 'vue'

const imgLogo = computed(
  () =>
    new URL(
      `@/assets/images/logo-black.svg`,
      import.meta.url
    ).href
)
</script>
<template lang="pug">
header.bg-white.flex.justify-end.px-8.py-6.border-b.fixed.w-full.top-0
  h1 This is an Dashboard page header *
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
    button.border.border-culqi-primary.bg-white.text-culqi-primary.w-full.px-6.mt-6(class="py-[20px] rounded-[10px]") Salir
        
.w-screen.m-auto.mt-6.pt-16(class="bg-[#E9EAEC] pl-[280px] h-[calc(100vh-25px)]")
  .container.px-6
    .flex.flex-col(class="p-[24px] bg-white rounded-[16px] shadow-lg")
      .flex.mb-6.justify-between.animate-pulse
        h3.text-2xl.font-bold Empleados
        .w-16.h-6.rounded-lg(class="bg-[#F1F2F4]")
      .flex.gap-4.justify-stretch.animate-pulse
        .w-full.h-6.my-4.rounded-lg(class="bg-[#F1F2F4]")
        .w-full.h-6.my-4.rounded-lg(class="bg-[#F1F2F4]")
        .w-full.h-6.my-4.rounded-lg(class="bg-[#F1F2F4]")
      .overflow-auto
        table.animate-pulse.w-full
          thead
            tr(class="bg-[#FAFAFA]")
              th(class="py-[10px] px-[12px] rounded-tl-[10px] rounded-bl-[10px]")
                .flex.gap-2
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-36.h-5.rounded-lg(class="bg-[#F1F2F4]")
              th(class="py-[10px] px-[12px]")
                .flex.gap-2
                  .w-16.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
              th(class="py-[10px] px-[12px]")
                .flex.gap-2
                  .w-16.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
              th(class="py-[10px] px-[12px]")
                .flex.gap-2
                  .w-16.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
              th(class="py-[10px] px-[12px]")
                .flex.gap-2
                  .w-16.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
              th(class="py-[10px] px-[12px]")
                .flex.gap-2
                  .w-16.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
              th(class="py-[10px] px-[12px]")
                .flex.gap-2
                  .w-16.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
          tbody
            tr(class="bg-[#fdfdfd] border-b" v-for="n in 8" :key="n")
              td(class="py-[18px] px-[16px]")
                .flex.gap-2
                  .w-5.h-5.rounded-lg(class="bg-[#F1F2F4]")
                  .w-36.h-5.rounded-lg(class="bg-[#F1F2F4]")
              td(class="py-[18px] px-[16px]")
                .flex.gap-2
                  .w-24.h-5.rounded-lg(class="bg-[#F1F2F4]")
              td(class="py-[18px] px-[16px]")
                .flex.gap-2
                  .w-24.h-5.rounded-lg(class="bg-[#F1F2F4]")
              td(class="py-[18px] px-[16px]")
                .flex.gap-2
                  .w-24.h-5.rounded-lg(class="bg-[#F1F2F4]")
              td(class="py-[18px] px-[16px]")
                .flex.gap-2
                  .w-24.h-5.rounded-lg(class="bg-[#F1F2F4]")
              td(class="py-[18px] px-[16px]")
                .flex.gap-2
                  .w-24.h-5.rounded-lg(class="bg-[#F1F2F4]")
              td(class="py-[18px] px-[16px]")
                .flex.gap-2
                  .w-24.h-5.rounded-lg(class="bg-[#F1F2F4]")
</template>

<style>
</style>
