import React, {useState, useEffect} from "react";
import Rows from './components/rows'
import axios from 'axios'
import AddContact from "./components/addcontact";







const App =() => {
    const [persons, setPersons] = useState([])

    useEffect(() => axios.get('http://localhost:3001/persons')
        .then(response => {
            setPersons(response.data)
        }), [])

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
            <AddContact value={persons} nameState={newName}
                        numberState={newNumber} sPerson={setPersons} sName={setNewName}
                        sNumber={setNewNumber} hcName={handleChangeName} hcNumber={handleChangeNumber}/>
            <div>
                <Rows value={filterShow}/>
            </div>
        </div>
    )
}


export default App