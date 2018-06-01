import App from 'cerebral'
import Devtools from 'cerebral/devtools'
import { sequences } from 'cerebral/proxy'
import React from 'react'
import { render } from 'react-dom'
import { Container } from '@cerebral/react'
import AppComponent from './components/App'
import main from './main'

const app = App(main, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})

const openPostsPage = app.get(sequences.openPostsPage)

openPostsPage()

render(
  <Container app={app}>
    <AppComponent />
  </Container>,
  document.querySelector('#app')
)