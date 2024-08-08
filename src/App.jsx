
import './App.css'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import OurRecipe from './components/ourRecipe/OurRecipe'

function App() {

  return (
    <div className='w-11/12 mx-auto'>
      <Navbar></Navbar>
      <Hero></Hero>
      <OurRecipe></OurRecipe>
    </div>
  )
}

export default App
