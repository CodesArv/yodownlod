
import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Use from './Use';
import Howtouse from './Howtouse';
import Navigation from './Navigation';


function App() {
  return (
    <div className="App">
    <Navigation/>
      <Header/>
      <Howtouse/>
      <Use/>

  
    </div>
  );
}

export default App;
