import { useEffect, useState } from "react"

export default function FindDoggys(){

    const [dog, setDog] = useState(null)
    const [dogImg, setDogImg] = useState(null)

const apiKey = "live_WweAo43pwkMtoF3ISELRYPv74ykUKyy47UuQobz1bSdQOWrUVbfmIGzrnF6xd1GW "
    useEffect(()=>{
        fetch(`https://api.thedogapi.com/v1/images/search?size=full&${apiKey}`, {
            headers:{
                "x-api-key": "live_WweAo43pwkMtoF3ISELRYPv74ykUKyy47UuQobz1bSdQOWrUVbfmIGzrnF6xd1GW"
            }
        })
        .then(res => res.json())
        .then(data => 
            {
            const dog = data[0].breeds[0]
            const dogImg = data[0].url
            setDog(dog)
            setDogImg(dogImg)
            })
    },[] )

    //console.log(dog[0].breeds[0].name)
    console.log(dog)
   return (
    
       dog && <div>
       <h2>Breed: {dog.name}</h2>
       <img src={dogImg} width="400px"/>
       <p>Height: {dog.height.imperial} inches</p>
       <p>Weight: {dog.weight.imperial} lbs</p>
       <p>Bred for: {dog.bred_for}</p>
       </div>
       
    
   )
}