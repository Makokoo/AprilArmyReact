import React, { Component, Fragment } from 'react'

export default class ForumBody extends Component {
    render() {
        return (
            <Fragment>

                <div style={styleDiv} className="text-center bg-danger">
                    <img style={styles} src='https://aprilarmy.world/vendor/devdojo/chatter/assets/images/logo-light.png' ></img>
                </div>

                <div className="container text-center">
                    
                    <div className="mt-3">
                        <button className="btn btn-dark">
                            <span className="fa fa-plus"></span>
                            <span style={categoryStyle}>New Discussion</span>
                        </button>
                    </div>

                    <div className="row">

                        <div className="col">

                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="card">
                                        <div className="card-horizontal">
                                            <div className="col-2">
                                                <img style={imgstyle} src="https://aprilarmy.world/favicon.png" />
                                            </div>
                                            <div className="col-9">
                                                <div style={previewContent}>
                                                    <div className="text-left">
                                                        <a href="" className="text-dark">
                                                            <b>Titulo de prueba</b>
                                                        </a>
                                                        <div style={categoryStyle} className="d-inline-block text-left">
                                                            <span className="badge badge-danger">Music</span>
                                                        </div>
                                                    </div>

                                                    <div className="card-text text-left small">
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        Some quick example text to build on the card title and make up the bulk of the card's content...
                                                    </div>
                                                </div>

                                                <div style={timeAgo} className=" text-right small font-weight-light">
                                                    Topic started by Sebastian Blanco 1 day ago.
                                                </div>

                                            </div>
                                            <div className="col-1">
                                                <span style={categoryStyle2} className="fa fa-comments"></span>
                                                <span className="">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="card">
                                        <div className="card-horizontal">
                                            <div className="col-2">
                                                <img style={imgstyle} src="https://aprilarmy.world/favicon.png" />
                                            </div>
                                            <div className="col-9">
                                                <div style={previewContent}>
                                                    <div className="text-left">
                                                        <a href="" className="text-dark">
                                                            <b>Titulo de prueba</b>
                                                        </a>
                                                        <div style={categoryStyle} className="d-inline-block text-left">
                                                            <span className="badge badge-danger">Music</span>
                                                        </div>
                                                    </div>

                                                    <div className="card-text text-left small">
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        Some quick example text to build on the card title and make up the bulk of the card's content...
                                                    </div>
                                                </div>

                                                <div style={timeAgo} className=" text-right small font-weight-light">
                                                    Topic started by Sebastian Blanco 1 day ago.
                                                </div>

                                            </div>
                                            <div className="col-1">
                                                <span style={categoryStyle2} className="fa fa-comments"></span>
                                                <span className="">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="card">
                                        <div className="card-horizontal">
                                            <div className="col-2">
                                                <img style={imgstyle} src="https://aprilarmy.world/favicon.png" />
                                            </div>
                                            <div className="col-9">
                                                <div style={previewContent}>
                                                    <div className="text-left">
                                                        <a href="" className="text-dark">
                                                            <b>Titulo de prueba</b>
                                                        </a>
                                                        <div style={categoryStyle} className="d-inline-block text-left">
                                                            <span className="badge badge-danger">Music</span>
                                                        </div>
                                                    </div>

                                                    <div className="card-text text-left small">
                                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                                        Some quick example text to build on the card title and make up the bulk of the card's content...
                                                    </div>
                                                </div>

                                                <div style={timeAgo} className=" text-right small font-weight-light">
                                                    Topic started by Sebastian Blanco 1 day ago.
                                                </div>

                                            </div>
                                            <div className="col-1">
                                                <span style={categoryStyle2} className="fa fa-comments"></span>
                                                <span className="">2</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>






                        </div>



                    </div>
                </div>


            </Fragment>
        )
    }
}

const styleDiv = {
    marginTop: '54px'
}

const styles = {
    display: 'inline',
    margin: '20px',
    width: 100
}

const imgstyle = {
    marginTop: 20,
    marginBottom: 20,
    height: 60,
    weight: 50
}

const previewContent = {
    marginTop: 10,
    fontSize: 15
}

const timeAgo = {
    fontSize: 10
}

const categoryStyle = {
    paddingLeft: 5
}

const categoryStyle2 = {
    paddingTop: 40
}

const commentStyle = {
    marginLeft: 2
}