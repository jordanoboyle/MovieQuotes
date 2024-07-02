

export function QuotesIndex(props) {
  



  return(
    <div>
      <h1>This is from QuotesIndex</h1>
      <div>
      {props.quotes.map(function(quoteData, index) {
        <div key={index}>
          <p>Source: {quoteData.source}</p>
        </div>
      })}
      </div>
    </div>
  )
}