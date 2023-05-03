import {useRouteError} from "react-router-dom"

export default function Error (){
    const error = useRouteError()
console.log(error.message)
    return(
        <h2>Error: {error.message}</h2>
    )
}