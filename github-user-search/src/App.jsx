import { useState } from 'react';
import './App.css'
import { User } from './User';
import { fetchResult } from './utils/api';

export function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const onSearchChange = (event) => {
    setQuery(event.target.value)
  }

  const onSearchSubmit = async (event) => {
    event.preventDefault()
    const results = await fetchResult(query)
    setResults(results)
    setQuery('')
  }

  return (
    <>
      <h1>Project 5: GitHub User Search</h1>
      <form className='form-container' onSubmit={onSearchSubmit}>
        <input placeholder='Enter username or email' type="text" name="user" value={query} onChange={(e) => onSearchChange(e)} />
        <button type="submit">Search</button>
      </form>
      <section>
        <h2>Results</h2>
        <ul className='user-list-container'>
          {results.map(user => (
            <User key={user.login} username={user.login} avatar={user.avatar_url} url={user.html_url} />
          ))}
        </ul>
      </section>
    </>
  )
}
