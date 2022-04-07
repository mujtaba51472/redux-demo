import React, { useEffect , useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { buyCake } from '../redux/cake/CakeActions'
export const NewCakeContainer = (props) => {
     const [number , setNumber] = useState(1)
  return (
    <div>
    <h1>No of cakes {props.numOfCakes} is here</h1>
    <input  value={number} onChange={e=> setNumber(e.target.value)} type='text'/>
    <button onClick={()=>props.buyCake(number)}>Buy Cake</button>
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
        buyCake: (number)=> dispatch(buyCake(number)) //mapping action creator with props
    }
}

export default connect(
    mapStateToProps , mapDispatchToProps
)(NewCakeContainer)