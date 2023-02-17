import React from 'react'
import Title from "../Title/Title.js";
import Particle from '../Particles/Particle.js';
import './EntryPage.css'

export default function EntryPage(props) {
    function startBtn(){
        props.start(prev => !prev)
        props.category(prev => document.getElementById("category").value)
        props.difficulty(prev => document.getElementById("difficulty").value)
    }
    
    return (
        <header>
            <Particle />
            <Title />
            <h4>"The ultimate trivia challenge"</h4>
            <div className='start-game'>
                <label htmlFor="category">Category:
                    <select id="category" className="category selection">
                        <option value="">Any Category</option>
                        <option value="25">Art</option>
                        <option value="12">Music</option>
                        <option value="10">Books</option>
                        <option value="21">Sports</option>
                        <option value="11">Movies</option>
                        <option value="23">History</option>
                        <option value="17">Science</option>
                        <option value="20">Mythology</option>
                        <option value="19">Mathematics</option>
                        <option value="15">Video Games</option>
                        <option value="18">Computer Science</option>
                    </select>
                </label>
                <label htmlFor="difficulty">Difficulty: 
                    <select id="difficulty" className='difficulty selection'>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <button className="btn" onClick={startBtn}>Start Quiz</button>
            </div>
        </header>
    )
}