import api from "@/api"

export class AuthService {
  public getLogin = async (correo: string, password: string): Promise<any> => {
    try {
      const response = await api.post('/auth/login', {
        correo,
        password,
      })
      return response.data
    } catch (error) {
      console.error("service getLogin ", error)
      throw error
    }
  }
}
