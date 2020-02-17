import React, { Component } from "react";
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';
import { FilterPrice } from '../../action/searchAction';
import 'react-rangeslider/lib/index.css'



class Filter extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            horizontal: 1000,
            vertical: 50
        }
    }

    handleChangeHorizontal = value => {
        this.setState({
            horizontal: value
        })
    };

    handleChangeVertical = value => {
        this.setState({
            vertical: value
        })
    };

    render() {
        const { horizontal, vertical } = this.state
        const horizontalLabels = {
            100: '100',
            1000: '1000'
        }

        const verticalLabels = {
            100: 'Getting started',
            500: 'Half way',
            900: 'Almost done',
            1000: 'Complete!'
        }

        const formatkg = value => value+'kg';
        const formatPc = p => p + '%'

        return (
            <div className='slider custom-labels'>
                <Slider
                    min={100}
                    max={1000}
                    value={horizontal}
                    labels={horizontalLabels}
                    //format={formatkg}
                    //handleLabel={horizontal}
                    onChange={this.handleChangeHorizontal}
                />
                <div className={"btn-center"}>
                    <button type="button" class="btn btn-success" onClick={()=>{this.props.FilterPrice(this.state.horizontal)}}>Apply</button>

                </div>

            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        FilterPrice: value => {
            dispatch(FilterPrice(value));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filter);

