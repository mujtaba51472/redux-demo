import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/icecream/IceCreamAction'
export const IceCreamContainer = (props) => {
    console.log(props)
  return (
    <div>
    <h1>Ice Cream {props.numOfIceCream} </h1>
    <button onClick={props.buyIceCream}>Buy Ice Cream</button>

    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCream:state.icecream.numOfIceCream
    } 
}
const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: ()=> dispatch(buyIceCream())
    }
}




export  default connect(
    mapStateToProps, mapDispatchToProps
)(IceCreamContainer)
