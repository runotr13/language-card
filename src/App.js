
import './App.css';
import Card from './components/card/Card';
import {categories} from "./helper/data";
import react from './assets/react.svg'
function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img src={react} alt="logo" className="card-image"/>
        </div>
        <Card veri={categories}/>
        
    </div>
  );
}

export default App;



