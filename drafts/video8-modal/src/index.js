import App from 'cerebral'
import Devtools from 'cerebral/devtools'
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

const openpostsPage = app.get(sequences.openpostsPage)

openpostsPage()

render(
  <Container app={app}>
    <AppComponent />
  </Container>,
  document.querySelector('#app')
)