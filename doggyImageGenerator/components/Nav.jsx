import { NavLink } from "react-router-dom"

export default function Nav (){
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/faves">My Favourite Doggys</NavLink>
            <NavLink to="/findDoggys">Find Doggys</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/logout">Logout</NavLink>
        </>
    )
}