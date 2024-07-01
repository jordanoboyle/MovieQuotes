import axios from "axios"
import { useState, useEffect } from "react"
import { QuotesIndex } from "./QuotesIndex"



export function Content() {
  const [quoteData, setQuoteData] = useState([])

  const handleQuotesIndex = () => {
    console.log("getting the data")
    axios.get("https://gist.githubusercontent.com/benchprep/dffc3bffa9704626aa8832a3b4de5b27/raw/quotes.json").then(response => {
      console.log(response.data);
      setQuoteData(response.data);
      
    })
  }
  
  useEffect(handleQuotesIndex, []);

  return (
    <main>
      <h1>Welcome to React!</h1>
      {/* <button onClick={handleQuotesIndex}>push</button> */}
      <QuotesIndex quotes={quoteData}/>
    </main>
  )
}