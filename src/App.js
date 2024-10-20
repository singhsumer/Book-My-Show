import './App.css';
import Home from './pages/Home';
import BsState from './context/BsState';
// import BsContext from './context/BsContext';

function App() {
  return (
    <div className="App">
          <BsState>
            <Home />
            </BsState>
    
    </div>
  );
}

export default App;
