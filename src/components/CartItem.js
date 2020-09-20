import React, {Component} from 'react';
import {Button, Card} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart, updateQuantity} from "../redux/actions";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <Card.Img className={"products-card-img"}
                          variant="top"
                          src={"https://picsum.photos/200/300?random=[1-1000]"}
                          alt=""/>
                <Card.Body>
                    <Card.Text className={"text-secondary"}>
                        <h6>{item.product.productName}</h6><br/>
                        Price: C${item.soldPrice} x {item.quantity}
                    </Card.Text>
                    <input type="number" id={"input-quantity"}
                           value={this.state.inputQuantity}
                           onChange={this.handleInputChange} min="0"
                           max={item.product.stocks}
                           placeholder={item.quantity}
                    />
                    <Button
                        className={"update-button btn btn-light text-info btn-sm"}
                        onClick={e => {
                            console.log("before click quantity: " + this.state.inputQuantity)
                            this.handleUpdateQuantity(item.product.sku, this.state.inputQuantity)
                        }}>Update</Button>
                    <Button
                        className={"remove-button btn btn-light text-info btn-sm"}
                        onClick={e => {
                            this.handleRemoveFromCart(item.product.sku)
                        }}>Remove</Button>

                </Card.Body>
            </Card>
        );
    }
}

export default withRouter(connect(
    null,
    {removeFromCart, updateQuantity})(CartItem));
