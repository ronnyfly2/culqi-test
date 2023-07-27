import { defineStore } from "pinia"
import { EmployeeService } from "@/services/employee"
import { type EmployeeResponseInterface } from "@/interfaces/employee"

const employeeService = new EmployeeService()

interface State {
  employeesData  : EmployeeResponseInterface[],
  total          : number,
  loading        : boolean,
  error          : string
  cargo          : string[]
}

export const useEmployee = defineStore('employee', {
  state: (): State => ({
    employeesData  : [],
    total          : 0,
    loading        : false,
    error          : '',
    cargo          : []
  }),
  getters: {
    cargosList: (state:State) => {
      state.employeesData.forEach( ( employee ) => {
        const cargo = employee.cargo
        if (!state.cargo.includes(cargo)) {
          state.cargo.push(cargo)
        }
      })
      return state.cargo
    }
  },
  actions: {
    async getEmployees(limit: number|string, page: number|string) {
      this.loading = true
      const res = await employeeService.getEmployees(limit, page)
        .then((response) => {
          this.employeesData = response.data
          this.total = response.total
          this.loading = false
          return true
        })
        .catch((error) => {
          this.error = error.response
          this.loading = false
          return false
        })
      return res
    }
  }
})

