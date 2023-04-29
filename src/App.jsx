
import Layout from "../components/Layout"
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom'

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"element={<Layout />}>
        
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
