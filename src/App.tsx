import { useEffect } from "react"


export default function App() {
  const environment = import.meta.env
  useEffect(() => {
    console.log(environment)
  }, [])
  return (
    <div>
      <h2>Handle Different Environments In React</h2>
      <p>Environment {environment.VITE_ENV}</p>
      <p>URL {environment.VITE_API_URL}</p>
    </div>
  )
}
