import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="">
                    <div style={footStyle} className="footer-copyright text-center py-3">© 2019 Copyright
                    <a className="text-dark" href="https://aprilarmy.world"> April Army.</a>
                    </div>
                </footer >
            </div>
        )
    }
}

const footStyle = {
    marginTop: 'auto'
}