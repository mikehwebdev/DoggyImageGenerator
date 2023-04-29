import {Link} from "react-router-dom"

export default function Home(){
    return (
        <>
        <h2>Home</h2>
            <p> Welcome to the Doggy Image generator!</p>
            <p>What would you like to do?</p>
            <Link to="/colours">Add some snazzy colours</Link>
            <Link to="/findDoggys">Find me some of those cute little doggys</Link>
        </>
    )
}