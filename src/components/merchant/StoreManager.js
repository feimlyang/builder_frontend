import React, {Component} from 'react';
import {Form} from "reactstrap";
import {withRouter} from "react-router-dom";
import Login from "./Login";

class StoreManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
        };
    }


    render() {
        return (
            <>
                <Login />
                Future Development...


            </>
        );
    }
}

export default withRouter(StoreManager);