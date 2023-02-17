import React from "react";
import ConfettiExplotion from "react-confetti-explosion";

export default function End(props) {
    const {checkQuiz, setStart} = props
    const [finishedQuiz, setFinishedQuiz] = React.useState(false)
    const [trueAnswers, setTrueAnswers] = React.useState(0)

    function evaluate(t) {
        if(t===15){
            return 'You rock! 🤘'
        }else if (t>10){
            return 'Very good! ✨'
        }else if (t>6){
            return 'Not bad... 😉'
        }else if (t>4){
            return 'Meeh... 🥱'
        }else if(t>0){
            return "Well... It's a start 🤔"
        }else {
            return 'Wow... You really suck 😑'
        }
    }

    function newQuiz() {
        setFinishedQuiz(prev => !prev)
        setTrueAnswers(0)
        setStart(prev => !prev)
    }

    let html = finishedQuiz ?        
    <div className="message">
        <div className="message">
            <h4>{`${trueAnswers}/15`}</h4>
            <h4>{evaluate(trueAnswers)}</h4>
        </div>
        <button className="btn new-quiz" onClick={newQuiz}>New Quiz</button>
    </div> :
    <button className="btn" onClick={() => {checkQuiz(setTrueAnswers); setFinishedQuiz(prev => !prev)}}>Check Answers</button>

    return(
        <div>
            {trueAnswers>6 &&  
            <ConfettiExplotion 
                particleCount={400}
                width={2000}/> }
            {html}
        </div>
    )
}