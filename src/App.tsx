import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

interface Image {
  url: string
}

export default function App() {
  const [data, setData] = useState<Image[]>([])

  const envFile = import.meta.env; // access .env file

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${envFile.VITE_IMAGES_URL}`)
      console.log(setData(res.data))
    }
    fetchData()

  }, [])
  return (
    <div>
      <h1>Images Fetched</h1>
      {data.map(image => (
        <img key={image.url} src={`${image.url}`} style={{width: "200px"}} alt="" />
      ))}
    </div>
  )
}
