import { CerebralError } from 'cerebral'

export class ApiError extends CerebralError {
  status: string
  constructor (message, status) {
    super(message)
    this.status = status
  }
}