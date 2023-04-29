
import Home from "../components/Home"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"element={<Home />}>
        
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
