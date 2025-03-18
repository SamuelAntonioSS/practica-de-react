import logo from './logo.svg';
import './App.css';
import Alerta from './components/Alerta';
import Boton from './components/Boton';
import Acordeon from './components/Acordeon';
import Badges from './components/Badges';
import Carousel from './components/Carousel';
import ListGroup from './components/ListGroup';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';
import Scroll from './components/Scroll';
import Sppiners from './components/Sppiners';
import Toasts from './components/Toasts';
import Tooltips from './components/Tooltips';
import BotoonGroup from './components/BotoonGroup';
import CloseBution from './components/CloseButon';
import Collapse from './components/Collapse';
import Drop from './components/Drop';
import Offcanvas from './components/Offcanvas';
import Navbartabs from './components/Navbar&tabs';


function App() {
  return (
    <>
        <h1>Hola mundo, mi primer app de react</h1>
        <NavBar/>

      <Alerta/>
      <Boton 
    nombre={"Boton 1"}
    color={"rojo"}
    />
    <Boton 
    nombre={"Boton 2"}/>
    <br></br>
    <Badges/>
    

<Alerta/>
<Acordeon/>
<Carousel/>
<Badges/>
<Sppiners/>

<ListGroup/>
<Pagination/>
<Scroll/>
<Sppiners/>

<Toasts/>
<hr/>
<Tooltips/>
<hr/>
<BotoonGroup/>
<hr/>
<CloseBution/>
<Collapse/>
<Drop/>
<hr/>
<Offcanvas/>
<Navbartabs/>




    </>
  );
}

export default App;

