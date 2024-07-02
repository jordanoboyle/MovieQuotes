import axios from "axios"
import { useState, useEffect } from "react"
import { QuotesIndex } from "./QuotesIndex"



export function Content() {
  const [quoteData, setQuoteData] = useState([])
  const [error, setError] = useState(null)

  const handleQuotesIndex = () => {
    console.log("getting the data")
    axios.get("https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json").then(response => {
      console.log(response.data);
      setQuoteData(response.data); 
    })
    .catch(err => {
      console.log("Error fetching data", err)
      setError(err)
    })
  }
  
  useEffect(handleQuotesIndex, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      <QuotesIndex quotes={quoteData} error={error}/>
    </main>
  )
}