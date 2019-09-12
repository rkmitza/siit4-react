import React, { useState } from 'react';

function Weather() {
  const [temperature, setTemperature] = useState('Loading ...');

  fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=c7da641777760054e5ca6164eb47580a')
    .then( res => res.json() )
    .then( data => setTemperature((data.main.temp - 273.15).toFixed(1)) );


  return (
    <p>
      <span>Temperature for Brasov: </span>
      <strong>{ temperature } &deg;C</strong>
    </p>
  );
}

export default Weather;