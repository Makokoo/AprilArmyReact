import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar fixed-top bg-dark" style={styleHeader}>
                    <div className="d-inline-block">
                        <div style={styles}>
                            <img src='https://aprilarmy.world/favicon.png' style={logoAA} ></img>
                        </div>
                        <div style={styles}>
                            <a className="text-white" href="/">April Army</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

const logoAA = {
    width: '8%'
}

const styleHeader = {
}

const styles = {
    display: 'inline',
    padding: '5px'
}