      // Initialize the Leaflet map, center it in Australia
      const map = L.map('map').setView([-25.3444, 131.0369], 4); // Centered in Australia
    
      // Add OpenStreetMap tiles
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);

      var koppenLayer = L.tileLayer.wms('https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/Koppen_Geiger_Climate_Classification/MapServer/WMSServer', {
      layers: '0',  // First and only layer
      format: 'image/png',
      transparent: true,
      attribution: 'Köppen-Geiger Climate Classification © ESRI, ArcGIS Online'
    }).addTo(map);
      
  
    const geojsonWildlife = {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [144.9631, -37.8136]
          },
          "properties": {
            "species": "Koala",
            "date": "2024-08-15",
            "location": "You Yangs Regional Park near Melbourne, Australia",
            "sighting": "Spotted near a eucalyptus tree in the park.",
            "speciesInfo": "Koalas are arboreal marsupials native to Australia, known for their diet primarily consisting of eucalyptus leaves. [Source: Wikipedia]",
            "iconUrl": "Icons/koala.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [153.0281, -27.4678]
          },
          "properties": {
            "species": "Flying Fox",
            "date": "2023-07-22",
            "location": "Brisbane, Australia",
            "sighting": "Observed during evening feeding time.",
            "speciesInfo": "Flying foxes are large bats found in Australia and other parts of the world, known for their role in pollination and seed dispersal. [Source: Wikipedia]",
            "iconUrl": "Icons/bat.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [138.6007, -34.9285]
          },
          "properties": {
            "species": "Kangaroo",
            "date": "2023-09-01",
            "location": "Adelaide, Australia",
            "sighting": "Seen hopping across a field near the outskirts of the city.",
            "speciesInfo": "Kangaroos are large marsupials endemic to Australia, known for their powerful hind legs and ability to hop great distances. [Source: Wikipedia]",
            "iconUrl": "Icons/kangaroo.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [151.2093, -33.8688]
          },
          "properties": {
            "species": "Platypus",
            "date": "2022-06-15",
            "location": "Sydney, Australia",
            "sighting": "Spotted near a freshwater creek.",
            "speciesInfo": "The platypus is a semiaquatic egg-laying mammal endemic to eastern Australia, including Tasmania. It is one of the only mammals that lay eggs. [Source: Wikipedia]",
            "iconUrl": "Icons/platy.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [122.2558, -17.9614]
          },
          "properties": {
            "species": "Saltwater Crocodile",
            "date": "2023-05-12",
            "location": "Broome, Western Australia",
            "sighting": "Seen swimming near the mangroves.",
            "speciesInfo": "The saltwater crocodile is the largest living reptile and is native to saltwater habitats in parts of Asia, Australia, and the Indo-Pacific. [Source: Wikipedia]",
            "iconUrl": "Icons/croco.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [130.8456, -12.4634]
          },
          "properties": {
            "species": "Frill-necked Lizard",
            "date": "2023-10-05",
            "location": "Darwin, Australia",
            "sighting": "Observed displaying its frill in a defensive posture.",
            "speciesInfo": "The frill-necked lizard is known for its large frill, which it can extend when threatened. It is native to northern Australia and southern New Guinea. [Source: Wikipedia]",
            "iconUrl": "Icons/liz.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [146.7753, -19.2576]
          },
          "properties": {
            "species": "Cassowary",
            "date": "2023-08-22",
            "location": "Townsville, Australia",
            "sighting": "Spotted in a dense forest area.",
            "speciesInfo": "Cassowaries are large, flightless birds native to the tropical forests of New Guinea, nearby islands, and northern Australia. [Source: Wikipedia]",
            "iconUrl": "Icons/casso.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [117.8757, -23.6980]
          },
          "properties": {
            "species": "Dingo",
            "date": "2021-09-14",
            "location": "Karijini National Park, Western Australia",
            "sighting": "Heard howling at night, spotted the next morning near the campsite.",
            "speciesInfo": "The dingo is a wild canine found primarily in Australia, and is known for its vocal howling and pack behavior. [Source: Wikipedia]",
            "iconUrl": "Icons/dingo.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [142.7028, -10.5844]
          },
          "properties": {
            "species": "Green Sea Turtle",
            "date": "2023-11-01",
            "location": "Cape York Peninsula, Australia",
            "sighting": "Observed nesting on the beach.",
            "speciesInfo": "Green sea turtles are large sea turtles found in tropical and subtropical waters, known for their migratory behavior and herbivorous diet. [Source: Wikipedia]",
            "iconUrl": "Icons/turtle.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [137.0655, -25.3444]
          },
          "properties": {
            "species": "Wedge-tailed Eagle",
            "date": "2024-07-30",
            "location": "Outback, Australia",
            "sighting": "Seen soaring above the desert plains.",
            "speciesInfo": "The wedge-tailed eagle is the largest bird of prey in Australia and is known for its distinctive wedge-shaped tail. [Source: Wikipedia]",
            "iconUrl": "Icons/eagle.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [149.1269, -35.2809]
          },
          "properties": {
            "species": "Echidna",
            "date": "2023-02-18",
            "location": "Canberra, Australia",
            "sighting": "Seen wandering near a bush trail.",
            "speciesInfo": "Echidnas are spiny, egg-laying mammals native to Australia and New Guinea, known for their ability to roll into a ball when threatened. [Source: Wikipedia]",
            "iconUrl": "Icons/echidna.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [150.1750, -36.4855]
          },
          "properties": {
            "species": "Wombat",
            "date": "2024-04-12",
            "location": "Mimosa Rocks National Park, New South Wales",
            "sighting": "Spotted digging burrows near the forest edge.",
            "speciesInfo": "Wombats are short-legged marsupials that dig extensive burrow systems. They are native to Australia. [Source: Wikipedia]",
            "iconUrl": "Icons/wombat.png"
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [119.4612, -31.9505]
          },
          "properties": {
            "species": "Bilby",
            "date": "2023-03-29",
            "location": "Goldfields-Esperance, Western Australia",
            "sighting": "Observed foraging for insects during the night.",
            "speciesInfo": "The bilby is a desert-dwelling marsupial native to Australia, known for its long ears and nocturnal habits. [Source: Wikipedia]",
            "iconUrl": "Icons/bilby.png"
          }
        }
      ]
    };
    


      

 
// Function to use custom icons from GeoJSON properties
function pointToLayer(feature, latlng) {
    // Check if a custom icon URL is provided
    if (feature.properties.iconUrl) {
        let iconSize;

        // Customize icon size based on species
        switch (feature.properties.species) {
            case "Emu":
                iconSize = [30, 36]; // Tall and narrow
                break;
            case "Flying Fox":
                iconSize = [35, 30]; // Wide and short
                break;
            case "Dingo":
                iconSize = [36, 34]; // Wide and short
                break;
            case "Saltwater Crocodile":
                iconSize = [35, 30]; // Very wide and short
                break;
            case "Cassowary":
                iconSize = [30, 35]; // Square icon
                break;
            case "Lyrebird":
                iconSize = [35, 35]; // Square icon
                break;
            case "Echidna":
                iconSize = [35, 30]; // Square icon
                break;
            case "Frill-necked Lizard":
                iconSize = [35, 35]; // Square icon
                break;
            case "Wombat":
                iconSize = [35, 30]; // Square icon
                break;
            case "Platypus":
                iconSize = [35, 33]; // Square icon
                break;
            case "Tree Kangaroo":
                iconSize = [35, 38]; // Square icon
                break;
            // Add more cases as needed for different animals
            default:
                iconSize = [35, 32]; // Default icon size
        }

        // Create the custom icon
        let customIcon = L.icon({
            iconUrl: feature.properties.iconUrl,  // Use the provided icon URL
            iconSize: iconSize,  // Custom or default icon size
            iconAnchor: [iconSize[0] / 2, iconSize[1]],  // Anchor point of the icon (centered)
            popupAnchor: [0, -iconSize[1]]  // Popup opens above the icon
        });

        return L.marker(latlng, { icon: customIcon });  // Return marker with custom icon
    } else {
        // Return a default Leaflet marker if no custom icon URL is provided
        return L.marker(latlng);
    }
}


  // Add the GeoJSON data to the map with custom icons and popups
  L.geoJSON(geojsonWildlife, {
      pointToLayer: pointToLayer,
      onEachFeature: function (feature, layer) {
          layer.bindPopup(
              "<b>Species:</b> " + feature.properties.species +
              "<br><b>Date:</b> " + feature.properties.date +
              "<br><b>Location:</b> " + feature.properties.location +
              "<br><b>Sighting:</b> " + feature.properties.sighting +
              "<br><b>Species Info:</b> " + feature.properties.speciesInfo
          );
      }
  }).addTo(map);
  
  // Functionality for clicking on the map
  map.on('click', async function (e) {
      const lat = e.latlng.lat;
      const lon = e.latlng.lng;

      // Fetch place name for the clicked location
      const placeName = await getPlaceName(lat, lon);

      // Display the place name in a popup
      L.popup()
          .setLatLng(e.latlng)
          .setContent(`<b>Location:</b> ${placeName}<br>Latitude: ${lat.toFixed(4)}<br>Longitude: ${lon.toFixed(4)}`)
          .openOn(map);
  });

  // Function to get the place name based on latitude and longitude
  async function getPlaceName(lat, lng) {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      const data = await response.json();
      
      if (data.address) {
          const addressComponents = [
              data.address.town,
              data.address.city,
              data.address.village,
              data.address.district,
              data.address.county,
              data.address.state,
              data.address.country
          ].filter(component => component);  // Filter out undefined/null values

          // Get the last two components
          const lastTwoComponents = addressComponents.slice(-2);
          return lastTwoComponents.join(', ');
      }
      
      return 'Unknown Location';
  }

  // Initial welcome popup
  const welcomePopup = L.popup({ offset: L.point(20, 30) })
      .setLatLng([-25.3444, 137.0655])
      .setContent("<b>Welcome to Animals in Australia Map 🦘 🐨 </b><br />Click on the markers to learn more about each animal.")
      .openOn(map);