import React from "react";
import "./styles.css";
import weatherArray from "./weatherData"
import WeatherForecast from "./components/WeatherForecast"

const weathers = weatherArray.map((ele, index) => {
  return <WeatherForecast {...ele} key={index} />
})

console.log(weathers)

export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1> 
      <section>
      {weathers}
      </section>
    </div>
  );
}
