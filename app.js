document.addEventListener("DOMContentLoaded", function () {
    // Bounding box for East Java, Indonesia
    const eastJavaBoundingBox = [
        [-8.7993, 111.5057], // South West coordinates
        [-5.4944, 114.4970]  // North East coordinates
    ];

    // Initialize the map
    const map = L.map("map", {
        maxBounds: eastJavaBoundingBox,
        maxBoundsViscosity: 1.0
    }).fitBounds(eastJavaBoundingBox);

    // Add the OpenStreetMap layer
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Marker for a specific location in East Java (You can customize the coordinates)
    const markerCoordinates = [-7.5361, 112.7126];
    const marker = L.marker(markerCoordinates).addTo(map)
        .bindPopup("<b>East Java, Indonesia</b>")
        .openPopup();

    // Additional tooltip
    const tooltip = L.tooltip({
        permanent: true,
        direction: 'right',
        className: 'custom-tooltip'
    })
    .setContent('Welcome to East Java!')
    .setLatLng(markerCoordinates)
    .addTo(map);

    // Function to fly to East Java
    window.flyToEastJava = function () {
        map.flyToBounds(eastJavaBoundingBox);
    };
});
