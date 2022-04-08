import axios from 'axios'
import { FETCH_USERS_FAILURE , FETCH_USERS_SUCCESS , FETCH_USERS_REQUEST } from './userTypes';

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payLoad: users,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payLoad: error,
  };
};

export const fetchUser = ()=> {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            const users =res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })

    }


}
