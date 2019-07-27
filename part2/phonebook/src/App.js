import React, {useState} from "react";
import Rows from './components/rows'
import AddContact from "./components/addcontact";







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


    const handleChangeName = (event) => {
        setNewName(event.target.value)
    }
    const handleChangeNumber = (event) => {
        setNewNumber(event.target.value)
    }
    const handleFind = (event) => {
        setFindName(event.target.value)
    }


    const filterShow = showAll ? persons : persons.filter(p => p.name.toLowerCase().includes(findName.toLowerCase()))


    return (
        <div>
            <h1>Phonebook</h1>
            filter shown with <input value={findName} onChange={handleFind} />
            <h2>add a new</h2>
            <AddContact value={persons} nameState={newName}
            numberState={newNumber} sPerson={setPersons} sName={setNewName}
            sNumber={setNewNumber} hcName={handleChangeName} hcNumber={handleChangeNumber}/>
            <h2>Numbers</h2>
            <div>
                <Rows value={filterShow}/>
            </div>
        </div>
    )
}


export default App