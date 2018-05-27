import { CerebralError } from 'cerebral'

export class ApiError extends CerebralError {
  constructor (message, status) {
    super(message)
    this.status = status
  }
}