import { useEffect, useState } from "react"
// require("dotenv").config()
import "./App.css"
const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
function App() {
  const [details, setDetails] = useState(null)
  // const [weather, setWeather] = useState({})
  const getData = async () => {
    const response = await fetch(
      `${apiUrl}?q=kolkata&units=metric&appid=${apiKey}`
    )
    const data = await response.json()
    setDetails(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return details ? (
    <div className="App">
      <img
        src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@4x.png`}
        alt="icon"
      />
      <p>hii {details.name}</p>
      <p>hii {details.main.temp}</p>
      {/* {console.log(apiUrl)} */}
    </div>
  ) : (
    <div>No Data</div>
  )
}

export default App
