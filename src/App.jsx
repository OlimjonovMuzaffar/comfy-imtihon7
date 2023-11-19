
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import SinglePage from './Pages/SinglePage'
import Cart from './Pages/Cart'
import Login from './Pages/Login'

function App() {


  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/single",
      element: <SinglePage />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);

  return (
    <div className='dark:bg-[#272935]'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App