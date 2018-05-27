import App from 'cerebral'
import Devtools from 'cerebral/devtools'

const app = App({
  state: {
    title: 'My Project'
  }
}, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})