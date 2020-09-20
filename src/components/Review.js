import React, {Component} from "react";
import {Button, Card, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Paypal from "./Paypal";
import './mystyle.css'

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
                <div >
                    {this.props.cart.cartProducts.map(item => (
                        <Card className={"review-card"}>
                            <Card.Img className={"products-card-img"} variant="top" alt=""/>
                            <Card.Body>
                                <Card.Text>
                                    <h6>{item.product.productName}</h6><br/>
                                    Price: ${item.soldPrice} x {item.quantity}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div>
                    <h6>Total Price: ${this.props.cart.totalPrice} </h6>
                    {/*<Form onSubmit={this.handleOrderSubmit}>*/}
                    {/*    <Form.Group controlId="formGroupEmail">*/}
                    {/*        <Form.Label>Email address</Form.Label>*/}
                    {/*        <Form.Control type="email" placeholder="Enter email" name="email"*/}
                    {/*                      value={this.state.email}*/}
                    {/*                      onChange={this.handleInputChange}/>*/}
                    {/*    </Form.Group>*/}
                    {/*    <Button className="btn btn-warning" type="submit">Confirm Order</Button>*/}
                    {/*</Form>*/}
                    <Paypal totalPrice={this.props.cart.totalPrice}
                    cartProducts={this.props.cart.cartProducts}
                    email={"abc@jafd.com"}/>

                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {cart: state.cart};
};
export default withRouter(connect(mapStateToProps)(Review));
