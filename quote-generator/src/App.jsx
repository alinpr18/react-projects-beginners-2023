import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

export function App() {

  const [quote, setQuote] = useState("")
  const [quotes, setQuotes] = useState([])


  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(res => res.json())
      .then(data => {
        setQuotes(data)
        setQuote(data[0])
      })
  }, [])

  const getRandomQuotes = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return (
    <>
      <h1>Project 3: Quote Generator</h1>

      <section className='container-quote'>
        <button onClick={getRandomQuotes}>New Quote</button>
        <h3>
          “{quote.text}
        </h3>
        <i>
          - {quote.author}
        </i>
      </section>
    </>
  )
}