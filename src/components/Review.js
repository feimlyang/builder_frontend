import React, {Component} from "react";
import {Button, Card, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

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

    handleSubmit = (e) => {
        console.log("clicked submit!");
        e.preventDefault();
        if (this.props.cart.cartProducts.length > 0) {
            let order = {
                orderItems: [...this.props.cart.cartProducts],
                emailAddress: this.state.email
            }

            fetch("http://192.168.2.16:8080/mystore/processOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            }).then(r => {
                this.props.history.push("/paypal")
            }).catch(error =>{
                console.error(error)
            });
        } else {
            this.setState({message: "Empty Cart"});
        }
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
                                    Price: {item.soldPrice} CAD
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div>
                    <h6>Total Price: {this.props.cart.totalPrice} CAD</h6>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email"
                                          value={this.state.email}
                                          onChange={this.handleInputChange}/>
                        </Form.Group>

                        <Button className="btn btn-warning" type="submit">Confirm Order</Button>
                    </Form>

                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {cart: state.cart};
};
export default withRouter(connect(mapStateToProps)(Review));


// curl -v POST https://api.sandbox.paypal.com/v1/oauth2/token \
//   -H "Accept: application/json" \
//   -H "Accept-Language: en_US" \
//   -u "ATRiQ5_lP_4pnK4BxTXRMkMlSgW5J25XWBcAzjMadUG3Dw85mK9wgINxy4F96_m4Xe0-KRTWMRZSFUvO:EHeVeK0cNktfmnBdGPUErZuhsXRY5uuItgLw9F8EZbmjBEObDVdZDg9_f5F94YQGR15Fw24lBsi-Ngqv" \
//   -d "grant_type=client_credentials"