import { useEffect, useState } from "react"
import "./App.css"
import SearchBox from "./components/SearchBox"
const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_KEY
function App() {
  const [details, setDetails] = useState()
  const [city, setCity] = useState("")
  // const [stat, setStat] = useState(400)

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`
      )
      const data = await response.json()
      console.log(data)
      if (response.ok) {
        setDetails(data)
      }
      if (!response.ok) {
        setDetails(null)
      }
    }
    getData()
  }, [city])

  return (
    <div className="flex justify-center items-center">
      <div className="App">
        <SearchBox handleChange={setCity} />
        <p>hii {city}</p>
        {details ? (
          <div>
            True
            {/* <img
              src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@4x.png`}
              alt="icon"
            /> */}
            <p>hii {details.main.temp}</p>
          </div>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  )
}

export default App
