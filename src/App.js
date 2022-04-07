import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

import { Provider } from 'react-redux';
import Test from './components/Test';



function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <CakeContainer/>
    <IceCreamContainer/>
    <Test/>
    </div> 
    </Provider>
  );
}

export default App;
