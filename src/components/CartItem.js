import React, {Component, useState} from 'react';
import {Card} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart, updateQuantity} from "../redux/actions";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from '@material-ui/icons/Refresh';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeholderValue: this.props.item.quantity,
            inputQuantity: this.props.item.quantity
        };
    };

    handleInputChange = (e) => {
        this.setState({inputQuantity: e.target.value});
    };

    componentDidMount() {

    };

    handleRemoveFromCart = sku => {
        this.props.removeFromCart(sku);
    };

    handleUpdateQuantity = (sku, quantity) => {
        console.log("quantity in header: " + quantity)
        this.props.updateQuantity(sku, quantity);
    };


    render() {
        const {item} = this.props;
        return (
            <Card className={"sub-card"}>
                <Card.Body>
                    <div className={"row no-gutters "}>
                        <div className={"col-4"}>
                            <img className={"products-card-img pr-3"}
                                 src={item.product.imageURL}
                                 alt=""/>
                        </div>
                        <div className={"col-8 p-3"}>
                            <Card.Text className={"text-secondary justify-content-start"}>
                                <span
                                    className={"text-uppercase font-weight-bold"}>{item.product.productName}</span><br/>
                                <span> CA${item.soldPrice} x {item.quantity} </span>
                            </Card.Text>

                            <div className={"row d-flex justify-content-between p-3"}
                                 style={{maxHeight: "80%"}}>

                                <input className={"quantity-input"} type="number" id={"input-quantity"}
                                       value={this.state.inputQuantity}
                                       onChange={this.handleInputChange} min="0"
                                       max={item.product.stocks}
                                       placeholder={item.quantity}
                                />

                                <IconButton className={"update-btn "} aria-label="update"
                                            style={{color: "#212529"}}
                                            onClick={e => {
                                                this.handleUpdateQuantity(item.product.sku, this.state.inputQuantity)
                                            }}>
                                    <RefreshIcon/>
                                </IconButton>


                                <IconButton className={"delete-btn "} aria-label="delete"
                                            style={{color: "#212529"}}
                                            onClick={e => {
                                                this.handleRemoveFromCart(item.product.sku)
                                            }}>
                                    <DeleteIcon/>
                                </IconButton>
                            </div>

                        </div>
                    </div>

                </Card.Body>
            </Card>
        );
    }
}

export default withRouter(connect(
    null,
    {removeFromCart, updateQuantity})(CartItem));
