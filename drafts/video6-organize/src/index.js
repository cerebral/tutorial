import App from 'cerebral'
import Devtools from 'cerebral/devtools'
import main from './main'

const app = App(main, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})

const openItemsPage = app.get(sequences.openItemsPage)
openItemsPage()