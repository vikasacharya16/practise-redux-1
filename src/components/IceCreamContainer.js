import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux/index";

class IceCreamContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            icecreamNumber: 1
        }
    }

    render() {
        return (
            <div>
                <div>num of icecream {this.props.numOfIceCream}</div>
                <input type="number" value={this.state.icecreamNumber} onChange={(e) => {
                    this.setState({
                        icecreamNumber: e.target.value
                    })
                }} />
                <button onClick={() => this.props.buyIceCream(this.state.icecreamNumber)}>buy icecream</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        numOfIceCream: state.icecream.numOfIceCream
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        // buyCake: dispatch(buyCake()) // #### "Expected `onClick` listener to be a function, instead got a value of `object` type."" error will come ####
        buyIceCream: (number) => dispatch(buyIceCream(number))
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(IceCreamContainer);