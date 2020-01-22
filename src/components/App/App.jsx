import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css'
import MarkdownDisplayFile from '../MarkdownDisplayFile/MarkdownDisplayFile.jsx'
import Overview from '../Overview/Overview.jsx'

// how to include media
const logo = './assets/images/logo.svg'

// how to send ipc
const electron = window.require('electron')
const ipc = electron.ipcRenderer
ipc.send('app-test')

export default class App extends React.Component {
  render() {
    return (
      <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
      */}
        <Switch>
          <Route exact path="/overview">
            <Overview />
          </Route>
          <Route exact path="/readme">
            <MarkdownDisplayFile source="readme.md" />
          </Route>
          <Route exact path="/database">
            <MarkdownDisplayFile source="database.md" />
          </Route>
          <Route exact path="/development">
            <MarkdownDisplayFile source="development.md" />
          </Route>
          <Route exact path="/distribution">
            <MarkdownDisplayFile source="distribution.md" />
          </Route>
          <Route exact path="/installation">
            <MarkdownDisplayFile source="installation.md" />
          </Route>
          <Route exact path="/ipc">
            <MarkdownDisplayFile source="ipc.md" />
          </Route>
          <Route exact path="/mobx">
            <MarkdownDisplayFile source="mobx.md" />
          </Route>
          <Route exact path="/routing">
            <MarkdownDisplayFile source="routing.md" />
          </Route>
          <Route exact path="/sass">
            <MarkdownDisplayFile source="sass.md" />
          </Route>
          <Route exact path="/splash">
            <MarkdownDisplayFile source="splash.md" />
          </Route>
          <Route exact path="/testing">
            <MarkdownDisplayFile source="testing.md" />
          </Route>

          <Route exact path="/">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                <h1 className="display-4">
                  {' '}
                  <img src={logo} width="64px" />
                  reactron-boilerplate
                </h1>
                <p className="lead">
                  You are running this application in <b>{process.env.NODE_ENV}</b> mode.
                </p>
                <Link to="/overview" role="button" className="btn btn-primary btn-lg">
                  Learn more
                </Link>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    )
  }
}
