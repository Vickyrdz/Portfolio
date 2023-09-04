import './App.css'
import Home from './components/Home/Home'
import NavBar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='flex flex-col'>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
