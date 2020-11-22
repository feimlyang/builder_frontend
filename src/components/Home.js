import React, {Component} from "react";
import {Button, Jumbotron} from 'react-bootstrap';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
        };
    };

    componentDidMount() {
    }

    render() {
        const {error, message} = this.props;
        return (
            <>
                <div style={{marginLeft: "13%", marginRight: "13%"}}>

                    <Jumbotron className={"banner"}
                               style={{padding: "1.5rem", marginBottom: "1rem"}}>
                        <div className={"row align-middle"}>
                            <h4 className={"col-10 font-weight-bold" }>New Arrivals</h4>
                            <Button
                                className="btn btn-outline-dark btn-sm col-sm-2"
                                variant="light"
                                onClick={() => {
                                    this.props.history.push('/products')
                                }}>Shop</Button>

                        </div>
                    </Jumbotron>

                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img src={require('../img/home-img1.jpg')} className="d-block w-100" alt="..."/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                            <img src={require('../img/home-img2.jpg')} className="d-block w-100" alt="..."/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={require('../img/home-img3.jpg')} className="d-block w-100" alt="..."/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
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
