import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, About, Contact, User, Github } from './components/index.js'
import './index.css'
import App from './App.jsx'
import { githubInfoLoader } from './components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])


// both works same, just different approaches.
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App />} >
        <Route path='' element={<Home /> }/>
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:id' element={<User />} />
        <Route
          loader={githubInfoLoader}
          path='github' 
          element={<Github/>} />
      </Route>
    )
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
