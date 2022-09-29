import './App.css';
import Routing from './routing.component';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/featurs/Header/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
