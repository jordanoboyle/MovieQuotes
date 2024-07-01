

export function QuotesIndex(props) {
  

  

  return(
    <div>
      <h1>This is from QuotesIndex</h1>
      <div>
      {props.quotes.map(quoteData => (
        <div>
          <p>Source: {quoteData.source}</p>
        </div>
      ))}
      </div>
    </div>
  )
}