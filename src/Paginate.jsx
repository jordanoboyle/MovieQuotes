import React from "react";

const Paginate = ({quotesPerPage, totalQuotes}) => {
  
  
  return(
    <div className="PaginateButtonContainer">
      <button className="PaginateButton">Next PAGE</button>
      <button className="PaginateButton">Previous PAGE</button>
    </div>
  )
}

export default Paginate;