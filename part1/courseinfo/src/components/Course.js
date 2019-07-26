import React from 'react'

// this is bruteforce approach I need to refractor this later :)

const Course = ({courses}) => {
    let parts = []
    //iterates tru object and get name and parts into new array
    courses.map((course, i) => {
        parts.push(courses[i].name)
        parts.push(course.parts)
    })
    let value = []
    // using reduce method calculates total of rxercises
    parts.map((v, i) => {
        if (typeof v !== 'string') {
            value.push(v.reduce((x, y) => x + y.exercises, 0))
        }
    })
    let x = 0
    //function that return rendering result of name and parts
    const part = parts.map((part, i)=> {
            if(typeof part === 'string') {
                return <h2 key={i}>{part}</h2>
            } else {
                return ([
                    part.map(x => <li key={x.id}>{x.name} : {x.exercises}</li>),
                        <h3>total of {value[x++]} exercises</h3>
                        ]
            )
    }
})
    return (
        <div>
            <h1>Web development curriculum</h1>
            {part}
        </div>
    )
}


export default Course