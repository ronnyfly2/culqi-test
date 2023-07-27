import { defineStore } from "pinia"
import { AuthService } from "@/services/auth"
import Session from '@/composables/useSesion'

const authService = new AuthService()

export const useAuth = defineStore('auth', {
  state: () => ({
    loginError: '',
    user: Session.getJWTData() || {},
    accessToken: Session.getToken() || '',
    loading: false,
  }),
  getters: {

  },

  actions: {
    async loginUser(correo: string, password: string) {
      this.loading = true
      this.loginError = ''
      const res = await authService.getLogin(correo, password)
        .then((response) => {
          this.accessToken = response.data.token
          this.user = response.data.user
          Session.setToken(this.accessToken)
          Session.setJWTData(this.user)
          window.location.reload()
          this.loading = false
          return true
        })
        .catch((error) => {
          this.loginError = error.data.message
          this.loading = false
          return false
        })
      return res
    },
    async logout() {
      Session.clear()
      this.$reset()
      window.location.reload()
    },
  },
})
