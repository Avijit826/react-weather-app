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
  const [error, setError] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`
        )
        const data = await response.json()
        if (response.ok) {
          setDetails(data)
          setError(null)
        } else {
          setDetails(null)
          setError(data)
        }
        
      } catch (error) {
        setError({
          message:"failed to fetch data"
        })
        
      }
    }
    getData()
  }, [city])

  return (
    <div className="h-screen">
      <div className="h-full bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold py-4">Real-Time Weather</h2>
        <div className="rounded-md shadow-md sm:w-96 bg-gray-50 text-gray-800">
          <SearchBox handleChange={setCity} />
          {details ? <DataCard data={details} /> : <NoDataCard data = {error}/>}
        </div>
      </div>
    </div>
  )
}

export default App
