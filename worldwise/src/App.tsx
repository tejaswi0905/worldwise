import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import { cities } from "./store/atoms/cities";
import { isLoading } from "./store/atoms/isLoading";
import { CityData } from "./types.ts/CityTypes";

import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
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

  console.log(useRecoilValue(cities));

  useEffect(() => {
    fetchCities();
  }, []);

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
            <Route index element={<p>List of cities will come here</p>}></Route>
            <Route
              path="cities"
              element={<p>List of cities will come here</p>}
            ></Route>
            <Route
              path="countries"
              element={<p>A list of countries will come here </p>}
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
