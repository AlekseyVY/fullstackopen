import React from 'react'
import dbService from '../service/dbService'


const Rows = ({value, sPer}) => {

    const rows = () => value.map((p) => <li key={p.id}>name: {p.name} number: {p.number} <button onClick={
        () => {
            if(window.confirm(`Delete ${p.name}?`))
            {
                dbService.deleteContact(p.id)
            }
        }
    }>delete</button></li>)

    return (
        <div>
            <h2>Numbers</h2>
        {rows()}
        </div>
    )
}

export default Rows