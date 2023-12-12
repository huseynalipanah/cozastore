import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Page/HomePage/Home';
import Basket from './Page/BasketPage/Basket';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<MainLayout/>} >
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
