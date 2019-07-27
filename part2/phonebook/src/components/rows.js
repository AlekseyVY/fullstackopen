import React from 'react'



const Rows = (filterShow) => {

    const rows = () => filterShow.value.map((p) => <li key={p.id}>name: {p.name} number: {p.number}</li>)
    return (
        <div>
        {rows()}
        </div>
    )
}

export default Rows