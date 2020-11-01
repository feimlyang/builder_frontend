import React, {Component} from "react";
import {Button, Jumbotron} from 'react-bootstrap';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
        };
    };

    render() {
        const {error, message} = this.props;
        return (
            <>
                <div style={{marginLeft: "8%", marginRight: "8%"}}>
                    <Jumbotron className={"banner"}
                               style={{padding: "1.5rem", marginBottom: "1rem"}}>
                        <div className={"row align-middle"}>
                            <h3 className={"col-10 font-weight-bold text-uppercase"}>New Arrivals</h3>
                            <Button
                                className="btn btn-outline-dark btn-sm col-sm-2"
                                variant="light"
                                onClick={() => {
                                    this.props.history.push('/products')
                                }}>Shop</Button>

                        </div>


                    </Jumbotron>

                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={require('../img/home-img1.jpg')} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={require('../img/home-img2.jpg')} className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={require('../img/home-img3.jpg')} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state in home: " + state);
    return {cart: state.cart};
};
export default withRouter(connect(mapStateToProps)(Home));
