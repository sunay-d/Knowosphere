import React from "react";

export default function Questions(props) {
    const {questions} = props

    function getQuestions(questions) {
        const questionList = []
        for(let i=0; i<questions.length; i++){
            const question = questions[i].question
            let answers = [...questions[i].incorrect_answers]
            const correctAnswer = questions[i].correct_answer
            const randomIndex = Math.floor(Math.random()*4)
            answers.splice(randomIndex,0,correctAnswer)
            questionList.push({
                qNumber: i,
                question: question,
                A: answers[0],
                B: answers[1],
                C: answers[2],
                D: answers[3],
            })
        }
        return questionList
    }

    function decodeHtml(html) {
        let txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function render(){
        const questionList = getQuestions(questions)
        const htmlList = questionList.map(item => {
            return (
                <div key={item.qNumber} className="question-card">
                    <h4 className="question"><span className="question-number">{`Question ${item.qNumber+1}: `}</span>{decodeHtml(item.question)}</h4>
                    <div className="answers">
                        <div className={`answer answer${item.qNumber}`} data-selection={item.A} data-question={item.qNumber}><span className="answer-number">{`A) `}</span>{decodeHtml(item.A)}</div>
                        <div className={`answer answer${item.qNumber}`} data-selection={item.B} data-question={item.qNumber}><span className="answer-number">{`B) `}</span>{decodeHtml(item.B)}</div>
                        <div className={`answer answer${item.qNumber}`} data-selection={item.C} data-question={item.qNumber}><span className="answer-number">{`C) `}</span>{decodeHtml(item.C)}</div>
                        <div className={`answer answer${item.qNumber}`} data-selection={item.D} data-question={item.qNumber}><span className="answer-number">{`D) `}</span>{decodeHtml(item.D)}</div>
                    </div>
                </div>
            )
        })
        return htmlList
    }
   
    return (
        <div>
            {render()}
        </div>
    )
}
