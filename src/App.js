import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Cover from './components/cover/Cover';
import Aboutus from './components/about us/Aboutus';
import Careers from './components/careers/Careers';
import Footer from './components/footer/Footer';
import CarListings from './components/car-listings/CarListings';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Cover/>
      <Aboutus/>
      <Careers/>
       */}
      <CarListings/>
      <Footer/>
    </div>
  );
}

export default App;
