import './App.css';
import {Provider} from 'react-redux'

import ReduxTodo from './Componantes/Redux2/ReduxTodo'
import store from './Componantes/Redux2/store'


function App() {
 
  return (
    <>
     <Provider  store={store}>
     <header className="App-header">
   
    <ReduxTodo />
     
     </header>
      </Provider>
    </>
    
  );
}

export default App;
