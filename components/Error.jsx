import {useRouteError} from "react-router-dom"

export default function Error (){
    const error = useRouteError()

    return(
        <h2>Error: {error.message}</h2>
    )
}