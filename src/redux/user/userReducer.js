import { FETCH_USERS_FAILURE , FETCH_USERS_SUCCESS , FETCH_USERS_REQUEST } from './userTypes';

const initialState = {
    loading: false,
    users: [],
    error: "",
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_USERS_SUCCESS:
        return {
          loading: false,
          users: action.payLoad,
        };
      case FETCH_USERS_FAILURE:
        return {
          loading: false,
          error: action.payLoad,
        };
        default: return state
    }
  };

  export default userReducer 