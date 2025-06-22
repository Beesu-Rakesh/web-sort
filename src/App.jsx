import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Footer from './components/Footer';
import Services from './pages/Services';
import Projects from './pages/Projects';
import { Routes,Route,Navigate,Router } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Hero></Hero>}></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/projects" element={<Projects></Projects>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App;