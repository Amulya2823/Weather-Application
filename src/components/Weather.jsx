import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className=" flex justify-between w-[700px] h-[300px] shadow-xl bg-gray-200 rounded-2xl m-auto relative px-6 top-[10%]">
          <div className="flex flex-col justify-between p-2 m-4 text-2xl font-bold">
            {weatherData?.name},{weatherData?.sys?.country}
            <div className="py-2 m-2 font-semibold text-lg">
              Feels Like : {weatherData.main.feels_like} <br></br>
              Min Temp :{weatherData.main.temp_min}
              <br></br>
              Max Temp :{weatherData.main.temp_max} <br></br>
              Humidity :{weatherData.main.humidity} <br></br>
              Pressure : {weatherData.main.pressure}
            </div>
          </div>
          <div className="flex flex-col p-4 m-4 text-5xl font-bold">
            {weatherData?.main?.temp.toFixed()}°C
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="Logo"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
