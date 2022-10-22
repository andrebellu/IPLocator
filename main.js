import "./style.css";

const btn = document.getElementById("get-location");
const btn_info = document.getElementById("info");

btn.onclick = async () => {
  fetch("https://ipapi.co/json/")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const { latitude, longitude, city, country_name } = data;
      const {ip} = data;
      var marker = L.marker([latitude, longitude]).bindPopup(`You're IP is ${ip} and you are in ${city}, ${country_name}; ${latitude}, ${longitude}`)

      var map = L.map("map").setView([latitude, longitude], 3);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      marker.addTo(map);
    });

  // scroll smoothly to the bottom of the page
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

btn_info.onclick = async () => {
  // make a popup that explains what the app does
alert("This app uses the ipapi.co API to get your location and display it on a map. It uses Leaflet to display the map and OpenStreetMap as the map tile layer. It also uses the Fetch API to make the request to the API. \n\nIf nothing happens, it's probably because you're using an adblocker. Try disabling it and refreshing the page.");
};
