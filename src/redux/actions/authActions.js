const authActionTypes = {
    SET_INITIAL_ROUTE: 'SET_INITIAL_ROUTE',
    SET_USER: 'SET_USER',
    SET_USER_PROFILE: 'SET_USER_PROFILE'
}

export const setUser = payload => ({ type: authActionTypes.SET_USER, payload })

export const setInitialRoute = payload => ({ type: authActionTypes.SET_INITIAL_ROUTE, payload })

export const setUserProfile = payload => ({ type: authActionTypes.SET_USER_PROFILE, payload })

export default authActionTypes