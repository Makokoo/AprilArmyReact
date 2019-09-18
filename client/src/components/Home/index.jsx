import React, { Component, Fragment } from 'react'
import { Footer, Header, ForumBody } from '..'

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <ForumBody/>
                <Footer />
            </Fragment>
        )
    }
}
