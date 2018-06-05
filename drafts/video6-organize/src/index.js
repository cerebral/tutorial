import App, { sequences } from 'cerebral'
import Devtools from 'cerebral/devtools'
import main from './main'

const app = App(main, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})

const openUserModal = app.get(sequences.openUserModal)
openUserModal({ id: 1 })