import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../Constants/actionTypes.js';

export const loginUser = (userName,userPass) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_USER_REQUEST });
    console.log('On Workers Login');
    // Make the login request to the backend API
    
    const response = await fetch('/workers/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username:userName,password:userPass}),
    });
    const data = await response.json();

    if (response.ok) {
      // Login successful
      dispatch({ type: LOGIN_USER_SUCCESS, payload: data });
    } else {
      // Login failed
      dispatch({ type: LOGIN_USER_FAILURE, payload: data.message });
    }
  } catch (error) {
    console.error('Error:', error);
    dispatch({ type: LOGIN_USER_FAILURE, payload: 'Internal server error' });
  }
};