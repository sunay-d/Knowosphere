import React from 'react'
import './App.css'
import EntryPage from './components/EntryPage/EntryPage.js'
import Quiz from './components/QuizPage/Quiz'

function App() {
  const [start, setStart] = React.useState(false)
  const [category, setCategory] = React.useState("")
  const [difficulty, setDifficulty] = React.useState("easy")
  return (
    <div className="App">
      {start ? 
      <Quiz 
        category = {category}
        difficulty = {difficulty}
        setStart = {setStart}/> : 
      <EntryPage 
        start = {setStart}
        category = {setCategory}
        difficulty = {setDifficulty}/>}
    </div>
  )
}

export default App
