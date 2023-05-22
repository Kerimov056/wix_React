import './App.css';
import Home from './companent/home/Home';
import Navbar from './companent/navbar/Navbar';
import Services,{Number} from './companent/services/Services';
import About from './companent/About/About';
import Testimon from './companent/testimonials/Testimon';
import Clients from './companent/clients/Clients';
import Contact from './companent/contact/Contact';
import GoogleMap from './companent/googleMap/GoogleMap';
import Footer from './companent/footer/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services/>
      <Number/>
      <About/>
      <Testimon/>
      <Clients/>
      <Contact/>
      <GoogleMap/>
      <Footer/>
    </>
  );
}

export default App;



// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
