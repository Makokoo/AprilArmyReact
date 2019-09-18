import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <footer className="small">
                        <div style={footStyle} className="fixed-bottom text-center py-3 text-white">© 2019 Copyright
                    <a className="text-white" href="https://aprilarmy.world"> April Army.</a>
                        </div>
                    </footer >
                </div>
            </div>
        )
    }
}

const footStyle = {
    marginTop: 'auto'
}