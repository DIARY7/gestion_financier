import { createBrowserRouter, NavLink , Outlet, RouterProvider } from 'react-router-dom'
import "./assets/bootstrap/css/bootstrap.min.css"
import Bilan from './pages/Bilan'
import EtatFinancier from './pages/EtatFinancier';
import Home from './pages/Home';
import "./App.css"
import "./index.css"
import InsertionEcriture from './pages/InsertionEcriture';
import {Scale, NotebookPen, BrainCircuit, Shirt} from 'lucide-react';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:'bilan',
        element:<Bilan />
      },
      {
        path:'insertion-ecriture',
        element:<InsertionEcriture />
      },
      {
        path:'etat_financier',
        element:<EtatFinancier />
      }
    ]
  }
]);

// function Root() {
//     return <>
//       <header>
//         <nav>
//           <NavLink to="/" > HOME </NavLink>
//           <NavLink to="/bilan">BILAN</NavLink>
//           <NavLink to="/etat_financier" >ETAT-FINANCIER</NavLink>
//         </nav>
//       </header>
//       <div className="container my-4">
//           <Outlet />
//       </div>
//     </>
// }
function Root(){
  return <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px" ,overflow: "auto"}}  id="sideBar"  >
        <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
          <Shirt className="text-red-500"/>
          <span className="text-left"> IT-SHIRT </span>
        </NavLink>
        <hr/>
        <ul className="nav nav-pills flex-column ">
          <li>
            <NavLink to="/bilan" className="nav-link text-white flex">
              {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg> */}
              <div className="d-flex align-items-center">
                <Scale className="me-2" size={16} />
                <span>BILAN</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/insertion-ecriture" className="nav-link text-white">
              {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg> */}
              <div className="d-flex align-items-center">
                <NotebookPen className="me-2" size={16} />
                <span>NOUVELLE ECRITURE</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/etat_financier" className="nav-link text-white">
              {/* <svg className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2"/></svg> */}
              <div className="d-flex align-items-center">
                <BrainCircuit className="me-2" size={16} />
                <span>ETAT FINANCIER</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="droite">
        <div className="container">
          <Outlet/>
        </div>
    </div>
  </>
}


function App() {
  return <RouterProvider router={router} />
}


export default App
