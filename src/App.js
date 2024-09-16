// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Web from './components/Web.jsx';
import New from './components/New.jsx'
import Cities from './components/Cities.jsx';
import QrSection from './components/QrSection.jsx';
import OfficeLunch from './components/OfficeLunch.jsx';
import Alltext from './components/AllText.jsx';

function App() {
  return (
    <div className='body'>
      <Navbar></Navbar>
      <Web></Web>
      <New></New>
      <Cities></Cities>
      <QrSection></QrSection>
      <OfficeLunch></OfficeLunch>
      <Alltext></Alltext>
    </div>
  );
}

export default App;
