const authActionTypes = {
    SIGN_IN: 'SIGN_IN',
    SIGN_UP: 'SIGN_UP',
    SIGN_OUT: 'SIGN_OUT',
    SET_USER: 'SET_USER',
}

export const signInAction = payload => ({ type: authActionTypes.SIGN_IN, payload })

export const signOutAction = () => ({ type: authActionTypes.SIGN_OUT })

export const setUser = payload => ({ type: authActionTypes.SET_USER, payload })

export default authActionTypes