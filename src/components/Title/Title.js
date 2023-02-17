import React from "react";
import './Title.css'

export default function Title() {
    function animationTitle() {
        for (let i=1; i<12; i++){
            const element = document.getElementById(("i"+i))
            setTimeout(() => {
                element.classList.add("a")
                setTimeout(() => {
                    element.classList.remove("a")
                }, 200)
            }, 30*i)
        }
    }

    window.onload = animationTitle
 
    return (
        <div >
            <h1 className='title'>
                <span id="i1" className="letter" style={{color:"#06D6A0"}}>K</span>
                <span id="i2" className="letter" style={{color:"#F7B32B"}}>N</span>
                <span id="i3" className="letter" style={{color:"#2176FF"}}>O</span>
                <span id="i4" className="letter" style={{color:"#F72C25"}}>W</span>
                <span id="i5" className="letter" style={{color:"#C492B1"}}>O</span>
                <span id="i6" className="letter" style={{color:"#06D6A0"}}>S</span>
                <span id="i7" className="letter" style={{color:"#F7B32B"}}>P</span>
                <span id="i8" className="letter" style={{color:"#F72C25"}}>H</span>
                <span id="i9" className="letter" style={{color:"#2176FF"}}>E</span>
                <span id="i10" className="letter" style={{color:"#06D6A0"}}>R</span>
                <span id="i11" className="letter" style={{color:"#F7B32B"}}>E</span>
            </h1>
        </div>
    )
}