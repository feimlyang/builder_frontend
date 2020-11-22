import React, {Component} from 'react';
import {connect} from "react-redux";
import {addToCart} from "../redux/actions";
import Container from 'react-bootstrap/Container';
import IconButton from "@material-ui/core/IconButton";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import Pagination from "react-bootstrap/Pagination";

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
        fetch("/mystore/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        products: result.result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    handleAddToCart = item => {
        console.log(item.imageURL)
        this.props.addToCart(item);
    };

    indexUrl = item =>{
        let url = "https://picsum.photos/200/300?random=[" + this.state.products.indexOf(item).toString()+ "]";
        item.imageURL = url;
        return item.imageURL;
    }

    render() {
        const {error, products} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <>
                    <div>
                        <Container className={"container-cards py-3 px-5"}>
                            <div className={"row"}>
                                {this.state.products.map(item => (
                                    <div className={"col-md-4 col-sm-6 h-80 d-inline-block py-3"}>
                                        <div className="card ">
                                            <img src={this.indexUrl(item)}
                                                 className="card-img-top " alt="..."/>
                                            <div className="card-body">
                                                <div className={"row"}>
                                                    <h className="card-text col-12 font-weight-bold text-uppercase text-lg-center">{item.productName}</h>
                                                </div>

                                                <div className={"row clearfix"}>
                                                    <div
                                                        className="item-price card-text col-6 mt-3 float-left text-sm-left align-bottom font-sm"
                                                        style={{color: "#212529"}}>CA${item.listPrice}</div>
                                                    <div
                                                        className={"add-item-button card-text col-6 text-right float-right "}>

                                                        <IconButton aria-label="add to shopping cart"
                                                                    style={{color: "#212529"}}
                                                                    disabled={item.stocks <= 0}
                                                                    onClick={e => {
                                                                        this.handleAddToCart(item)
                                                                    }}>
                                                            <ControlPointIcon/>
                                                        </IconButton>
                                                    </div>
                                                </div>

                                                <div className={"row clearfix"}>
                                                    <div className="card-text col-12 text-right">
                                                        <small className="text-muted">{item.stocks} left</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
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
