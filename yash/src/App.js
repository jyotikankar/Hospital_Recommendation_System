import './App.css';
import Navbar from './component/Navbar.jsx';
import Dropdown from './component/Dropdown.jsx';
import Footer from './component/Footer.jsx';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="neak">
        <nav>
          <ul>
            <li><a href="/about">Recommend Me</a></li>
            <li><a href="/about">Compare Hospitals</a></li>
            <li><a href="/about">Top Hospitals</a></li>
            <li><a href="/about">Reviews</a></li>
          </ul>
        </nav>
      </div>
      <Dropdown/>
      <Footer />
    </div>
  );
}

export default App;
