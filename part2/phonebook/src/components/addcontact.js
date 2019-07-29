import React from 'react'


const AddContact =({value, nameState, numberState,sPerson, sName, sNumber, hcName, hcNumber}) => {
    let find = 0;

    const haveContact = () => {
        value.map((p) => {
            if (p.name.toLowerCase() === nameState.toLowerCase()) {
                find = 1
            }
        })
    }

    const addPhone = (event) => {
        event.preventDefault()
        const newContact = {
            id: value.length + 1,
            name: nameState,
            number: numberState
        }
        haveContact()
        if (find === 1){
            window.alert(`${nameState} is already added to phonebook`)
        } else {
            sPerson(value.concat(newContact))
            sName('')
            sNumber('')
        }
    }

    return (
        <div>
            <h2>add a new</h2>
        <form onSubmit={addPhone}>
            <div>
                name: <input  value={nameState} onChange={hcName}/>
            </div>
            <div>
                number: <input value={numberState} onChange={hcNumber}/>
            </div>
            <div>
                <button type='submit'>add</button>
            </div>
        </form>
        </div>
    )

}


export  default  AddContact