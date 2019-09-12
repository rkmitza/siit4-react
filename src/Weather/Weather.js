import React from 'react';

class Weather extends React.Component {
  state = {
    temperature: 'Loading ...',
    alta: 'test'
  };

  async componentDidMount() {
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,ro&appid=c7da641777760054e5ca6164eb47580a')
    .then( res => res.json() );

    console.log(data.name)
    this.setState({ 
      temperature: (data.main.temp - 273.15).toFixed(1) 
    });
  }

  render() {
    return (
      <p>
        <span>Temperature for Brasov { this.state.alta }: </span>
        <strong>{ this.state.temperature } &deg;C</strong>
      </p>
    );
  }
}

export default Weather;