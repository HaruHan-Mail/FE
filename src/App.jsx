import PWABadge from './PWABadge.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <PWABadge />
    </>
  )
}



export default App
