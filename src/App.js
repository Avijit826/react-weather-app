import { useEffect, useState } from "react"
import "./App.css"
import DataCard from "./components/DataCard"
import NoDataCard from "./components/NoDataCard"
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
      } else {
        setDetails(null)
      }
    }
    getData()
  }, [city])

  return (
    <div className="h-screen">
      <div className="h-full bg-gray-100 flex flex-col items-center justify-center">
        <div className="rounded-md shadow-md sm:w-96 bg-gray-50 text-gray-800">
          <SearchBox handleChange={setCity} />
          {details ? <DataCard data={details} /> : <NoDataCard />}
        </div>
      </div>
    </div>
  )
}

export default App
