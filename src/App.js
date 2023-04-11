import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/Landing/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Hola bienvenidos"/>
    </div>
  );
}

export default App;
