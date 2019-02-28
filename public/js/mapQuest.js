function initMap() {
	// add your code here
	L.mapquest.key = "rl1jvVyD7hA9O8WYGMQ6w0ckyrtomEVR";

	var map = L.mapquest.map('map', { 
		center: [32.88, -117.236],
		//layers: L.mapquest.titleLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addT0(map);
}