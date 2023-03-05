import logo from './logo.svg';
import './App.css';
import Country from "./components/country"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mypage from './components/state';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
  
    <Routes>
 <Route path="/" element={<Country/>} />
 <Route path="/mypage" element={<Mypage />} />
   </Routes>

 </BrowserRouter>
  );
}

export default App;
