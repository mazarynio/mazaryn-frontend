import { GLOBAL_ERROR, GLOBAL_SUCCESS } from "../../types";


export const login = (data) => (dispatch) => {
    const callApi = async () => {
        const url = `${process.env.REACT_APP_BASE_URL}auth-token/jwt/create/`
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            const res_data = await res.json();
            if (res.status === 500) {
                throw res;
            }
            if (res.status === 400) {
                const error = res_data
                if (error) {
                    dispatch({ type: GLOBAL_ERROR, payload: error })
                    return { status: "errorStatus", message: error };
                }
            }
            if (res.status !== 200) {
                throw res_data;
            } else {
                localStorage.setItem('auth_token', res_data?.auth_token)
                dispatch({ type: GLOBAL_SUCCESS, payload: 'Successfully login' })
                return { status: "successStatus", message: res_data };
            }
        } catch (err) {
            console.log(err)
        }
    }
    return Promise.resolve(callApi());
}

export const signUp = (data) => (dispatch) => {
    const callApi = async () => {
        const url = `${process.env.REACT_APP_BASE_URL}auth/users/`
        try {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            const res_data = await res.json();
            if (res.status === 500) {
                throw res;
            }
            if (res.status === 400) {
                const error = res_data
                if (error) {
                    dispatch({ type: GLOBAL_ERROR, payload: error })
                    return { status: "errorStatus", message: error };
                }
            }
            if (res.status !== 201) {
                throw res_data;
            } else {
                dispatch({ type: GLOBAL_SUCCESS, payload: 'Signup successfully' })
                return { status: "successStatus", message: res_data };
            }
        } catch (err) {
            console.log(err)
        }
    }
    return Promise.resolve(callApi());
}