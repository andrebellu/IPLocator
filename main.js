import "./style.css";

const btn = document.getElementById("get-location");

btn.onclick = async () => {
  // https://api.ipify.org?format=json
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
