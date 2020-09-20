import React, {Component} from 'react';
import {Button, Card, Row, Col, CardGroup, CardDeck} from 'react-bootstrap';
import {connect} from "react-redux";
import {addToCart} from "../redux/actions";
import Container from 'react-bootstrap/Container'
import './mystyle.css'

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
        this.props.addToCart(item);
    };

    render() {
        const {error, message, products} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <>
                    <div>
                        <Container className={"container-cards"}>
                        {this.state.products.map(item => (
                                    <Card className={"products-card-item"} >
                                        <Card.Body>
                                            <Card.Img className="products-card-img" variant="top" src={"https://picsum.photos/200/300?random=[1-1000]"} alt=""/>
                                            <Card.Title className={"product-info"}>
                                                <Card.Text className={"product-name"}>{item.productName}</Card.Text>
                                                <Card.Text className={"product-price"}>C${item.listPrice}</Card.Text>
                                            </Card.Title>
                                            <Card.Footer className={"product-footer"}>
                                                {item.stocks} in stock
                                                <Button
                                                    className={"addtocart-button btn btn-light"}
                                                    disabled={item.stocks<=0}
                                                    onClick={e => {
                                                        this.handleAddToCart(item)
                                                    }}>
                                                    <svg width="1.2em" height="1.2em" viewBox="0 0 16 16"
                                                         className="bi bi-bag-plus" fill="currentColor"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd"
                                                              d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"/>
                                                        <path fill-rule="evenodd"
                                                              d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                                                    </svg>
                                                    </Button>

                                            </Card.Footer>

                                        </Card.Body>
                                    </Card>
                        ))}
                            </Container>
                    </div>
                </>
            );
        }
    }
}
const mapStateToProps = (state) => {
    return {cart: state.cart};
};

export default connect(
    mapStateToProps,
    {addToCart}
)(Products);
