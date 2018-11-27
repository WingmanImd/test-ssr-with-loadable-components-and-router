import React, { Component, Fragment } from 'react'
import loadable from '@loadable/component'
const HomeContent = loadable(() => import('./HomeContent'))

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <h1>Home page 11111111111111111111111</h1>
                <HomeContent />
            </Fragment>

        )
    }
}