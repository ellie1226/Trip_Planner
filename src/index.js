import mapboxgl, { MercatorCoordinate } from "mapbox-gl";
//marker function
import newMarker from "./marker";



mapboxgl.accessToken = "pk.eyJ1IjoibG5rd2FuIiwiYSI6ImNrZHlvcjZveTBkcDgycmswMjZ2cDF5Z28ifQ.vMcNCaL1mNybQ0K-QsqFYg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


const markerDomEl = document.createElement("div"); // Create a new, detached DIV
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago


// const marker = newMarker("hotel", [-74.009, 40.705]);
// marker.addTo(map);

// const marker = newMarker("restaurant", [-74.009, 40.705]);
// marker.addTo(map);

const marker = newMarker("activities", [-74.009, 40.705]);
marker.addTo(map);