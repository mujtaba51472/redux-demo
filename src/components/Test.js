import React from 'react'
import { connect } from 'react-redux'
const Test = (props) => {
  return (
    <div>
    <h1>hello Test , no of cakes are {props.numOfCakes}</h1>
    <button>test</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
export default connect(
    mapStateToProps
)(Test)
