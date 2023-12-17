import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className= "nav">
        <NavBar name= "Home" className= "home"/>
        <NavBar name= "About"/>
        <NavBar name= "Service"/>
        <NavBar name= "FAQ"/>
        <NavBar name= "Contact"/>
      </div>
      <div class ="section">
         <Body />
      </div>
      <div class ="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
