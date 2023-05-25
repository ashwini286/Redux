import { configureStore} from '@reduxjs/toolkit';
import todoSlice from './Reduxstore'
 
const store = configureStore({
    reducer: {
    Todo: todoSlice,
    }
  });
  
  export default store;