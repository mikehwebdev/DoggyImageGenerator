/* eslint-disable react-refresh/only-export-components */
import {Link, useLoaderData} from "react-router-dom"
import {getRandomDogs} from "./Api"

export function loader(){
    return getRandomDogs()
}

export default function RandomDoggys(){
    const dog = useLoaderData()

   return (
       <section>
        <img src={dog.url} height="400px"/>
        <h2>Breed: {dog.name}</h2>
        <p>Height: {dog.height.imperial? `${dog.height.imperial} inches` : `${dog.height.metric} cm` } </p>
        <p>Weight: {dog.weight.imperial? `${dog.weight.imperial} lbs` : `${dog.weight.metric} kg` }</p>
        <p>Bred for: {dog.bred_for}</p>
        <Link to="/findDoggys" >Show me another doggy</Link>
       </section>
   )
}