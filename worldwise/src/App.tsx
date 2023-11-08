import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/app" element={<AppLayout></AppLayout>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/Pricing" element={<Pricing></Pricing>} />
          <Route path="/Products" element={<Product></Product>} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
