const apiKey = "live_WweAo43pwkMtoF3ISELRYPv74ykUKyy47UuQobz1bSdQOWrUVbfmIGzrnF6xd1GW "
const headers = {
    headers:{
        "x-api-key": "live_WweAo43pwkMtoF3ISELRYPv74ykUKyy47UuQobz1bSdQOWrUVbfmIGzrnF6xd1GW",
        "Content-Type": "application/json"
    }
}

export async function getRandomDogs(){
        
        const url = `https://api.thedogapi.com/v1/images/search?size=full&has_breeds=1&${apiKey}`
            const response = await fetch(url, headers)
            const data = await response.json()
            
            const dogData = {...data[0].breeds[0],url:data[0].url}
            return dogData
}

export async function getDoggyBreed(id){
//figure out how to search by breed

    const url = `https://api.thedogapi.com/v1/breeds/`
    const response = await fetch(url, headers)
    const data = await response.json()
    const dogData = {...data[id],url:data[id].image.url}
   console.log (dogData)
   return dogData
}