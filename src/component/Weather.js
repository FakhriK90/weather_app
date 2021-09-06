import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getWeather } from '../JS/Actions/weatherActions'
import Forcast from './Forcast'

const Weather = () => {
    const dispatch = useDispatch()
    const weathers = useSelector(state => state.weatherReducer.weather)
    const loading = useSelector(state => state.weatherReducer.isloading)
    const [query, setQuery] = useState("Gafsa")
    useEffect(() => {
        if(query=="")
        {dispatch(getWeather("GAFSA"))}
       else {dispatch(getWeather(query))}
    }, [query])
    return (
        <div>
            {loading?<h3>loading...</h3>:<div>
            <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}></input>
            <div>
            <div>
                <h1>{weathers.current&&weathers.current.condition.text}</h1>,
                <img src={weathers.current&&weathers.current.condition.icon} alt=""/>
            </div>
            <div>
            <h1>{weathers.current&&weathers.current.temp_c}</h1>
            </div>
            <div>
                <h1>{weathers.location&&weathers.location.name}</h1>
                <h1>{weathers.location&&weathers.location.country}</h1>
                <h2>{weathers.current&&weathers.current.last_updated}</h2>
            </div>
            </div>
            </div>}
            <div style={{display:'flex',flexDirection:"row", justifyContent:"space-around", marginTop:"60px", background:"#1565c0"}}>
                {weathers.forecast&&weathers.forecast.forecastday.map(el=> <Forcast el={el} />)}
            </div>
        </div>
    )
}

export default Weather
