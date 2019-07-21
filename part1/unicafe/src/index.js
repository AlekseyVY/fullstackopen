import React, {useState} from 'react'
import ReactDom from 'react-dom'



const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const Statistic = (props) => {

    return (
        <div>
            {props.text} {props.value}
        </div>
    )
}

const Statistics = (value) => {

    //variable that counts total feedback
    let all = value.g + value.n + value.b
    //variable that counts average score (good: 1, neutral: 0, bad: -1)
    let average = (value.g - value.b) / all
    //variable that calculates positive percentage from all feedback
    let positivePercent = (((all - (value.n + value.b)) / all) * 100)
    //gives feedback when
    if(value.g === 0 && value.b === 0 && value.n === 0){
        return (
            <div>
                <h3>No feedback given</h3>
            </div>
        )
    } else {
        return (
            <>
                <h1>statistics</h1>
                <Statistic text='good' value={value.g}/>
                <Statistic text='neutral' value={value.n}/>
                <Statistic text='bad' value={value.b}/>
                <Statistic text='all' value={all}/>
                <Statistic text='average' value={average}/>
                <Statistic text='positive' value={positivePercent}/>
            </>
        )
    }
}



const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    let value = {
        g: good,
        n: neutral,
        b: bad
    }

    return (
        <div>
            <h1>give feedback</h1>
            <br/>
            <Button handleClick={() => setGood(good + 1)} text='good'/>
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
            <Button handleClick={() => setBad(bad + 1)} text='bad'/>
            <br/>
            <Statistics {...value}/>
        </div>
    )
}



ReactDom.render(<App />, document.getElementById('root'))