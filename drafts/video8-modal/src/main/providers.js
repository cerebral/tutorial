const API_URL = 'https://jsonplaceholder.typicode.com'

export const api = {
  getposts() {
    return fetch(`${API_URL}/posts`)
      .then(response => response.json())
  },
  getUser(id) {
    return fetch(`${API_URL}/users/${id}`)
      .then(response => response.json())
  }
}