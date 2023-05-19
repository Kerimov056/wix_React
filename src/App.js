import './App.css';
import Home from './companent/home/Home';
import Navbar from './companent/navbar/Navbar';
import Services from './companent/services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services/>
    </>
  );
}

export default App;



// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
