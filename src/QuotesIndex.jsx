import {useState, useEffect} from "react"



export function QuotesIndex(props) {


  return(
    <div>
      <h1>This is from QuotesIndex</h1>
      <div className="QuoteCardGrid">
      {props.quotes.map((quoteData, index) =>(
        <div key={index} className="QuoteCardGridItem">
          <p>Category: {quoteData.theme}</p>
          <p>Title: {quoteData.context}</p>
          <p>Source: {quoteData.source}</p>
          <p>Quote: {quoteData.quote}</p>
        </div>
      ))}
      </div>
    </div>
  )
}