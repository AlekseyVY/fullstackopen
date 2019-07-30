import React from 'react'
import Weather from "./weather";




const SearchFilter = ({sFBN, fBN, cnt}) => {
    //event handler for filter input field
    const handleFind = (event) => {
        sFBN(event.target.value)
    }
    //counts occurances of input in countries
    let counter = 0
    cnt.map((x) => {
        if(x.name.toLowerCase().includes(fBN.toLowerCase())) {
            counter++
        }
    })
    //if occurances are more than 10 it shows help to user
    const helper = () => {
        if (counter > 10 && fBN.length > 0) {
            return (
                <h3>Too many matches, specify another filter</h3>
            )
        }
    }
    let countryName = ''
    //renders filtered results
    const rows = cnt.map((x) => {
        if(x.name.toLowerCase().includes(fBN.toLowerCase()) && fBN.length > 0 && counter < 10) {
            if (counter === 1) {
                countryName = x.capital
                return (
                    [
                        <div>
                            <h1>{x.name}</h1>
                            <h3>Capital: {x.capital}</h3>
                            <h4>Population: {x.population}</h4>
                            <h4>Languages: {
                                x.languages.map((a) => <li key={a.name}>{a.name}</li>)
                            }</h4>
                            <img src={x.flag} width={300} alt={x.name}/>
                        </div>
                    ]
                )
            } else {
                return (
                    <li key={x.name}>{x.name}</li>
                )
            }
        }
    })

    return (
        <div>
            find: <input onChange={handleFind}/>
            {helper()}
            {rows}
            {<Weather cntName={countryName}/>}
        </div>
    )
}



export default SearchFilter