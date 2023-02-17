import React from "react";
import Title from "../Title/Title";
import End from "../End/End";
import Questions from "../Questions/Questions";
import './Quiz.css'

export default function Quiz(props) {
    const {category, difficulty, setStart} = props
    const [questions, setQuestions] = React.useState([])

    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=15&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then(res => res.json())
        .then(data => setQuestions(data.results))
    }, [category, difficulty])

    function checkSol(question, answer){
        if(questions[question].correct_answer === answer){
            return true
        }else{
            //console.log(`${question} is false, your answer is ${answer} but true answer is ${questions[question].correct_answer}`)
            return false
        }
    }

    function checkQuiz(setTrueAnswers){
        let selected = {}
        Array.from(document.querySelectorAll(".selected")).forEach(item => {
            const question = item.dataset.question
            const answer = item.dataset.selection
            selected[question] = {question: question, answer: answer, div: item}
        })
        for(let i=0; i<questions.length; i++){
            const correctDiv = Array.from(document.querySelectorAll(".answer")).filter(item => item.dataset.selection === questions[i].correct_answer)[0]
            if(selected[i]){
                correctDiv.classList.add("correct")
                selected[i].div.classList.remove("selected")
                if(checkSol(i, selected[i].answer)){
                    setTrueAnswers(prev => prev+1)
                }else {
                    selected[i].div.classList.add("false")
                }
            }else{
                correctDiv.classList.add("empty")
            }
        }
        document.querySelectorAll(".question-card").forEach(item => item.classList.add("finished"))
    }

    function selectAnswer(question, answerDiv){
        document.querySelectorAll(`.answer${question}`).forEach(element => element.classList.remove("selected"))
        answerDiv.classList.add("selected")
    }

    React.useEffect(() => {
        document.addEventListener("click", e => {
            if(e.target.dataset.question) {
                const question = e.target.dataset.question
                const answer = e.target.dataset.selection
                selectAnswer(question, e.target, answer)  
            }
        })
    }, [])

    return (
        <main>
            <Title />
            <Questions  questions={questions}/>
            <End checkQuiz={checkQuiz} setStart={setStart}/> 
        </main>
    )
}