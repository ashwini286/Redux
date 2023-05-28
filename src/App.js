import React from "react";
import { Provider } from "react-redux";
import store from './Componantes/Film/store'
import Film from './Componantes/Film/FIlm'

const App = () => (
  <Provider store={store}>
    <Film />
  </Provider>
);

export default App;
