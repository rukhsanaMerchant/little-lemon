import './App.css';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import Contact from './Contact';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/home">Homepage</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>

  );
}

export default App;
