import React, {Component} from "react";
import {Card} from 'react-bootstrap';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Paypal from "./Paypal";


class Review extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
            result: [],
            action: "view",
            email: "",
            payment: {
                account: "",
            },
            submitting: false
        };
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <>
                <div style={{marginLeft: "8%", marginRight: "8%"}}>
                    <Card>
                        <Card.Body>
                            {this.props.cart.cartProducts.map(item => (
                                <div className={"row no-gutters"}>
                                    <div className={"col-4"}>
                                        <img className={"products-card-img pr-2 py-3"}
                                             src={item.product.imageURL}
                                             alt=""/>
                                    </div>
                                    <div className={"col-8 py-3"}>
                                        <Card.Text className={"text-secondary"}>
                                            <span
                                                className={"text-uppercase font-weight-bold"}>{item.product.productName}</span><br/>
                                            CA${item.soldPrice} x {item.quantity}
                                        </Card.Text>
                                    </div>
                                </div>
                            ))}
                        </Card.Body>
                    </Card>

                    <div className={" mt-4 d-flex justify-content-end"}>
                        <span
                            className={"font-weight-bold "}>Total Price: ${this.props.cart.totalPrice} </span>
                        {/*<Form onSubmit={this.handleOrderSubmit}>*/}
                        {/*    <Form.Group controlId="formGroupEmail">*/}
                        {/*        <Form.Label>Email address</Form.Label>*/}
                        {/*        <Form.Control type="email" placeholder="Enter email" name="email"*/}
                        {/*                      value={this.state.email}*/}
                        {/*                      onChange={this.handleInputChange}/>*/}
                        {/*    </Form.Group>*/}
                        {/*    <Button className="btn btn-warning" type="submit">Confirm Order</Button>*/}
                        {/*</Form>*/}
                    </div>
                    <br/>

                    <div className={" mt-2 d-flex justify-content-end "}>
                        <div className={"paypal-btn"}>
                            <Paypal totalPrice={this.props.cart.totalPrice}
                                    cartProducts={this.props.cart.cartProducts}
                                    email={"abc@jafd.com"}/>
                        </div>

                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {cart: state.cart};
};
export default withRouter(connect(mapStateToProps)(Review));
