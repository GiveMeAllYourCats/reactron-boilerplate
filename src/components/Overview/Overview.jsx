import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Overview.css'
import { FaHandPaper, FaDatabase, FaCogs, FaBook, FaRoad, FaCode, FaCss3, FaWindowRestore, FaFlask, FaPaperPlane } from 'react-icons/fa'

export default class Overview extends React.Component {
  render() {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Overview
            </li>
          </ol>
        </nav>
        <div className="list-group">
          <Link to="/readme" className="list-group-item list-group-item-action">
            <FaBook /> Repository README.md
          </Link>
          <Link to="/sass" className="list-group-item list-group-item-action">
            <FaCss3 /> SASS
          </Link>
          <Link to="/splash" className="list-group-item list-group-item-action">
            <FaHandPaper /> Splash window
          </Link>
          <Link to="/distribution" className="list-group-item list-group-item-action">
            <FaPaperPlane /> Distribution
          </Link>
          <Link to="/ipc" className="list-group-item list-group-item-action">
            <FaWindowRestore /> IPC
          </Link>
          <Link to="/mobx" className="list-group-item list-group-item-action">
            <FaCogs /> MobX
          </Link>
          <Link to="/database" className="list-group-item list-group-item-action">
            <FaDatabase /> Database operations
          </Link>
          <Link to="/routing" className="list-group-item list-group-item-action">
            <FaRoad /> Routing
          </Link>
          <Link to="/testing" className="list-group-item list-group-item-action">
            <FaFlask /> Testing
          </Link>
          <Link to="/development" className="list-group-item list-group-item-action">
            <FaCode /> Development
          </Link>
        </div>
      </div>
    )
  }
}
