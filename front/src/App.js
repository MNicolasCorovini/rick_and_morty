import { useEffect, useState } from 'react';
import './App.less';
import Cards from './Components/Cards/Cards';
import Nav from './Components/Nav/Nav';
import { Routes , Route, useLocation, useNavigate } from 'react-router-dom';
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Form from './Components/Form/Form';
import Favorites from './Components/Favorites/Favorites';

function App() {

  const URL_BASE = "http://localhost:3001/rickandmorty";
  // const URL_BASE = "https://be-a-rym.up.railway.app/api";
  // const KEY = "46740eb499eb.794e3e4901c71a0f3e91";

  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  //! Credenciales falsas
  const user = 'marce@mail.com';
  const pass = 'Marcelo1';

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  }

  const onSearch = (id) => {
    fetch(`${URL_BASE}/onsearch/${id}`)
    .then((res) => res.json())
    .then(data => {
      if (data.name) setCharacters((oldChar) => [...oldChar, data])
      else window.alert('No hay personajes con ese ID');
    })
  };

  const onAdd = () => {
    const randomId = Math.round(Math.random() * (826 - 1) + 1);
    const exist = false;

    if (characters.forEach((char) => char.id === randomId)) exist = true;

    if(!exist){
      fetch(`${URL_BASE}/character/${randomId}`)
      .then((res) => res.json())
      .then(data => {
        setCharacters((oldChar) => [...oldChar, data]);
      })
    }else window.alert('La carta q se intento agregar ya existia')
    
  };

  const login = ({email, password}) => {
    console.log(email);
    if (email === user && password === pass) {
      setAccess(true);
      navigate("/home");
    }else alert('Credenciales invalidas');
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onAdd  = {onAdd} onSearch = {onSearch} />}

      <Routes>
        <Route path='/' element={<Form login = {login} />} />
        <Route path='/home' element={ 
          <Cards characters = {characters} onClose = {onClose} /> 
        }/>
        <Route path='/favorites' element={<Favorites />}/>
        <Route path='/about' element= { <About /> }/>
        <Route path='/detail/:detailID' element= { <Detail /> }/>
      </Routes>
      {/* <Cards characters = {characters} onClose = {onClose} /> */}
    </div>
  );
}

export default App;
