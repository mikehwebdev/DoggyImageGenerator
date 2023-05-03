import {getDoggyBreed } from "./Api"
import {useLoaderData} from "react-router-dom"

export function loader () {
    return getDoggyBreed(1)
    }   

    
export default function SearchDoggyBreed(){
    console.log(useLoaderData())
    const dog = useLoaderData()
    return (
            


    <div>
     <img src={dog.url? dog.url : "noimage"} height="400px"/>
     <h2>Breed: {dog.name}</h2>
     <p>Height: {dog.height.imperial? `${dog.height.imperial} inches` : `${dog.height.metric} cm` } </p>
     <p>Weight: {dog.weight.imperial? `${dog.weight.imperial} lbs` : `${dog.weight.metric} kg` }</p>
     <p>Bred for: {dog.bred_for}</p>
     
    </div>
)
     
}