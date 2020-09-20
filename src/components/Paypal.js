import {PayPalButton} from "react-paypal-button-v2";
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {clearCart} from "../redux/actions";
import {connect} from "react-redux";

// https://www.npmjs.com/package/react-paypal-button-v2
class Paypal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {}
        };
    }

    handleClearCart = () => {
        this.props.clearCart();
    }


    render() {
        const {totalPrice, cartProducts, email} = this.props;
        return (
            <>
                <PayPalButton
                    amount={totalPrice}
                    // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                    onSuccess={(details, data) => {
                        console.log("data" + data.orderID);
                        alert("Transaction completed by " + details.payer.name.given_name);
                        this.setState(
                            this.state.order = {
                                orderItems: cartProducts,
                                emailAddress: email,
                                paypalOrderId: data.orderID
                            }
                        );

                        // OPTIONAL: Call your server to save the transaction
                        return fetch("http://192.168.2.16:8080/mystore/processOrder", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(this.state.order)
                        }).then(r => {
                            this.handleClearCart();
                            alert("Order placed! Redirect...");
                            this.props.history.push("/");

                        }).catch(error => {
                            console.error(error)
                        });
                    }}
                />
            </>
        );
    }
}


export default withRouter(connect(
    null,
    {clearCart})(Paypal));