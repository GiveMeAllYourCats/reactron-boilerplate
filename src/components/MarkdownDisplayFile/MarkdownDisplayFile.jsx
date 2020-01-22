import React from 'react'
import { resolve } from 'app-root-path'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const ReactMarkdown = require('react-markdown')
var remote = window.require('electron').remote
var electronFs = remote.require('fs')

export default class MarkdownDisplayFile extends React.Component {
  constructor(props) {
    super(props)

    let filePath = resolve(`../../${props.source}`)

    if (electronFs.existsSync(filePath)) {
      this.input = electronFs.readFileSync(filePath, 'utf-8').split('![break]')[1]
    } else {
      filePath = resolve(`../../docs/${props.source}`)
      this.input = electronFs.readFileSync(filePath, 'utf-8')
    }
  }
  render() {
    return (
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/overview">Overview</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {this.props.source}
            </li>
          </ol>
        </nav>
        <ReactMarkdown source={this.input} />
      </div>
    )
  }
}
