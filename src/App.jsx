
import Home from "../components/Home"
import Faves from "../components/Faves"
import RandomDoggys, {loader as findDogsLoader} from "../components/RandomDoggys"
import Login from "../components/Login"
import SearchDoggyBreed, {loader as searchDogsLoader} from "../components/SearchDoggyBreed"
import Layout from "../components/Layout"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'
import Error from "../components/Error"

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"element={<Layout />} >
        <Route path="/" element={<Home/>} index/>
        <Route path="faves" element={<Faves/>} />
        <Route path="findDoggys" element={<RandomDoggys/>} loader={findDogsLoader} errorElement={<Error/>} />
        <Route path="searchDoggyBreed" element={<SearchDoggyBreed/>} loader={searchDogsLoader} errorElement={<Error/>} />
        <Route path="login" element={<Login/>} />
        <Route path="logout"  />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
