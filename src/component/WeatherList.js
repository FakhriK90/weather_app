// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { getWeather } from '../JS/Actions/weatherActions'


// const WeatherList = () => {
//     const dispatch = useDispatch()
//     const weathers = useSelector(state => state.weatherReducer.weather)
//     const loading = useSelector(state => state.weatherReducer.isloading)
//     const [query, setQuery] = useState("Gafsa")
//     useEffect(() => {
//         dispatch(getWeather(query))
//     }, [])
//     return (
//         <div>
//             <div>
//                 {weathers.location&&weathers.location.name}
//             </div>
//         </div>
//     )
// }

// export default WeatherList
