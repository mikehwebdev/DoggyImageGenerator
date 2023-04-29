
import Home from "../components/Home"
import Faves from "../components/Faves"
import Colours from "../components/Colours"
import FindDoggys from "../components/FindDoggys"
import Login from "../components/Login"
import Layout from "../components/Layout"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/faves" element={<Faves/>} />
        <Route path="/colours" element={<Colours/>} />
        <Route path="findDoggys" element={<FindDoggys/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/logout"  />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
