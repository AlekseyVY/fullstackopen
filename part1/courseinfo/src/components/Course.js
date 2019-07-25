import React from 'react'


const Course = ({course}) => {
    const parts = course.parts
    const rows = (parts) => parts.map(part => <li key={part.id}>{part.name} : {part.exercises}</li>)

    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
    <div>
        <h1>{course.name}</h1>
        <ul>
            {rows(parts)}
        </ul>
        total of {total} exercises
    </div>

    )
}


export default Course