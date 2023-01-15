import { useState } from 'react'
import './App.css'

export function App() {

  const [items, setItems] = useState([])

  const onSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const input = form.item
    const newItems = [...items, input.value]
    setItems(newItems)
    form.reset()
  }

  const onRemoveItem = (item) => {
    const listIndex = items.findIndex(i => i === item)
    const newList = [...items]
    newList.splice(listIndex, 1)
    setItems(newList)
  }

  return (
    <>
      <h1>Project 4: Shopping List</h1>
      <section className='container-shopping'>
        <h2 className='shopping-title'>Items To Buy</h2>
        <form onSubmit={onSubmit} className='shopping-buttons'>
          <input required type="text" name='item' placeholder='Add a new item' />
          <button type="submit">Add</button>
        </form>
        <ul className='shopping-list'>
          {items.map((item, index, a) => (
            <li key={item + index}>
              {item}
              <button className='shopping-btn-remove' onClick={() => onRemoveItem(item)}>❌</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
