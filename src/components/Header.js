import React, {Component, useRef} from 'react';
import {connect} from "react-redux";
import {
    Button,
    Navbar,
    Nav,
    Popover,
    Card, Overlay, OverlayTrigger
} from 'react-bootstrap';
import {withRouter, NavLink} from 'react-router-dom';
import {removeFromCart, updateQuantity} from "../redux/actions";
import './mystyle.css';
import CartItem from "./CartItem";
import $ from "jquery";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            message: "",
        };
    };


    render() {
        return (
            <header className="header switched-header">

                <Navbar className="navbar">
                    <Navbar.Brand>myStore</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/products">Shop</NavLink>
                    </Nav>

                    <>
                            {['bottom'].map((placement) => (
                                <OverlayTrigger className={"overlay-trigger"}
                                                trigger="click"
                                                key={placement}
                                                placement={placement}
                                                overlay={
                                                    <Popover id={`popover-positioned-${placement}`} className={"cart-content"}>
                                                        <Popover.Title as="h3">Items:</Popover.Title>
                                                        <Popover.Content className={"popover-content"}>
                                                            <div>
                                                                {this.props.cart.cartProducts.map(item => (
                                                                    <CartItem item={item}/>
                                                                ))}
                                                                <h6>Total Price: ${this.props.cart.totalPrice} </h6>
                                                                <Button
                                                                    onClick={() => {
                                                                        this.props.history.push('/review')
                                                                    }}
                                                                    variant="warning">CheckOut</Button>
                                                            </div>
                                                        </Popover.Content>
                                                    </Popover>
                                                }
                                >
                                    <button className="cart-button btn">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-cart3 "
                                             fill="dark"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd"
                                                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                                        </svg>
                                    </button>
                                </OverlayTrigger>
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
