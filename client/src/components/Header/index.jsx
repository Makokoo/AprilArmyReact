import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="row">
                <nav className="navbar fixed-top">
                    <div className="container">
                        <div>
                            <img src='https://aprilarmy.world/favicon.png' style={logoAA} ></img>
                            <a style={styles} className="text-white" href="/">April Army</a>
                        </div>
                        <div>
                            <a href="/"><span style={styleBell} className="fa fa-bell"></span></a>
                            <a style={styles} className="text-white" href="/">Sergio Molina</a>
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

const styleBell = {
    color: 'white',
    marginRight: 5
}

const styles = {
    marginLeft: 5
}