import axios from 'axios'

export const actionFetchHoroscope = (param) =>{
    return (dispatch, getState) => {
        let url = `http://horoscope-api.herokuapp.com/horoscope/today/${param}`
        axios.get(url).then( resp =>{
            dispatch({
                type: 'FETCH_HOROSCOPE',
                payload: {
                    horoscopes: resp.data
                }
            })
        })
    }
}