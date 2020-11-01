import {PayPalButton} from "react-paypal-button-v2";
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {clearCart} from "../redux/actions";
import {connect} from "react-redux";


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
                <PayPalButton className={"w-50 p-3 h-50 d-inline-block"}
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
                        return fetch("/mystore/processOrder", {
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