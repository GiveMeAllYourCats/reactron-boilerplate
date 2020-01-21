import React from 'react'
import { resolve } from 'app-root-path'
import url from 'url'
import path from 'path'
import './App.css'

const logo = resolve('./assets/images/logo.svg')
const electronLogo = resolve('./assets/images/electron.svg')

const electron = window.require('electron')
const ipc = electron.ipcRenderer
ipc.send('app-test')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>reactron-boilerplate</h1>
        <div className="row">
          <div className="column">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="column">
            <img src={electronLogo} className="App-logo" alt="logo" />
          </div>
        </div>
        <a className="App-link" href="https://github.com/michaeldegroot/reactron-boilerplate" target="_blank" rel="noopener noreferrer">
          More info
        </a>
        Look below for more info!
      </header>
      <section>
        <h1>Tech stack</h1>
        <h3>Desktop</h3>
        <ul>
          <li>Electron</li>
        </ul>

        <h3>User Interface</h3>
        <ul>
          <li>React.js</li>
        </ul>
        <h3>Database</h3>
        <ul>
          <li>Objection.js</li>
          <li>Knex.js</li>
        </ul>
        <h3>Distribution</h3>
        <ul>
          <li>electron-builder</li>
        </ul>
        <h3>Library's</h3>
        <ul>
          <li>custom-electron-titlebar</li>
          <li>electron-util</li>
          <li>electron-window-state</li>
        </ul>
        <h1>Auto reload</h1>
        <p>
          Edit <code>src/**/*</code> and save to hot reload.
        </p>
        <p>Edit anything else and save to auto reload the electron applicatoon.</p>
      </section>
    </div>
  )
}

export default App
