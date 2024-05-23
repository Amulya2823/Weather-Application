import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./components/Weather";

function App() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});

  const API_KEY = "17af3d38a09eff4e8576a96ab39c629b";
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchCity = (e) => {
    if (e.key === "Enter") {
      axios.get(api).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="w-full h-full relative">
      <div className="text-center p-6">
        <input
          type="text"
          placeholder="Enter City Here"
          className="border-4 focus:outline-none rounded-xl w-[700px] shadow-lg px-4 py-4 text-3xl "
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyDownCapture={searchCity}
        ></input>
      </div>
      <Weather weatherData={data}/>
    </div>
  );
}

export default App;
