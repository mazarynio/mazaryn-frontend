import { MAKE_POST } from "../../types"

export const makePost = data => async dispatch => {
    const url = `${process.env.REACT_APP_BASE_URL}posts/`
    try{
        const res = fetch( url, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        if(res.status === 200){
            dispatch({type: MAKE_POST, payload: 'successful'})
        }
    }catch(err){
        console.log(err)
    }
}