import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getWeather } from '../JS/Actions/weatherActions'
import Forcast from './Forcast';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Weather = () => {
    const classes = useStyles();
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
            <Card className={classes.root} 
            style={{display:"flex", justifyContent:"center",margin:"auto", opacity:"0.4"}}>
      <CardActionArea>
      <img className={classes.media} src={weathers.current&&weathers.current.condition.icon} alt=""/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {weathers.current&&weathers.current.condition.text}
          <br/>
          {weathers.current&&weathers.current.temp_c}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h1>{weathers.location&&weathers.location.name}</h1>
                <h1>{weathers.location&&weathers.location.country}</h1>
                <h2>{weathers.current&&weathers.current.last_updated}</h2>
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
            </div>}
            <div style={{display:'flex',flexDirection:"row", justifyContent:"space-around", marginTop:"60px"}}>
                {weathers.forecast&&weathers.forecast.forecastday.map(el=> <Forcast el={el} />)}
            </div>
        </div>
    )
}

export default Weather
