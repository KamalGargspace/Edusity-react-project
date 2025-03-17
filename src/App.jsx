import React,{useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Program from './components/Program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Vedioplayer from './components/Vedioplayer/Vedioplayer'

const App = () => {

   const [playstate,setplaystate] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="container">
        <Title subtitle='Our Programs' title='What We Offer'/>
        <Program/>
        <About setplaystate={setplaystate}/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='Testimonials' title='What Student Says'/>
        <Testimonials/>
        <Title subtitle='contact us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <Vedioplayer playstate={playstate} setplaystate={setplaystate}/>
      
    </div>
  )
}

export default App
