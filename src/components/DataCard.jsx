import React from "react"

const DataCard = () => {
  function toTextualDescription(degree) {
    if (degree > 337.5) return "Northerly"
    if (degree > 292.5) return "North Westerly"
    if (degree > 247.5) return "Westerly"
    if (degree > 202.5) return "South Westerly"
    if (degree > 157.5) return "Southerly"
    if (degree > 122.5) return "South Easterly"
    if (degree > 67.5) return "Easterly"
    if (degree > 22.5) {
      return "North Easterly"
    }
    return "Northerly"
  }
  return (
    <div>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img
            src={`https://openweathermap.org/img/wn/50n@4x.png`}
            alt=""
            className="object-cover object-center w-16 h-16 rounded-full shadow-sm bg-gray-200 border-gray-300"
          />
          <div className="pl-1">
            <h2 className="text-xl font-semibold leading-none">Haze</h2>
            <span className="inline-block text-sm leading-none text-gray-600">
              Kolkata, IN
            </span>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold leading-none text-right">
            32&deg;
            <span className="mx-1 font-normal">/</span>20&deg;
            <span className="text-sm">C</span>
          </h2>
          <span className="inline-block leading-none text-gray-600">
            Feels like 30&deg;c
          </span>
        </div>
      </div>

      <div className="mb-2 text-center text-3xl pl-4 font-semibold">
        32°<span className="text-base">C</span>
      </div>

      <div className="">
        <div className="flex flex-row justify-around my-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">9k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Direction</div>
            <div className="text-sm text-gray-500">
              {toTextualDescription(160)}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">68%</div>
          </div>
        </div>

        <div className="flex flex-row justify-around my-6">
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Clouds</div>
            <div className="text-sm text-gray-500">68%</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Pressure</div>
            <div className="text-sm text-gray-500">9k/h</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">10km</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataCard
