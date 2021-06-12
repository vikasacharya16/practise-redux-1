import React from 'react';
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

class CakeContainer extends React.Component {
    render() {
        return (
            <div>
                <div>Number of Cakes {this.props.numOfCake}</div>
                <button onClick={this.props.buyCake}>Buy Cake</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        numOfCake: state.cake.numOfCake
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        // buyCake: dispatch(buyCake()) // #### "Expected `onClick` listener to be a function, instead got a value of `object` type."" error will come ####
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(CakeContainer)