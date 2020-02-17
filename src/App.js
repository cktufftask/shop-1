import React, { Component } from "react";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { connect } from "react-redux";
import { addToCart } from "./action/cartActions";
import { Card, Button } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            'items': this.props.items,
            'active': ''
        }

    }

    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="col-md-12">
                        <Header  {...this.props} />
                    </div>
                </div>
                <div className="row ">
                    <Router>
                        <Switch>
                            <Route  path="/cart" component={Cart}/>
                            <Route exact path="/" component={Home} />
                                                </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addToCart: id => {
            dispatch(addToCart(id));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
