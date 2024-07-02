import {useState, useEffect} from "react";
import Paginate from "./Paginate";


export function QuotesIndex(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [quotesPerPage] = useState(6)
  // ...
  const indexOfLastQuote  = currentPage * quotesPerPage;
  const indexOfFirstQuote = indexOfLastQuote - quotesPerPage
  const currentQuotes = props.quotes.slice(indexOfFirstQuote, indexOfLastQuote)

  const [searchTerm, setSearchTerm] = useState('');

  const goPreviousPage = () => {
    console.log("going the previous page!")
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const goNextPage = () => {
    console.log("going to the next page")
    if (currentPage !== Math.ceil(props.quotes.length / quotesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return(
    <div>
      <h1>This is from QuotesIndex</h1>
        <p>Search Quotes:
          <input 
          type="text" 
          placeholder="Search by quote..." 
          value={searchTerm} 
          onChange={event => setSearchTerm(event.target.value)} />
        </p>
        <p>
          {searchTerm}
        </p>
      <div className="QuoteCardGrid">
      {currentQuotes.map((quoteData, index) =>(
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
      paginate={paginate}
      /> 
    </div>
  )
}