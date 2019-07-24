import React from 'react'


const Course = ({course}) => {
    const parts = course.parts
    const rows = (parts) => parts.map(part => <li key={part.id}>{part.name} : {part.exercises}</li>)

    return (
    <div>
        <h1>{course.name}</h1>
        <ul>
            {rows(parts)}
        </ul>
    </div>

    )
}


export default Course