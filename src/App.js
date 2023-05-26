import './App.css';
import { Routes, Route} from 'react-router-dom'
import Home from './Componantes/Pages/Home'
import Cart from './Componantes/Pages/Cart'
import NavBar from './Componantes/NavBar/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
 
  return (
    <>
     
    <Provider store = { store }>
     <NavBar />
      <Routes>
        <Route path = '/' element={<Home />}></Route>
        <Route path = '/cart' element={<Cart />}></Route>
      </Routes>
      </Provider>
   
     
    
    
    </>
    
  );
}

export default App;
