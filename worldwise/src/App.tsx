import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import { cities } from "./store/atoms/cities";
import { isLoading } from "./store/atoms/isLoading";

import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
const BASE_URL: string = "http://localhost:3000";

function FetchCities(): JSX.Element {
  const setCities = useSetRecoilState(cities);
  const setIsLoading = useSetRecoilState(isLoading);

  async function fetchCities() {
    try {
      setIsLoading(true);

      const res = await fetch(`${BASE_URL}/cities`);
      const data = await res.json();

      setCities(data);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchCities();
  }, []);

  console.log(useRecoilValue(isLoading));

  return <></>;
}

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <FetchCities></FetchCities>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/app" element={<AppLayout></AppLayout>}>
            <Route index element={<CityList></CityList>}></Route>
            <Route path="cities" element={<CityList></CityList>}></Route>
            <Route path="cities/:id" element={<City></City>}></Route>
            <Route
              path="countries"
              element={<CountryList></CountryList>}
            ></Route>
            <Route path="form" element={<p>Form will come here</p>}></Route>
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
