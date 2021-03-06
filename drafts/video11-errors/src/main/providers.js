import keyBy from 'lodash.keyby'
import { ApiError } from './errors'

const API_URL = 'https://jsonplaceholder.typicode.com'

export const api = {
  getPosts() {
    return fetch(`${API_URL}/posts`)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json().then(posts => keyBy(posts, 'id'))
        }

        return response.text().then(text => {
          throw new ApiError(text, response.status)
        })
      })
  },
  getUser(id) {
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