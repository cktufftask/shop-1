import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem, addQuantity, subtractQuantity } from "../../action/cartActions";
import "./Cart.css";

class Cart extends Component {
    handleRemove = id => {
        this.props.removeItem(id);
    };
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);

    };
    handleSubtractQuantity = (id,quantity) => {
        if(quantity!==0)
            this.props.subtractQuantity(id);
        else
            return
    };

    render() {
        let addedItems = this.props.items.length ? (
            this.props.items.map(item => {
                return (
                    <ul className={"row ml-0"} key={item.id}>
                    <li className={"col-6 list-group-item"}>
                    <h4>{item.name}</h4>
                    <p>
                    <span className={"mr-3 font-weight-bold"}>
                    MRP: {item.price}
            </span>
                <button
                onClick={() => {
                    this.handleSubtractQuantity(item.id,item.quantity);
                }}
                className={"btn btn-primary mr-3"}>-</button>
                {item.quantity}
            <button
                onClick={() => {
                    this.handleAddQuantity(item.id,item.quantity);
                }}
                className={"btn btn-primary ml-3"}>+</button>
                    </p>
                    </li>
                    <li
                className={
                        "col-3 list-group-item d-flex justify-content-center align-items-center"
                    }
                    >
                    {item.price * item.quantity}
                    </li>
                    <li
                className={
                        "col-3 list-group-item d-flex justify-content-center align-items-center"
                    }
                    >
                    <button
                className="btn btn-dark"
                onClick={() => {
                    this.handleRemove(item.id);
                }}
            >
                Remove
                </button>
                </li>
                </ul>

            );
            })
        ) : (
            <p>Nothing.</p>
    );


        let totalItems = this.props.total;

        return (
            <div className="container">
            <div className="cart">
            <h5>Your Cart:</h5>
        <ul className="collection">
            {addedItems}
            <ul className={"row ml-0"}>
            <li className={"col-8 list-group-item font-weight-bold"}>
            <h3>Grand Total</h3>
        </li>
        <li
        className={
                "col-4 list-group-item d-flex justify-content-center align-items-center"
            }>
            <h3>{totalItems}</h3>
            </li>
            </ul>
            </ul>
            </div>
            </div>
    );
    }
}

const mapStateToProps = state => {
    return {
        items: state.cart.addedItems,
        addedItems: state.addedItems,
        total: state.total,
        totalItem: state.totalItem
    };
};
const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch(removeItem(id));
        },
        addQuantity: id => {
            dispatch(addQuantity(id));
        },
        subtractQuantity: id => {
            dispatch(subtractQuantity(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);