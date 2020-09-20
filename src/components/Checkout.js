import React, {Component} from "react";
import Paypal from "./Paypal";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Checkout extends Component {
    constructor(props) {
        console.log("Review Comp");
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <Paypal/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {cart: state.cart};
};
export default withRouter(connect(mapStateToProps)(Checkout));
