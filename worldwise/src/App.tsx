import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { RecoilRoot } from "recoil";

import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Form from "./components/Form";

import FetchCities from "./cityServices/FetchCities";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <FetchCities></FetchCities>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/app" element={<AppLayout></AppLayout>}>
            <Route
              index
              element={<Navigate replace to="cities"></Navigate>}
            ></Route>
            <Route path="cities" element={<CityList></CityList>}></Route>
            <Route path="cities/:id" element={<City></City>}></Route>
            <Route
              path="countries"
              element={<CountryList></CountryList>}
            ></Route>
            <Route path="form" element={<Form></Form>}></Route>
          </Route>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/Pricing" element={<Pricing></Pricing>} />
          <Route path="/Products" element={<Product></Product>} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
