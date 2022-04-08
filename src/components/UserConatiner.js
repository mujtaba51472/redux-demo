import React , {useEffect} from 'react'
import { fetchUser } from '../redux/user/UserAction'
import { connect } from 'react-redux'
const UserContainer = ({userdata , fetchUser}) => {
    console.log('user', userdata)
    useEffect(() => {
      fetchUser()
    
    }, [])
    
    
  return (
    <div>UserConatiner</div>
  )
}
const mapStateToProps = state => {
    return {
        userdata: state.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
    fetchUser: ()=> dispatch(fetchUser()) //mapping action creator with props
    }
}
export default connect(
    mapStateToProps , mapDispatchToProps
)(UserContainer)
