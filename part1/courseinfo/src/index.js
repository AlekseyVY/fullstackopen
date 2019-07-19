import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <div>
            <h1>{props.course.name}</h1>
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
            <Part p = {props.course.parts[0].name} e = {props.course.parts[0].exercises} />
            <Part p = {props.course.parts[1].name} e = {props.course.parts[1].exercises} />
            <Part p = {props.course.parts[2].name} e = {props.course.parts[2].exercises} />
        </>
    )
}

const Total = (props) => {
    return (
        <div>
            <h3>
                Number of exercises: {props.course.parts[0].exercises +
            props.course.parts[1].exercises + props.course.parts[2].exercises}
            </h3>
        </div>
    )
}



const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts: [{
            name: 'Fundamentals of React',
            exercises: 10
        },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of component',
                exercises: 14
            }
        ]
    }

    return (
        <>
            <Header course = {course}/>
            <Content course = {course}/>
            <Total course = {course}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))