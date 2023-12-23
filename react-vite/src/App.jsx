import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-white'>
      <div className='bg-gradient-to-t from-slate-700 to-slate-900 bg-no-repeat'>
        <Navbar/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
    </div>
  )
}

export default App
