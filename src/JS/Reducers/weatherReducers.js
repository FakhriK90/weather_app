import {WEATHER_LOADING, WEATHER_SUCCESS, WEATHER_FAIL} from '../Constants/weatherActionsTypes'

const initialState={
    weather:[],
    isLoading:false,
    errors:null
}

export const weatherReducer=(state=initialState,{type, payload})=>{
    switch (type) {
        case WEATHER_LOADING:
            return{...state,isLoading:true}
        case WEATHER_SUCCESS:
                return{...state,weather:payload,isLoading:false}
        case WEATHER_FAIL:
            return{...state,errors:payload,isLoading:false}
        default:
            return state
    }
}