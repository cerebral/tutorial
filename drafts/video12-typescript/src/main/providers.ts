import keyBy from 'lodash.keyby'
import { ApiError } from './errors'
import { Items, User } from './types'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const api = {
  getItems(): Promise<Items> {
    return fetch(`${API_URL}/posts`)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json().then(items => keyBy('id', items))
        }

        return response.text().then(text => {
          throw new ApiError(text, response.status)
        })
      })
  },
  getUser(id: string): Promise<User> {
    return fetch(`${API_URL}/users/${id}`)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json()
        }

        return response.text().then(text => {
          throw new ApiError(text, response.status)
        })
      })
  }
}