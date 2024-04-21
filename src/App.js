import './App.css';
import NavBar from './Components/TopBar.js'
import CarouselFade from './Components/Carousel.js';
import StoreListing from './Components/StoreListing.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CarouselFade />
      <StoreListing />
    </div>
  );
}

export default App;
