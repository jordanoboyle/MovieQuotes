import React from "react";

const Paginate = ({quotesPerPage, totalQuotes, nextPage, previousPage, }) => {


  
  
  return(
    <div className="PaginateButtonContainer">
      <button onClick={nextPage} className="PaginateButton">Next PAGE</button>
      <button onClick={previousPage} className="PaginateButton">Previous PAGE</button>
    </div>
  )
}

export default Paginate;