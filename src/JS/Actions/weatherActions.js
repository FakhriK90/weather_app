import axios from 'axios'
import {WEATHER_LOADING, WEATHER_SUCCESS, WEATHER_FAIL} from '../Constants/weatherActionsTypes'

export const getWeather=(query)=>async dispatch=>{
    dispatch({type:WEATHER_LOADING})
    try {
        const response= await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=1fb3a844dd2a4b1ca1774254210409&q=${query}&aqi=no&days=4`)
        dispatch({type:WEATHER_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type:WEATHER_FAIL, payload:error})
    }
}