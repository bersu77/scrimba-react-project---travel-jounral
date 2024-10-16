import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './Data';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const card = Data.map((destination) =>{
    return(
      <Card
      key ={destination.key}
        destination ={destination}
      />
    )
   
  }


  )
  return (
    <div className="App">
      <Navbar/>
      <section>
    {card}
    
      </section>
    <Footer/>
    </div>
  );
}

export default App;
