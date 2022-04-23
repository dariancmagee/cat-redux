import './App.css';
import AddCat from './components/AddCat';
import CatList from './components/CatList';

function App() {
  return (
    <div className="App">
        <h1>Cat Bird Seat</h1>
        <AddCat />
        <CatList />
    </div>
  );
}

export default App;
