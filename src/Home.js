import React, {Component} from 'react';
import {Button, Card, Navbar,} from 'react-bootstrap';
import Header from "./Header";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            message: null,
            result: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/bubbletea/getAllProducts")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        result: result.result
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


    render() {
                const { error, message, result } = this.state;
                if (error) {
                return <div>Error: {error.message}</div>;
            } else {
                return (
                    <div> <Header/>
                        {result.map(item => (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="holder.js/100px180" />
                                    <Card.Body>
                                        <Card.Text>{item.productName}</Card.Text>
                                        <Button
                                            variant="dark">Order</Button>
                                    </Card.Body>
                                </Card>
                            ))}
                    </div>
                );
            }
    }

}
export default Home;
