import React, { Component, Fragment } from 'react'

export default class ForumBody extends Component {
    render() {
        return (
            <Fragment>

                <div className="text-center bg-danger">
                    <img style={styles} src='https://aprilarmy.world/vendor/devdojo/chatter/assets/images/logo-light.png' ></img>
                </div>

                <div style={styleBackground} className="bg-dark backgroundAprilArmy">
                    <div className="container text-center">

                        <div className="mt-3">
                            <button className="gold btn btn-warning">
                                <span className="fa fa-plus"></span>
                                <span style={categoryStyle}>New Discussion</span>
                            </button>
                        </div>

                        <div className="row">

                            <div className="col">

                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <div className="card border-danger backgroundMessage">
                                            <div className="card-horizontal">
                                                <div className="col-2">
                                                    <a href="">
                                                        <img style={imgstyle} src="https://aprilarmy.world/uploads/2019/01/06/BgRsI8KzdR_120x120.jpg" />
                                                    </a>
                                                </div>
                                                <div className="col-9">
                                                    <div style={previewContent}>
                                                        <div className="text-left">
                                                            <a href="/discussion" className="text-light">
                                                                <b>Post title demo</b>
                                                            </a>
                                                            <div style={categoryStyle} className="d-inline-block text-left">
                                                                <span className="badge badge-danger">Music</span>
                                                            </div>
                                                        </div>

                                                        <div className="card-text text-left small text-light">
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                            Some quick example text to build on the card title and make up the bulk of the card's content...
                                                        </div>
                                                    </div>

                                                    <div style={timeAgo} className=" text-right small font-weight-light text-warning">
                                                        Topic started by Pontus Hjelm 1 day ago.
                                                    </div>

                                                </div>
                                                <div className="col-1">
                                                    <span style={categoryStyle2} className="fa fa-comments"></span>
                                                    <span style={categoryStyle} className="text-light">288</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <div className="card border-danger backgroundMessage">
                                            <div className="card-horizontal">
                                                <div className="col-2">
                                                    <a href="">
                                                        <img style={imgstyle} src="https://aprilarmy.world/uploads/2019/01/06/BgRsI8KzdR_120x120.jpg" />
                                                    </a>
                                                </div>
                                                <div className="col-9">
                                                    <div style={previewContent}>
                                                        <div className="text-left">
                                                            <a href="" className="text-light">
                                                                <b>Post title demo</b>
                                                            </a>
                                                            <div style={categoryStyle} className="d-inline-block text-left">
                                                                <span className="badge badge-danger">Music</span>
                                                            </div>
                                                        </div>

                                                        <div className="card-text text-left small text-light">
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                            Some quick example text to build on the card title and make up the bulk of the card's content...
                                                        </div>
                                                    </div>

                                                    <div style={timeAgo} className=" text-right small font-weight-light text-warning">
                                                        Topic started by Pontus Hjelm 1 day ago.
                                                    </div>

                                                </div>
                                                <div className="col-1">
                                                    <span style={categoryStyle2} className="fa fa-comments"></span>
                                                    <span style={categoryStyle} className="text-light">288</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <div className="card border-danger backgroundMessage">
                                            <div className="card-horizontal">
                                                <div className="col-2">
                                                    <a href="">
                                                        <img style={imgstyle} src="https://aprilarmy.world/uploads/2019/01/06/BgRsI8KzdR_120x120.jpg" />
                                                    </a>
                                                </div>
                                                <div className="col-9">
                                                    <div style={previewContent}>
                                                        <div className="text-left">
                                                            <a href="" className="text-light">
                                                                <b>Post title demo</b>
                                                            </a>
                                                            <div style={categoryStyle} className="d-inline-block text-left">
                                                                <span className="badge badge-danger">Music</span>
                                                            </div>
                                                        </div>

                                                        <div className="card-text text-left small text-light">
                                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                                            Some quick example text to build on the card title and make up the bulk of the card's content...
                                                        </div>
                                                    </div>

                                                    <div style={timeAgo} className=" text-right small font-weight-light text-warning">
                                                        Topic started by Pontus Hjelm 1 day ago.
                                                    </div>

                                                </div>
                                                <div className="col-1" style={categoryStyle3}>
                                                    <span style={categoryStyle2} className="fa fa-comments"></span>
                                                    <span style={categoryStyle} className="text-light">288</span>
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


                            </div>



                        </div>


                        <footer className="small">
                            <div style={footStyle} className="text-center py-3 text-white">© 2019 Copyright
                                    <a className="text-white text-center" href="https://aprilarmy.world"> April Army.</a>
                            </div>
                        </footer >

                    </div>
                </div>

            </Fragment>
        )
    }
}

const styleDiv = {
    marginTop: '52px'
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

const categoryStyle = {
    paddingLeft: 5
}

const categoryStyle2 = {
    paddingTop: 40,
    color: 'white'
}

const categoryStyle3 = {
    margin: 5
}

const commentStyle = {
    marginLeft: 2
}

const styleBackground = {
    width: '100%',
    position: 'absolute'
}

const footStyle = {
    marginTop: 'auto'
}
