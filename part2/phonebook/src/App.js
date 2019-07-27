import React, {useState} from "react";








const App =() => {
    const [persons, setPersons] = useState([
        {id: 1, name: 'Arto Hellas', number: '040-123456'},
        {id: 2, name: 'Ada Lovelace', number: '39-44-5323523'},
        {id: 3, name: 'Dan Abramov', number: '12-43-234345'},
        {id: 4, name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [findName, setFindName] = useState('')
    const [showAll, setShowAll] = useState(false)

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

    const handleFind = (event) => {
        setFindName(event.target.value)
    }

    const rows = () => filterShow.map((p) => <li key={p.id}>name: {p.name} number: {p.number}</li>)

    const filterShow = showAll ? persons : persons.filter(p => p.name.toLowerCase().includes(findName.toLowerCase()))


    return (
        <div>
            <h1>Phonebook</h1>
            filter shown with <input value={findName} onChange={handleFind} />
            <h2>add a new</h2>
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
                {rows()}
            </div>
        </div>
    )
}


export default App