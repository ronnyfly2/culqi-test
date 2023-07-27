<template lang="pug">
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