import api from "@/api"
import { type EmployeeResponseInterface } from "@/interfaces/employee"

interface EmployeeServiceInterface {
  data: EmployeeResponseInterface[],
  total: number
}
export class EmployeeService {
  public getEmployees = async (limit: string|number, page: string|number): Promise<EmployeeServiceInterface> => {
    try {
      const response = await api.get(`/empleados?limit=${limit}&page=${page}`)
      return <EmployeeServiceInterface> response.data
    } catch (error) {
      console.error("service getEmployees ", error)
      throw error
    }
  }
}
