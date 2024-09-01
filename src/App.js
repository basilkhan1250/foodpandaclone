// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Web from './components/Web.jsx';
import New from './components/New.jsx'
import Cities from './components/Cities.jsx';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Web></Web>
      <New></New>
      <Cities></Cities>
    </div>
  );
}

export default App;
