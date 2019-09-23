import React, { Component, Fragment } from 'react'
import { Header, Footer } from '..'

export default class Discussion extends Component {
    render() {
        return (
            <Fragment>
                <Header />

                <div style={styleBackground} className="backgroundAprilArmy">
                    <div className="container text-center">

                        <div className="mt-3">
                            <button className="gold btn btn-warning">
                                <span className="fa fa-plus"></span>
                                <span style={categoryStyle}>New Discussion</span>
                            </button>
                        </div>





                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="card border-danger backgroundMessage">
                                    <div className="card-horizontal">
                                        <div className="col-2">
                                            <a href="">
                                                <img style={imgstyle} src="https://aprilarmy.world/uploads/2019/01/06/BgRsI8KzdR_120x120.jpg" />
                                                <p className="small">
                                                    <span href="" className="text-light small font-weight-bold">
                                                        Pontus Hjelm
                                                    </span>
                                                </p>
                                            </a>
                                            <p className="messages small">
                                                <span className="text-light small">
                                                    315 Messages
                                                    </span>
                                            </p>
                                        </div>
                                        <div className="col-9">
                                            <div style={previewContent}>
                                                <div className="messageText card-text text-left text-light">
                                                    <p>Welcome to the New April Army!</p>
                                                    <p>Today we will release our next album called 'Moly is the best'.</p>
                                                    <p>Stay tuned!</p>
                                                </div>
                                                <div className="text-left" style={{ marginTop: -10 }}>
                                                    <span className="small">
                                                        <span className="small font-weight-light text-warning">
                                                            1 day ago.
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col text-light" style={edit}>
                                            <span className="fa fa-edit" style={edit}></span>
                                            <span className="fa fa-trash" style={edit}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="card border-light backgroundMessage card-horizontal">
                                    <div className="card-horizontal">
                                        <div className="col-2">
                                            <a href="">
                                                <img className="avatar" style={imgstyle} src="https://aprilarmy.world/uploads/2019/01/06/9BVVH9cJiP_120x120.jpg" />
                                                <p className="small">
                                                    <span className="text-light small font-weight-bold">
                                                        Marcus Rosell
                                                    </span>
                                                </p>
                                            </a>
                                            <p className="messages small">
                                                <span className="text-light small">
                                                    288 Messages
                                                    </span>
                                            </p>
                                        </div>
                                        <div className="col-9">
                                            <div style={previewContent}>
                                                <div className="messageText card-text text-left text-light">
                                                    <p>Welcome to the New April Army!</p>
                                                    <p>Today we will release our next album called 'Moly is the best'.</p>
                                                    <p>Stay tuned!</p>
                                                </div>
                                                <div className="text-left" style={{ marginTop: -10 }}>
                                                    <span className="small">
                                                        <span className="small font-weight-light text-warning">
                                                            1 day ago.
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col text-light" style={edit}>
                                            <span className="fa fa-edit" style={edit}></span>
                                            <span className="fa fa-trash" style={edit}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                        <nav style={styleDiv}>
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                </li>
                                <li className="page-item"><a className="text-dark page-link" href="#">1</a></li>
                                <li className="page-item"><a className="text-dark page-link" href="#">2</a></li>
                                <li className="page-item"><a className="text-dark page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="text-dark page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>


                        <div className="col-12 mt-3">
                            <div class="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea3" rows="7">Write your response...</textarea>
                            </div>
                            <button className="btn btn-success"><span className="fa fa-plus"></span><span style={categoryStyle}>Submit response</span></button>
                        </div>


                        <footer className="small">
                            <div style={footStyle} className="text-center py-3 text-white">© 2019 Copyright
                                    <a className="text-white text-center" href="https://aprilarmy.world"> April Army.</a>
                            </div>
                        </footer >

                    </div>
                </div>

                <Footer />
            </Fragment >
        )
    }
}

const footStyle = {
    marginTop: 'auto'
}

const edit = {
    margin: 5
}

const categoryStyle = {
    paddingLeft: 5
}

const styleDiv = {
    marginTop: '20px'
}

const styles = {
    display: 'inline',
    margin: '20px',
    width: 100
}

const imgstyle = {
    marginTop: 20,
    marginBottom: 10,
    height: 60,
    weight: 50,
    borderRadius: 50
}

const previewContent = {
    marginTop: 20,
    fontSize: 15
}

const timeAgo = {
    fontSize: 10
}

const categoryStyle2 = {
    paddingTop: 40,
    color: 'white'
}

const commentStyle = {
    marginLeft: 2
}

const styleBackground = {
    width: '100%',
    position: 'absolute'
}

