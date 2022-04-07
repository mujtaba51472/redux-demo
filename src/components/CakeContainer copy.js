import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/CakeActions'
export const CakeContainer = (props) => {
  return (
    <div>
    <h1>No of cakes {props.numOfCakes} is here</h1>
    <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: ()=> dispatch(buyCake()) //mapping action creator with props
    }
}

export default connect(
    mapStateToProps , mapDispatchToProps
)(CakeContainer)