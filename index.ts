/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


let map: google.maps.Map;


<<<<<<< HEAD
=======

class CenterControl {
  private map_: google.maps.Map;
  private center_: google.maps.LatLng;
  constructor(
    controlDiv: HTMLElement,
    map: google.maps.Map,
    center: google.maps.LatLngLiteral
  ) {
    this.map_ = map;
    // Set the center property upon construction
    this.center_ = new google.maps.LatLng(center);
    controlDiv.style.clear = "both";

    // Set CSS for the control border
    const goCenterUI = document.createElement("button");

    goCenterUI.id = "goCenterUI";
    goCenterUI.title = "Click to recenter the map";
    controlDiv.appendChild(goCenterUI);

    // Set CSS for the control interior
    const goCenterText = document.createElement("div");

    goCenterText.id = "goCenterText";
    goCenterText.innerHTML = "Center Map to Campus";
    goCenterUI.appendChild(goCenterText);


    goCenterUI.addEventListener("click", () => {
      const currentCenter = this.center_;

      this.map_.setCenter(currentCenter);
    });
  }
}





>>>>>>> a3faac8b247a6fed364b9fa8768e3c43240ce2f7
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
<<<<<<< HEAD
    mapTypeControl: false,
    fullscreenControl: false,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    }
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

=======
  });

  const berkeley: google.maps.LatLngLiteral = { lat: 37.8720, lng: -122.2595 };
  const centerControlDiv = document.createElement("div");
  const control = new CenterControl(centerControlDiv, map, berkeley);

  // @ts-ignore
  centerControlDiv.index = 1;
  centerControlDiv.style.paddingTop = "10px";
>>>>>>> a3faac8b247a6fed364b9fa8768e3c43240ce2f7
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);


  // Create and add multiple markers in a loop
  const stationMarkerData = [
    // { coord },
    { lat: 37.87020572, lng: -122.2594291, title: "Sathers Blue Light" },
    { lat: 37.87022691, lng: -122.2620718, title: "Frank Schlessinger Way Blue Light" },
    { lat: 37.8725741, lng: -122.2649495, title: "Li Ka Shing Blue Street Light Back" },
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
  ];

  for (const data of stationMarkerData) {
    addMarker(data.lat, data.lng, data.title, 'assets/img/blue station icon.png');
  }


  const policeMarkerData = [
    // { coord },
    { lat: 37.86924194730867, lng: -122.25863946011555, title: "UC Police Department" },
    { lat: 37.87025582866991, lng: -122.27312636787676, title: "Berkeley Police Department" }
  ];


  for (const data of policeMarkerData) {
    addMarker(data.lat, data.lng, data.title, 'assets/img/police hat.png');
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
}


initMap();
export {};
