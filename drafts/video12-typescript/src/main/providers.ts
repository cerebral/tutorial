import keyBy from 'lodash.keyby'
import { ApiError } from './errors'
import { posts, User } from './types'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const api = {
  getposts(): Promise<posts> {
    return fetch(`${API_URL}/posts`)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json().then(posts => keyBy('id', posts))
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