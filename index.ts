/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


let map: google.maps.Map;


const mapStyling = [
  {
    featureType: "poi.business",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.business",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.school",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.school",
    elementType: "labels.icon",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.icon",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.government",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.government",
    elementType: "labels.icon",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.medical",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "poi.medical",
    elementType: "labels.icon",
    stylers: [{ visibility: "on" }],
  },
  
];


async function initMap(): Promise<void> {

  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  
  const bayAreaBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(37.8541, -122.2785), // Southwest corner
    new google.maps.LatLng(37.8846, -122.231817)  // Northeast corner
  );
  
  
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 37.8720, lng: -122.2595 },
    zoom:15,
    restriction: {
      latLngBounds: bayAreaBounds,
      strictBounds: true
    },
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    },
    styles: mapStyling,
  });

  const berkeley: google.maps.LatLngLiteral = { lat: 37.8720, lng: -122.2595 };
  
function createCenterControl(map) {
  const controlButton = document.createElement('button');

  // Set CSS for the control.
  controlButton.style.backgroundColor = '#fff';
  controlButton.style.border = '2px solid #fff';
  controlButton.style.borderRadius = '3px';
  controlButton.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlButton.style.color = 'rgb(25,25,25)';
  controlButton.style.cursor = 'pointer';
  controlButton.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlButton.style.fontSize = '16px';
  controlButton.style.lineHeight = '38px';
  controlButton.style.margin = '8px 0 22px';


  // controlButton.style.marginTop = '700px';

  controlButton.style.padding = '0 5px';
  controlButton.style.textAlign = 'center';

  controlButton.textContent = 'Center Map to Campus';
  controlButton.title = 'Click to recenter the map';
  controlButton.type = 'button';

  controlButton.addEventListener('click', () => {
    map.setCenter(berkeley);
  });

  return controlButton;
}


  // Create the DIV to hold the control.
  const centerControlDiv = document.createElement('div');
  // Create the control.
  const centerControl = createCenterControl(map);
  // Append the control to the DIV.
  centerControlDiv.appendChild(centerControl);

  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);


  // Create and add multiple markers in a loop
  const stationMarkerData = [
    // { coord },
    { lat: 37.87022691, lng: -122.2620718, title: "Frank Schlessinger Way Blue Light" },
    { lat: 37.8725741, lng: -122.2649495, title: "Li Ka Shing Blue Street Light Back" },
    { lat: 37.8726264828075, lng: -122.26547418825, title: "Li Ka Shing Blue Street Light Front" },
    { lat: 37.87350262, lng: -122.257392829701, title: "Evans Hall Blue Light"},
    { lat: 37.8736091, lng: -122.255941239326, title: "University Dr Blue Light" },
    { lat: 37.87414331568, lng: -122.256761980576, title: "Donner Lab Blue Light" },
    { lat: 37.8707578668163, lng: -122.263130018665, title: "Campanile Way Blue Light" },
    { lat: 37.8738965080177, lng: -122.261185422672, title: "Haviland Hall Blue Light" },
    { lat: 37.8712115671769, lng: -122.257007412694, title: "Morrison Hall Blue Light" },
    { lat: 37.8718675639867, lng: -122.257333025121, title: "100 South Dr Blue Light" },
    { lat: 37.870843244931, lng: -122.253532120054, title: "Boalt Hall School of Law Parking Blue Light" },
    { lat: 37.8696702, lng: -122.2549765, title: "North Field Blue Light" },
    { lat: 37.8698842104674, lng: -122.257530613784, title: "South Hall Rd Blue Light" },
    { lat: 37.8708037440816, lng: -122.26532438518, title: "Crescent Lawn Blue Light" },
    { lat: 37.8757863, lng: -122.2592305, title: "Soda Hall Blue Light" },
    { lat: 37.8753682444323, lng: -122.258177036861, title: "2600 Hearst Ave Blue Light" },
    { lat: 37.8688206326285, lng: -122.259886936391, title: "MLK Building Blue Light" },
    { lat: 37.8760131093726, lng: -122.256440284729, title: "Foothill Student Housing Blue Light 1" },
    { lat: 37.8766022427145, lng: -122.256135178904, title: "Foothill Student Housing Blue Light 2" },
    { lat: 37.8758689029305, lng: -122.257093112682, title: "Upper Parking Structure Blue Light" },
    { lat: 37.8734157253284, lng: -122.260505907456, title: "East Asian Libary Blue Light" },
    { lat: 37.86417424736154, lng: -122.24912641342158, title: "Clark Kerr Blue Light"},
    { lat:37.86717200903644, lng:-122.2563850792815, title: "Crossroads Blue Light 1"},
    { lat:37.86648046270518, lng:-122.2557879431738, title: "Crossroads Blue Light 2"},
    { lat:37.86639291585703, lng:-122.25630375123609, title: "Casa Bonita Blue Light"},
    { lat:37.86720070837783, lng:-122.25736023751256, title: "Channing-Bowditch Apartments Blue Light"},
    { lat:37.86703300884144, lng:-122.25738528236063, title: "Martinez Commons Blue Light"},
    { lat: 37.87020572, lng: -122.2594291, title: "Sathers Blue Light" }
  ];


  const telephoneMarkerData = [
    { lat: 37.86650050646096, lng: -122.24331452858542, title: "Panoramic Place Emergenecy Telephone"},
    { lat: 37.86526687866486, lng: -122.24973795705819, title: "Clark Kerr Northwest Parking Lot Emergency Telephone"},
    { lat: 37.863204216714784, lng: -122.24975913201148, title: "Clark Kerr Southwest Parking Lot Emergency Telephone"},
    { lat: 37.86753125295874, lng: -122.264630046999, title: "Tang Center Parking Lot Emergency Telephone"},
    { lat: 37.86577314173154, lng: -122.2669731098094, title: "Manville Hall Emergency Telephone"},
    { lat:37.86782967627295, lng:-122.25492783439715, title: "Unit 1 Emergency Telephone 1"},
    { lat:37.867927362998266, lng:-122.25551948360884, title: "Unit 1 Emergency Telephone 2"},
    { lat:37.867872688826616, lng:-122.255710225292, title: "Unit 1 Emergency Telephone 2"},
    { lat:37.866211236908235, lng:-122.25462107291219, title: "Unit 2 Emergency Telephone 1"},
  { lat:37.86602777322526, lng:-122.25440688950806, title: "Unit 2 Emergency Telephone 2"},
  ]

  const policeMarkerData = [
    // { coord },
    { lat: 37.86924194730867, lng: -122.25863946011555, title: "UC Police Department" },
    { lat: 37.87025582866991, lng: -122.27312636787676, title: "Berkeley Police Department" }
  ];

  const medicalMarkerData = [
    { lat: 37.86764135880804, lng: -122.26428672425573, title: "Tang Center" },
  ]

  // marks all blue lights
  for (const data of stationMarkerData) {
    addMarker(data.lat, data.lng, data.title, 'assets/img/blue station icon.png');
  }

  // marks all emergency telephones
  for (const data of telephoneMarkerData) {
    addSmallerMarker(data.lat, data.lng, data.title, 'assets/img/emergency-phone.png');
  }

  // marks all police stations
  for (const data of policeMarkerData) {
    addMarker(data.lat, data.lng, data.title, 'assets/img/police hat.png');
  }

  // marks all medical places
  for (const data of medicalMarkerData) {
    addSmallerMarker(data.lat, data.lng, data.title, 'assets/img/hospital-icon.png');
  }

  // Example marker code, remove or comment out similar code
  function addMarker(lat, lng, title, imgpath) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,  // Adding the marker to the map
      title: title,
      icon: { url: imgpath, scaledSize: new google.maps.Size(55, 55) }
    });
  }

  function addSmallerMarker(lat, lng, title, imgpath) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,  // Adding the marker to the map
      title: title,
      icon: { url: imgpath, scaledSize: new google.maps.Size(35, 35) }
    });
  }
}


initMap();
export {};
