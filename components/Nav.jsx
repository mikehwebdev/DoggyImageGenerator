import { NavLink } from "react-router-dom"


export default function Nav (){
    return (
        <nav className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/faves">My Favourite Doggys</NavLink>
            <NavLink to="/findDoggys">Random Doggy</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </nav>
    )
}