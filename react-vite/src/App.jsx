import Navbar from './components/Navbar'
import './App.css'

function App() {

  return (
    <div className="text-lg text-red-900 text-center justify-start py-5 flex flex-row gap-5 px-0 w-full">
      <Navbar author="Ariyan" title="messeage"/>
      <Navbar author="you" title="messeage2"/>
    </div>
  )
}

export default App
