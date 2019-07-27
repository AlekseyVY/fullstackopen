import React, {useState} from "react";








const App =() => {
    const [persons, setPersons] = useState([
        {
            id: 1,
            name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const addPhone = (event) => {
        event.preventDefault()
        const newContact = {
            id: persons.length + 1,
            name: newName
        }
        haveContact(newContact)
    }

    const handleChange = (event) => {
        setNewName(event.target.value)
    }

    const rows = (persons) => persons.map((p) => <li key={p.id}>{p.name}</li>)

    const haveContact = (newContact) => {
        persons.map((p) => {
            if (p.name === newName) {
                window.alert(newName + ' is already added to phonebook')
            } else {
                setPersons(persons.concat(newContact))
                setNewName('')
            }
        })
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPhone}>
                <div>
                    name: <input  value={newName} onChange={handleChange}/>
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {rows(persons)}
            </div>
        </div>
    )
}


export default App