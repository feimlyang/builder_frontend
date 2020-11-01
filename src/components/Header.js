import React, {Component, useState} from 'react';
import {connect} from "react-redux";
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import {withRouter, NavLink} from 'react-router-dom';
import {removeFromCart, updateQuantity} from "../redux/actions";
import CartItem from "./CartItem";
import Drawer from '@material-ui/core/Drawer';
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            message: "",
            right: false,
            classes: ""
        };
    };


    toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({right: open});
    };



    render() {
        return (
            <header className="header switched-header">
                <Navbar className="navbar"
                        style={{marginLeft: "7%", marginRight: "7%"}}>
                    <Navbar.Brand className={" font-weight-bold"}
                                  href="/home"
                                  style={{fontSize: "xx-large"}}>myStore</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/products">Shop</NavLink>
                    </Nav>

                    <>
                        {['right'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton onClick={this.toggleDrawer(anchor, true)}
                                            style={{color: "#212529"}}>
                                    <ShoppingBasketIcon/>
                                </IconButton>

                                <Drawer anchor={anchor} open={this.state.right}
                                        onClose={this.toggleDrawer(anchor, false)}>

                                    <div className={"cart-content"}>
                                        {this.props.cart?.cartProducts.map(item => (
                                            <CartItem item={item}/>
                                        ))}

                                        <span className={"float-right my-2"}>Total:
                                                                ${this.props.cart.totalPrice} </span>
                                        <div className={"clearfix"}></div>
                                        <div
                                            className={"btn btn-outline-dark btn-sm col-12 my-2 text-uppercase"}
                                            variant={"white"}
                                            onClick={() => {
                                                this.props.history.push('/review')
                                            }}>View Bag
                                        </div>

                                    </div>
                                </Drawer>
                            </React.Fragment>
                        ))}

                    </>

                </Navbar>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return {cart: state.cart};
};

export default withRouter(connect(
    mapStateToProps,
    {removeFromCart, updateQuantity})(Header));
