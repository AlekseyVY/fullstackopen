import React from 'react'



const Rows = ({value}) => {

    const rows = () => value.map((p) => <li key={p.id}>name: {p.name} number: {p.number}</li>)
    return (
        <div>
            <h2>Numbers</h2>
        {rows()}
        </div>
    )
}

export default Rows