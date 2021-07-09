import './css/section1.css'
import './css/header.css'
import './css/section2.css'
import './css/section3.css'
import './css/section4.css'
import './css/section5.css'
import './css/section6.css'
import './css/footer.css'
import './css/sticky-icon.css'
import './css/responsive.css'
import StickyIcon from './components/StickyIcon'
import Header from "./components/Header"
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// import './css/slick.css'
function App() {
  return (
    <div className="App">
      <StickyIcon/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>

    </div>
  );
}

export default App;
