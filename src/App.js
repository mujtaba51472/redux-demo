import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import CakeContainer from "./components/CakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";

import { Provider } from 'react-redux';
import Test from './components/Test';
import NewCakeContaoiner from './components/NewCakeContaoiner';
import ItemContainer from './components/ItemContainer';
import UserConatiner from './components/UserConatiner';



function App() {
  return (
    <Provider store = {store}>
    <div className="App">
    <UserConatiner/>
     <ItemContainer/>
     <ItemContainer cake/>

    <CakeContainer/>
     <IceCreamContainer/>


    <Test/>
   <NewCakeContaoiner/>
    </div> 
    </Provider>
  );
}

export default App;
