import React, {Component} from "react";
import {Button, Card, Form} from 'react-bootstrap';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Review extends Component {
    constructor(props) {
        console.log("Review Comp");
        super(props);
        this.state = {
            error: null,
            message: null,
            result: [],
            action: "view",
            email: "",
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
            console.log(JSON.stringify(order))
            console.log(order.orderItems + "  " + order.emailAddress);
            fetch("http://192.168.2.16:8080/mystore/processOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            }).then(r => {
                this.props.history.push("/")
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
                                {/*<Button*/}
                                {/*    variant="dark">Delete</Button>*/}
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
                        <Button variant="dark" type="submit">Submit</Button>
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
