import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App.js'
import * as serviceWorker from './serviceWorker'

// Requires
const { resolve } = window.require('app-root-path')
const customTitlebar = window.require('custom-electron-titlebar')

// Init custom titlebar
const titlebar = new customTitlebar.Titlebar({
  backgroundColor: customTitlebar.Color.fromHex('#444'),
  icon: './assets/images/electron.svg'
})

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
