import "./App.css";
import { Navbar } from "./Component/Navbar";
import { Home } from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import { Cart } from "./Component/Cart";
import ProductDetails from "./Component2/ProductDetails";

function App() {
  return (
   <div className="w-full h-full overflow-x-hidden">
      <div className="w-full h-full">
        <Navbar/>
        <div>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
             <Route path="/:id" element={<ProductDetails/>} /> 
          </Routes>
        </div>
      </div>
   </div>
  );
}

export default App;
