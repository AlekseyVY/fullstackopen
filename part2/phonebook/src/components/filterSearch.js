

const FilterSearch = (showAll, persons, findName) => {

    return (
        showAll ? persons : persons.filter(p => p.name.toLowerCase().includes(findName.toLowerCase()))
    )

}

export default {FilterSearch}