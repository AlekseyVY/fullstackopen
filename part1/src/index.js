import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <h3>
                {props.p} {props.e}
            </h3>
        </div>
    )
}

const Content = (props) => {
    return (
        <>
        <Part p = {props.pt1} e = {props.exec1} />
        <Part p = {props.pt2} e = {props.exec2} />
        <Part p = {props.pt3} e = {props.exec3} />
        </>
    )
}

const Total = (props) => {
    return (
        <div>
            <h3>
                Number of exercises: {props.exe1 + props.exe2 + props.exe3}
            </h3>
        </div>
    )
}



const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14

    return (
        <>
            <Header course = {course}/>
            <Content pt1 = {part1} exec1 = {exercises1}
            pt2 = {part2} exec2 = {exercises2}
            pt3 = {part3} exec3 = {exercises3}/>
            <Total exe1 = {exercises1} exe2 = {exercises2} exe3 = {exercises3}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))