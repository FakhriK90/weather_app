import React from 'react'

const Forcast = ({el}) => {
    return (
        <div>
            <img src={el.day.condition.icon} alt="" />
            <h3>{el.day.condition.text}</h3>
            <h4>{el.day.avgtemp_c}</h4>
            <h3>{el.date}</h3>
        </div>
    )
}

export default Forcast
