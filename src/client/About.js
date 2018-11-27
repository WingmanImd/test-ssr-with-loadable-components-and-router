import React, { Component, Fragment } from 'react'
import loadable from '@loadable/component'
const AboutContent = loadable(() => import('./AboutContent'))

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <h1>About page 2222222</h1>
                <AboutContent />
            </Fragment>

        )
    }
}