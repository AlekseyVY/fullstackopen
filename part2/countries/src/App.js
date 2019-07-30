import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchFilter from "./components/searchFilter";
import Weather from "./components/weather";



const App = () => {
    const [countries, setCountries] = useState([])
    const [findByName, setFindByName] = useState('')
    //function for fetching data from RESTful API by using axios library
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all').then(respond => {
           setCountries(respond.data)
        })
    }, [])

    return (
        <div>
            <h1>Countries:</h1>
            <SearchFilter sFBN={setFindByName} cnt={countries}
                          fBN={findByName}/>
        </div>
    )

}


export default App