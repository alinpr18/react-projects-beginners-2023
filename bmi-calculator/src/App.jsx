import { useMemo } from 'react'
import { useState } from 'react'
import './App.css'

export function App() {
  const [weight, setWeight] = useState(50)
  const [height, setHeight] = useState(100)

  const onWeigthChange = (event) => {
    const inputWeigth = event.target.value
    setWeight(inputWeigth)
  }

  const onHeightChange = (event) => {
    const inputHeight = event.target.value
    setHeight(inputHeight)
  }

  const output = useMemo(() => {
    return (weight / (height / 100) ** 2).toFixed(1)
  }, [weight, height])

  return (
    <div className='container'>
      <h1 className='project-title'>Project 7: BMI CALCULATOR</h1>
      <div className='input-container'>
        <div className='input-radio'>
          <label htmlFor='weight'>Weight: {weight}</label>
          <input id="weight" onChange={(e) => onWeigthChange(e)} value={weight} min={20} max={220} type="range" />
        </div>
        <div className='input-radio'>
          <label htmlFor='height' >Height: {height}</label>
          <input id="height" onChange={(e) => onHeightChange(e)} value={height} min={140} max={220} type="range" />
        </div>
      </div>
      <div className='bmi-container'>
        <p className='bmi-title'>Your BMI is</p>
        <span className='bmi-result'>{output}</span>
      </div>
    </div>
  )
}
