import React, { useEffect } from 'react'

export default function Timer() {
    const [timeLeft, setTimeLeft] = React.useState(10)

    useEffect(() => {
        setInterval(() => setTimeLeft(prev => {
            if (prev>0){
                return prev-1
            }
            return 0
        }), 1000)
    }, [])

    return(
        <div>
            <p>{`Time Left < ${parseInt(timeLeft / 60, 10)} : ${parseInt(timeLeft % 60, 10)}`}</p>
            {timeLeft===0 && <div className="timeUp"><h1>Time is up!</h1></div>}
        </div>
    )
}


