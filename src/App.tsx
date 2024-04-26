import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Works from './pages/Works'
import Resume from './pages/Resume'
import About from './pages/About'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <div>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/works"} element={<Works />} />
            <Route path={"/resume"} element={<Resume />} />
            <Route path={"/about"} element={<About />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  )
}
