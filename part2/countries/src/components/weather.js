import React, {useState, useEffect} from 'react'
import axios from 'axios'


const Weather = ({cntName}) => {
    const [weather, setWeather] = useState([])
   // console.log(`http://api.apixu.com/v1/current.json?key=208639048bbd456cad8144838193007&q=${cntName}`)
    useEffect(() => {
        fetch(`http://api.apixu.com/v1/current.json?key=208639048bbd456cad8144838193007&q=${cntName}`).then((result) => {
           result.json().then(data => setWeather(data.current))
        })
    }, [cntName])

    
    if (weather) {
        return (
            <div>
                <h1>Weather in {cntName}</h1>
                <p>temperature: {weather.temp_c} Celsius</p>
                <img alt='image'/>
                <p>wind: {weather.wind_kph} kph direction {weather.wind_dir}</p>
            </div>
        )
    }
    return (
        <></>
    )
}


export default Weather