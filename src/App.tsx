import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
// import Works from './pages/Works'
// import Resume from './pages/Resume'
// import About from './pages/About'
// import Navbar from './components/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
