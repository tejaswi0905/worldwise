import { useSearchParams, useNavigate } from "react-router-dom";

import styles from "./Map.module.css";

function Map(): JSX.Element {
  const navigate = useNavigate();
  const [searchParms, setSearchParms] = useSearchParams();
  const lat = searchParms.get("lat");
  const lng = searchParms.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>

      {lat != null && lng != null ? (
        <h1>
          Position: {lat}, {lng}
        </h1>
      ) : null}
    </div>
  );
}

export default Map;
