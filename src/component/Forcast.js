import React from 'react'

const Forcast = ({el}) => {
    return (
        <div>
            

            <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <img src={el.day.condition.icon} alt="" />
            <h3>{el.day.condition.text}</h3>
            <h4>{el.day.avgtemp_c} °C</h4>
            <h3>{el.date}</h3>
    </div>
    <div class="flip-card-back">
    <h4>humidity: {el.day.avghumidity} %</h4>
    </div>
  </div>
</div>


        </div>



    )
}

export default Forcast
