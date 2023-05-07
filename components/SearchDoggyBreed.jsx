/* eslint-disable react-refresh/only-export-components */
import {getDoggyBreed } from "./Api"
import {useLoaderData,  useSearchParams, Link} from "react-router-dom"
import Search from "./Search"


export async function loader () {
    return await getDoggyBreed()
}   
    
export default function SearchDoggyBreed(){

    
    const [searchParams, setSearchParams] = useSearchParams()
    let id = searchParams.get("id")
    
    const data = useLoaderData()
    const dog = {...data[id],url:data[id].image.url}


    return (

    
    <section>
        <img src={dog.url} height="400px"/>
        <h2>Breed: {dog.name}</h2>
        <p>Height: {dog.height.imperial? `${dog.height.imperial} inches` : `${dog.height.metric} cm` } </p>
        <p>Weight: {dog.weight.imperial? `${dog.weight.imperial} lbs` : `${dog.weight.metric} kg` }</p>
        <p>Bred for: {dog.bred_for}</p>
        <Link to=".">˂Go back to find another doggy</Link>
        
    </section>

)
     
}