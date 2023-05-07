import React from "react"
import {getDogList} from "./Api"
import {Link} from "react-router-dom"

const dogData = await getDogList()

export default function Search(){
    const [firstSearch, setFirstSearch] = React.useState(true)
    const [dogList, setDogList] = React.useState([])
    //ive had to minus 1 the dog id here as id and index position dont match
    function searchDogList (breedName) {
        const capitlisedBreedName = breedName.slice(0,1).toUpperCase() + breedName.slice(1, breedName.length)
        setDogList(dogData.filter(dog => dog.name.startsWith(capitlisedBreedName)).slice(0,5).map(dog => <Link key={dog.id} to={`/searchDoggyBreed?id=${dog.id -1}`} onClick={setFirstSearch(false)}>{dog.name}</Link>))
        
      
    }
    
    return (
        <section>
    <input type="text" placeholder={firstSearch? "Search here" : "Search for another doggy"} onChange={(e) => searchDogList(e.target.value)} />
    <div className="search-results-container">{dogList}</div>
        </section>
    )
}