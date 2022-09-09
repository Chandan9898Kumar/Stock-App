import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import FunctionData from './Functional/DataWithFunction';
import ClassData from './ClassComponent/StockDataClass'
function App() {
  return (
    <div className="App">
      <h2>Stock Data</h2><br />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/function' element={<FunctionData />} />
          <Route exact path='/class' element={<ClassData />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
