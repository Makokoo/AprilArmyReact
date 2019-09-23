import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            
                <nav className="navbar">
                    <div className="container">
                        <div>
                            <img src='https://aprilarmy.world/favicon.png' style={logoAA} ></img>
                            <a style={styles} className="text-white" href="/">April Army</a>
                        </div>

                        <div className="dropdown">
                        <a href="/"><span style={styleBell} className="fa fa-bell"></span></a>
                            <span className="dropdown-toggle text-white small" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                MoLyyy
                            </span>
                            <div className="dropdown-menu text-left">
                                <a className="dropdown-item" href="#"><span className="fa fa-user" style={styleDropdownIcon}></span>Profile</a>
                                <a className="dropdown-item" href="#"><span className="fa fa-sign-out" style={styleDropdownIcon}> </span>Logout</a>
                            </div>
                        </div>

                    </div>
                </nav>
            
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

const styleDropdownIcon = {
    marginRight: 20
}