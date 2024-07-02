import {useState, useEffect} from "react";
import Paginate from "./Paginate";


export function QuotesIndex(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(6)
  // ...
  const indexOfLastQuote  = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage
  const currentQuotes = props.quotes.slice(indexOfFirstQuote, indexOfLastQuote)

  const goPreviousPage = () => {
    console.log("going the previous page!")
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const goNextPage = () => {
    console.log("going to the next page")
    if (currentPage !== Math.ceil(props.quote.length / quotesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  const paginate = () => {
    setCurrentPage(pageNumber)
  }

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
      <br/>
      <br/>
      <br/>
      <Paginate
      quotesPerPage={quotesPerPage}
      totalQuotes={props.quotes.length}
      nextPage={goNextPage}
      previousPage={goPreviousPage}
      currentPage={currentPage}
      pagiante={paginate}
      /> 
    </div>
  )
}