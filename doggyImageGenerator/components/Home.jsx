import { Outlet } from "react-router-dom"
import Header from "./Header"

export default function Home(){
    return (
        <>
        <h1>Home</h1>
            <Header/>
            <Outlet/>
        </>
    )
}