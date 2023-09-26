import './App.css'
import Home from './components/Home/Home'
import NavBar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/ContacMe/ContactMe'

function App() {

  return (
    <div className='xl:flex xl:flex-col'>
      <NavBar/>
      <Home/>
      <Projects/>
      <AboutMe/>
      <ContactMe/>
    </div>
  )
}

export default App
