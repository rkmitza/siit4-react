import React from 'react';

function Weather() {
  const temperature = 'Hello from Weather component';

  fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=c7da641777760054e5ca6164eb47580a')
    .then(res => res.json())
    .then(data => console.log(data));

  return (
    <p>
      <span>Temperature for Brasov: </span>
      <strong>{ temperature }</strong>
    </p>
  );
}

export default Weather;