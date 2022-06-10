import './App.css';
import 'tachyons';
import Navigation from './components/Navigation ';
import Cover from './components/Cover';
import Menu from './components/Menu';
import Services from './components/Services';
import Footer from './components/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faCartPlus, faBell } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className='plb'>
        <div className='flex '>
          <div className='pin flex'>
            <FontAwesomeIcon className='white' icon={faMapMarker} size="2x" />
          </div>
          <div className='location'>
              <h3>Location ZIP 100213 3rd St.</h3>
          </div>
        </div>
        <div className='flex'>
          <div className='bell'>
            <FontAwesomeIcon className='white' icon={faBell} size="2x" />
          </div>
          <div className='cart'>
            <FontAwesomeIcon className='white' icon={faCartPlus} size="2x" />
          </div>
        </div>
      </div>
      <Navigation />
      <Cover />
      <Menu />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
