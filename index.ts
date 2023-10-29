/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


let map: google.maps.Map;




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
    }
  });

  // let generateCoord = useAction(api.myFunctions.getCoord)
  // let coord = await generateCoord()


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
