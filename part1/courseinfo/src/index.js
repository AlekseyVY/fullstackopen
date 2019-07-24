import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


/*const Header = (props) => {
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
    eturn (
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
}*/




ReactDOM.render(<App />, document.getElementById('root'))