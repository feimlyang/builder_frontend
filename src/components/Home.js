import React, {Component} from "react";
import {Button, Jumbotron} from 'react-bootstrap';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Home extends Component {
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
            <>
                <Jumbotron>
                    <h1>myStore, your store!</h1>
                    <p>
                        <Button
                            className="btn btn-outline-info"
                            variant="light"
                                onClick={() => {
                                    this.props.history.push('/products')
                                }}>Shop</Button>
                    </p>
                </Jumbotron>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state in home: " + state);
    return {cart: state.cart};
};
export default withRouter(connect(mapStateToProps)(Home));
