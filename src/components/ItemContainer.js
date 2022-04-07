import React from 'react'
import { connect } from 'react-redux'
const ItemContainer = (props) => {
  return (
    <div>cake {props.item}</div>
  )
}
const mapStateToProps = (state , ownProps) => {
    let itemState= ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIceCream
    return {
        item:itemState
    }
}
export default connect(
    mapStateToProps 
)(ItemContainer)