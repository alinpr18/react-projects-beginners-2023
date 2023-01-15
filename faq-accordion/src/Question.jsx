import { useState } from "react"
import './Question.css'

export function Question({ title, text }) {
  const [isOpen, setOpen] = useState(false)

  return (
    <section className="container-question">
      <div className="question-title">
        <h3>{title}</h3>
        <div className="question-arrow" onClick={() => setOpen(!isOpen)}>
          {isOpen ? '🔼' : '🔽'}
        </div>
      </div>
      {isOpen && <p className="question-info">{text}</p>}
    </section>
  )
}