
import './App.css';
import {Provider} from 'react-redux'
import Counter from './Componantes/CounterApp/Counter';
import store from './Redux/store';


function App() {
 
  return (
    <>
     <Provider store={store}>
     <header className="App-header">
     <Counter />
     
     </header>
      </Provider>
    </>
    
  );
}

export default App;
