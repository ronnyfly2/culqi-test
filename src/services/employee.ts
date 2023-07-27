import api from "@/api"
// import { MemberInterface } from "@/interfaces/student/MemberInterface"

export class EmployeeService {
  public getEmployees = async (limit: string|number, page: string|number): Promise<any> => {
    // if (!id || id === 0) {
    //   return Promise.reject("Member id is required")
    // }
    try {
      const response = await api.get(`/empleados?limit=${limit}&page=${page}`)
      return response.data
    } catch (error) {
      console.error("service getEmployees ", error)
      throw error
    }
  }

  // public validateJwt = async (): Promise<MemberInterface> => {
  //   try {
  //     const response = await api.get(`check_jwt`)
  //     return <MemberInterface>response.data.member
  //   } catch (error) {
  //     if (isDevelopment) {
  //       console.error("service checkJwt ", error)
  //     }
  //     throw error
  //   }
  // }

}
