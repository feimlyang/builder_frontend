import React, {Component} from 'react';
import Header from "./Header";
import Footer from "./Footer";


// const bg = {
//     background: "url(/assets/img/home2.png)",
//     backgroundSize: 'cover',
//
// }

class Home extends Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export default Home;
