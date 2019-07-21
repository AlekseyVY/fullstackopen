import React, {useState} from 'react'
import ReactDom from 'react-dom'



const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)


const Display = (props) => <span>{props.value}</span>


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    //variable that counts total feedback
    let all = good + neutral + bad
    //variable that counts average score (good: 1, neutral: 0, bad: -1)
    let average = (good - bad) / all
    //variable that calculates positive percentage from all feedback
    let positivePercent = (((all - (neutral + bad)) / all) * 100)

    return (
        <div>
            <h1>give feedback</h1>
            <br/>
            <Button handleClick={() => setGood(good + 1)} text='good'/>
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
            <Button handleClick={() => setBad(bad + 1)} text='bad'/>
            <br/>
            <h1>statistics</h1>
            <p>good <Display value={good}/></p>
            <p>neutral <Display value={neutral}/></p>
            <p>bad <Display value={bad}/></p>
            <p>all <Display value={all}/></p>
            <p>average <Display value={average}/></p>
            <p>positive <Display value={positivePercent}/>%</p>
        </div>
    )
}



ReactDom.render(<App />, document.getElementById('root'))