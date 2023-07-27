export interface EmployeeResponseInterface {
  id           : number
  nombre       : string
  correo       : string
  cargo        : string
  departamento : string
  oficina      : string
  estadoCuenta : string
  empleados    : EmployeeInterface
}

export interface EmployeeInterface {
  id           : number
  nombre       : string
  correo       : string
  cargo        : string
  departamento : string
  oficina      : string
  estadoCuenta : string
}