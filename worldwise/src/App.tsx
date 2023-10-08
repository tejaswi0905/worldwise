import { BrowserRouter, Routes, Route } from "react-router-dom";

import Products from "./pages/Products";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} />
          <Route path='products' element={<Products></Products>} />
          <Route path='pricing' element={<Pricing></Pricing>} />
          <Route path='*' element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
