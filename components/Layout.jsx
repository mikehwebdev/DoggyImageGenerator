import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Home(){
    return (
        <div className="container">
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}