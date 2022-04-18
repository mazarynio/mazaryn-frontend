import {CURRENT_USER} from '../types'

const INITIAL_STATE = {
    data: null, isFetching: null, err: null
}


export default function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case `${CURRENT_USER}_started`:
        return { ...state, users: { ...state.users, isFetching: true, err: null } };
      case `${CURRENT_USER}_success`:
        return { ...state, users: { ...state.users, isFetching: false, data: action.payload } };
      case `${CURRENT_USER}_failed`:
        return { ...state, users: { ...state.users, isFetching: false, err: action.payload } };
      default:
        return state;
    }
  }