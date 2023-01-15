import { useState } from 'react'
import './App.css'

export function App() {
  const [current, setCurrent] = useState(0)

  const images = [
    'https://picsum.photos/200',
    'https://picsum.photos/300',
    'https://picsum.photos/400',
    'https://picsum.photos/500'
  ]

  const prevSlider = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  const nextSlider = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  return (
    <>
      <h1>Project 1: Corousel</h1>
      {images.map((image, index) => (
        current === index &&
        <div className='image-container' key={image}>
          <div onClick={prevSlider} className="left-arrow">👈</div>
          <img className='image' src={image} alt="Random images" />
          <div onClick={nextSlider} className="right-arrow">👉</div>
        </div>
      ))}
    </>
  )
}