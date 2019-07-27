import React, {useState} from "react";








const App =() => {
    const [persons, setPersons] = useState([
        {
            id: 1,
            name: 'Arto Hellas',
            number: '+70000000'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    let find = 0;
    const haveContact = () => {
        persons.map((p) => {
            if (p.name.toLowerCase() === newName.toLowerCase()) {
                find = 1
            }
        })
    }

    const addPhone = (event) => {
        event.preventDefault()
        const newContact = {
            id: persons.length + 1,
            name: newName,
            number: newNumber
        }
        haveContact()
        if (find === 1){
        window.alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(newContact))
            setNewName('')
            setNewNumber('')
        }
    }

    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }
    const handleChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }

    const rows = (persons) => persons.map((p) => <li key={p.id}>name: {p.name} number: {p.number}</li>)



    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPhone}>
                <div>
                    name: <input  value={newName} onChange={handleChangeName}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={handleChangeNumber}/>
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