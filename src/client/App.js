import React from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import loadable from '@loadable/component'
import './main.css'

import { BrowserRouter, Route, Link } from 'react-router-dom'
import { StaticRouter } from "react-router";


// const About = loadable(() => import('./About'))
// const Home = loadable(() => import('./Home'))
import About from './About'
import Home from './Home'

export default class App extends React.Component {
  render() {
    const Router = this.props.isServer ? StaticRouter : BrowserRouter

    return (
      <Router location={this.props.url} context={{}}>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}
