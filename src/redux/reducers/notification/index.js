
import { POSTS } from '../../types'



const INITIAL_STATE ={ 
    data : [
            {
                id: 1,
                userName: 'Teddy',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },
            {
                id: 2,
                userName: 'Arvand',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            },

        ], 
    isFetching : null, 
    error : null
}




const notificationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${POSTS}_started`:
          return { ...state, users: { ...state.users, isFetching: true, err: null } };
        case `${POSTS}_success`:
          return { ...state, users: { ...state.users, isFetching: false, data: action.payload } };
        case `${POSTS}_failed`:
          return { ...state, users: { ...state.users, isFetching: false, err: action.payload } };
        default:
          return state;
      }
}


export default notificationReducer