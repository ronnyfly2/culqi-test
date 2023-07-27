import SecureLS from "secure-ls";
const ls = new SecureLS()

export default class Session {
  static AUTH_TOKEN = "culqi_auth_token"
  static JWT_USER_DATA = "culqi_user_data"

  static setToken(token: string) {
    ls.set(this.AUTH_TOKEN, token)
  }

  static setJWTData (JWTData: object) {
    const serializedJWTData = JSON.stringify(JWTData)
    ls.set(this.JWT_USER_DATA, serializedJWTData)
  }

  static getToken() {
    try {
      return ls.get(this.AUTH_TOKEN)
    } catch (e) {
      return null
    }
  }

  static getJWTData () {
    const serializedJWTData = ls.get(this.JWT_USER_DATA)
    if (!serializedJWTData) return { }

    return JSON.parse(serializedJWTData)
  }

  static clear() {
    localStorage.removeItem(this.AUTH_TOKEN)
    localStorage.removeItem(this.JWT_USER_DATA)
    ls.removeAll()
  }
}
