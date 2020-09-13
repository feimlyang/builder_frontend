import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    Button,
    Navbar,
    Nav,
    Dropdown,
    DropdownButton,
    Card
} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
        };
    };

    render() {
        const {error, message} = this.props;
        return (
            <header className="header switched-header">
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">My Store</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="/">Shop</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>

                        <DropdownButton id="dropdown-basic-button"
                                        title="Cart"
                                        bg="dark" variant="dark"
                                        style={{marginRight: '10000px'}}>
                            {this.props.cart.cartProducts.map(item => (
                                <Dropdown.Item style={{marginRight: '10000px'}}>
                                    <Card style={{width: '10em', height: '10em'}}>
                                        <Card.Img variant="top" src="holder.js/100px180"/>
                                        <Card.Body>
                                            <Card.Text>
                                                <h6>{item.product.productName}</h6><br/>
                                                Price: {item.soldPrice} CAD
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Dropdown.Item>
                            ))}
                            <div>
                                <h6>Total Price: {this.props.cart.totalPrice} CAD</h6>
                            </div>

                            <Button
                                onClick={() => {
                                    this.props.history.push('/review')
                                }}
                                variant="dark">CheckOut</Button>
                        </DropdownButton>
                    </Navbar>
                </>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("state in cart: " + state);
    return {cart: state.cart};
};
export default withRouter(connect(mapStateToProps)(Header));
