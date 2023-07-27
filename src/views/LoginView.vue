<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from "pinia"
import { useAuth } from '@/stores/auth'

const authStore = useAuth()

const { loginError } = storeToRefs(authStore)

const refEmail = ref('')
const refPassword = ref('')
const refError = ref()

const logoCulqi = computed(
  () =>
    new URL(
      `@/assets/images/logo-white.svg`,
      import.meta.url
    ).href
)
const imgXL = computed(
  () =>
    new URL(
      `@/assets/images/img.jpg`,
      import.meta.url
    ).href
)
const login = async () => {
  if (refEmail.value === '' || refPassword.value === '') {
    refError.value = 'Los campos * son obligatorios'
    return false
  }
  await authStore.loginUser(refEmail.value, refPassword.value)
  refError.value = loginError.value || ''
}
</script>

<template lang="pug">
main.flex
  .h-screen(class="w-1/2 left bg-culqi-primary")
    div(class="h-[66%] w-full border-b-[6px]").border-focus
      img.object-cover(class="w-full h-full" :src="imgXL" alt="image")
    .flex.flex-col.items-center(class="h-[34%] py-[50px]")
      div(class="px-5 max-w-[720px]")
        h1
          span.hidden CULQI
          img(:src="logoCulqi" alt="Logo Culqi")
        p.text-white.text-5xl.font-bold.my-6(class="leading-[57.6px]") Dale más power ⚡ a tus empleados hoy 💪
        span.text-white.text-lg Te ayudamos a gestionarlos de manera más sencilla
  .h-screen.flex.justify-center.items-center.relative(class="w-1/2")
    .w-full(class="max-w-[480px] px-5")
      h3.text-2xl.font-bold.mb-5.text-center Iniciar sesión
      form(@submit.prevent="login")
        .group-input.mb-6
          label(class="block mb-2.5 text-sm") Correo electrónico #[span(class="text-red-600") *]
          input.input-text(
            autocomplete="off"
            type="email"
            v-model="refEmail"
            placeholder="Ingresa el correo electrónico"
          )
        .group-input.mb-6
          label(class="block mb-2.5 text-sm") Contraseña #[span(class="text-red-600") *]
          input.input-text(
            autocomplete="off"
            type="password"
            v-model="refPassword"
            placeholder="Ingresa la contraseña"
          )
        .flex.items-center(v-if="refError")
          v-icon(name="la-exclamation-circle-solid" scale="1" class="text-[#E03137]")
          span(class="text-[12px] text-[#E03137]") {{ refError }}
      button.bg-culqi-primary.text-white.w-full.px-6.mt-6(type="submit" class="py-[20px] rounded-[10px]" @click="login") Iniciar sesión
      .flex.justify-center.items-center.mt-6
        span.text-culqi-primary.text-sm.text-greyscale-500.mr-1(href="#") ¿Eres nuevo aquí?
        a.text-culqi-primary.text-sm.text-focus(href="javascript:;") Crea una cuenta
      //- v-icon(name="la-trash-alt" scale="1.5")
      small.absolute.flex.justify-center.items-center.mt-6.inset-x-0(class="bottom-[24px]") © 2023 Culqi . Todos los derechos reservados
</template>
<style lang="scss">
.input-text{
  @apply border border-gray-300 w-full py-4 px-5 focus:outline-none focus:border focus:border-focus hover:border-focus rounded-[10px]
}
</style>