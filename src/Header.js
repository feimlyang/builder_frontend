import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem(process.env.REACT_APP_TOKEN);
        this.props.history.push('/');
    };

    render() {
        let hasToken = !!localStorage.getItem(process.env.REACT_APP_TOKEN);
        return (
            <header className="header switched-header">
                <>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Bubble Tea</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Menu</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                        </Nav>
                        <Form inline>
                            {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                            <Button variant="outline-info">Chart</Button>

                        </Form>
                    </Navbar>
                </>

            </header>
        );
    }
}

export default Header;
