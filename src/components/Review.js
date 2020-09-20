import React, {Component} from "react";
import {Button, Card, Form} from 'react-bootstrap';
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
                <div>
                    {this.props.cart.cartProducts.map(item => (
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Text>
                                    <h4>{item.product.productName}</h4><br/>
                                    Price: ${item.soldPrice}
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
