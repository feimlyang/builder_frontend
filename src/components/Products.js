import React, {Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import {connect} from "react-redux";
import {addToCart} from "../redux/actions";


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
            products: [],
                // {
                //     sku: "",
                //     productName: "",
                //     listPrice: "",
                //     stocks: "",
                //     productTypeId: "",
                //     imageUrl: ""
                // },

            action: "view",
        };
    }

    componentDidMount() {
        fetch("http://192.168.2.16:8080/mystore/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result.result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    handleAddToCart = item => {
        console.log("item: " + item);
        this.props.addToCart(item);
        console.log("clicked AddToCart");
    };

    render() {
        const {error, message, products} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div>
                    {this.state.products.map(item => (
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src="holder.js/100px180"/>
                            <Card.Body>
                                <Card.Text>
                                    <h4>{item.productName}</h4><br/>
                                    Price: {item.listPrice} CAD
                                    </Card.Text>
                                <Button
                                    onClick={e => {
                                        this.handleAddToCart(item)
                                    }}
                                    variant="dark">Add To Cart</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            );
        }
    }
}

export default connect(
    null,
    {addToCart}
)(Products);
