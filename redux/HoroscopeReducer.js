const defaultState = {
    restaurants: 
      {
        date: "",
        horoscope: "",
        sunsign: ""
      }
}

const HoroscopeReducer = (state=defaultState, action) => {
    switch (action.type) {
      case 'FETCH_HOROSCOPE':
        newState = {...state, horoscope: action.payload.horoscope }
        return newState
      default:
        return state
    }
  }
  
  export default HoroscopeReducer