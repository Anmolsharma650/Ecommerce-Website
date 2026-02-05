import axios from "axios"
import { createContext, useState, useCallback } from "react"

export const DataContext = createContext(null)

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([])

  const fetchAllProducts = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products?limit=150"
      )
      setData(res.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <DataContext.Provider value={{ data, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  )
}
