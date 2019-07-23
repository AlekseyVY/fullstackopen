import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'





const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const App = (props) => {
    let [selected, setSelected] = useState(0)
    const [point, setPoint] = useState(new Array(anecdotes.length).fill(0))


    return (
        <div>
            <div>
                {props.anecdotes[selected]}
            </div>
            <div>
                has {point[selected]} votes
            </div>
                <Button handleClick={() => setPoint(point.concat(point[selected] += 1))} text='vote'/>
                <Button handleClick={() => setSelected(selected = Math.floor(Math.random() * anecdotes.length ))} text='next anecdote'/>
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'))