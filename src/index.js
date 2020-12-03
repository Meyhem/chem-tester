import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import { App } from './app'

import './lib/lib.css'
import { GlobalStyle, theme } from './theme'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
