import React from "react"

const DataCard = ({ data }) => {
  function degToText(degree) {
    if (degree > 337.5) return "North"
    if (degree > 292.5) return "North West"
    if (degree > 247.5) return "West"
    if (degree > 202.5) return "South West"
    if (degree > 157.5) return "South"
    if (degree > 122.5) return "South East"
    if (degree > 67.5) return "East"
    if (degree > 22.5) {
      return "North East"
    }
    return "North"
  }
  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt=""
            className="object-cover object-center w-16 h-16 rounded-full shadow-lg bg-yellow-200 border-gray-300"
          />
          <div className="pl-1">
            <h2 className="text-xl font-semibold leading-none capitalize">
              {data.weather[0].description}
            </h2>
            <span className="inline-block text-sm leading-none text-gray-600">
              {data.name}, {data.sys.country}
            </span>
          </div>
        </div>
        <div className="mr-2">
          <h2 className="text-2xl font-semibold leading-none text-right">
            {Math.round(data.main.temp_max)}&deg;
            <span className="mx-1 font-normal">/</span>
            {Math.floor(data.main.temp_min)}&deg;
            <span className="text-sm">C</span>
          </h2>
          <span className="inline-block leading-none text-gray-600">
            Feels like {Math.round(data.main.feels_like)}&deg;c
          </span>
        </div>
      </div>

      <div className="mb-2 text-center text-3xl pl-4 font-semibold">
        {Math.round(data.main.temp)}&deg;
        <span className="text-base">C</span>
      </div>

      <div className="">
        <div className="flex flex-row justify-around my-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">
              {Math.round(data.wind.speed)} km/h
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Direction</div>
            <div className="text-sm text-gray-500">
              {degToText(data.wind.deg)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{data.main.humidity}%</div>
          </div>
        </div>

        <div className="flex flex-row justify-around my-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Clouds</div>
            <div className="text-sm text-gray-500">{data.clouds.all}%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Pressure</div>
            <div className="text-sm text-gray-500">
              {data.main.pressure} mBar
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">
              {data.visibility / 1000} km
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataCard
