import React from "react";

const Paginate = ({quotesPerPage, totalQuotes, nextPage, previousPage, currentPage, paginate}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalQuotes / quotesPerPage); i++) {
    pageNumbers.push(i);
  }
  const printInformation = () => {
    console.log(quotesPerPage)
    console.log(totalQuotes)
  
  }

  
  
  return(
    <div className="PaginateButtonContainer">
      <button onClick={printInformation}>Click Here</button>
        <div>
          <ul className="PaginationListButtons">
            <li className="page-number active" onClick={previousPage}>
              Prev
            </li>
        {pageNumbers.map((number) => 
            <li className={"page-number" + (number === currentPage ? 'active' : '')} 
            key={number} 
            onClick={() => paginate(number)}
            >
              Page Number: {number}  
            </li> 
        )}
            <li className="page-number active" onClick={nextPage}>
              Next
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Paginate;
{/* <button onClick={nextPage} className="PaginateButton">Next PAGE</button>
<button onClick={previousPage} className="PaginateButton">Previous PAGE</button> */}