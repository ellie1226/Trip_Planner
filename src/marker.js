import mapboxgl from "mapbox-gl";

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};


const newMarker = function(type, coordinates) {
    if(type === "hotel") {
        const hotelMarker = document.createElement("div"); // Create a new, detached DIV
        hotelMarker.style.width = "32px";
        hotelMarker.style.height = "39px";
        hotelMarker.style.backgroundImage = `url(${iconURLs.hotels})`;
        return new mapboxgl.Marker(hotelMarker).setLngLat(coordinates);
    }
    if(type === "restaurant") {
        const restaurantMarker = document.createElement("div"); // Create a new, detached DIV
        restaurantMarker.style.width = "32px";
        restaurantMarker.style.height = "39px";
        restaurantMarker.style.backgroundImage = `url(${iconURLs.restaurants})`;
        return new mapboxgl.Marker(restaurantMarker).setLngLat(coordinates);
    }
    if(type === "activities") {
        const activitiesMarker = document.createElement("div"); // Create a new, detached DIV
        activitiesMarker.style.width = "32px";
        activitiesMarker.style.height = "39px";
        activitiesMarker.style.backgroundImage = `url(${iconURLs.activities})`;
        return new mapboxgl.Marker(activitiesMarker).setLngLat(coordinates);
    }
}

export default newMarker;

