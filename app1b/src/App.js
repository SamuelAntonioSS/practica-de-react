import logo from './logo.svg';
import './App.css';
import Alerta from './components/Alerta';
import Boton from './components/Boton';
import Acordeon from './components/Acordeon';

function App() {
  return (
    <>
        <h1>Hola mundo, mi primer app de react</h1>

      <Alerta/>
      <Boton 
    nombre={"Boton 1"}
    color={"rojo"}
    />
    <Boton 
    nombre={"Boton 2"}/>
    <br></br>

<Alerta/>
<Acordeon/>

    </>
  );
}

export default App;

