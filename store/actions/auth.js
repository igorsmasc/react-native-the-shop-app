export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaGKRp-Bmizg_yl56UZKtRpzkZt7gGOno',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Something went wrong!');
    }

    const resData = await response.json();

    console.log(resData);

    dispatch({ type: SIGNUP, token: resData.idToken, userId: resData.localId });
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaGKRp-Bmizg_yl56UZKtRpzkZt7gGOno',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      },
    );

    if (!response.ok) {
      const errorResponseData = await response.json();
      const errorId = errorResponseData.error.message;
      let message = 'Something went wrong!';
      switch (errorId) {
        case 'EMAIL_NOT_FOUND':
          message = 'This email could not be found!';
          break;
        case 'INVALID_PASSWORD':
          message = 'This password is not valid!';
          break;
        case 'MISSING_PASSWORD':
          message = 'The password is empty!';
          break;
      }
      throw new Error(message);
    }

    const resData = await response.json();

    console.log(resData);

    dispatch({ type: LOGIN, token: resData.idToken, userId: resData.localId });
  };
};
