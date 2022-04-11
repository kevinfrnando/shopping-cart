import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PaymentForm from './pages/PaymentForm';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter>
      {/* <NavPage ></NavPage> */}
      <Routes>
        <Route path="/" exact element={ <Home/>}/>
        <Route path="/payment" exact element={ <PaymentForm/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
