mapboxgl.accessToken = "pk.eyJ1IjoiYWF3c29tZ2FtZXMiLCJhIjoiY21oaGc2eng2MGVsejJscG5yZHlyM3B4biJ9.5G-MPfweH-CaQOhve8qL-A";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: [-84.9440, 32.4769],
  zoom: 12
});

const restaurants = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-73.9851, 40.7479] },
      properties: {
        name: "Joe's Pizza",
        category: "Italian / Pizza",
        address: "7 Carmine St, New York, NY",
        hours: JSON.stringify({
          monday: "11:00 AM – 10:00 PM",
          tuesday: "11:00 AM – 10:00 PM",
          wednesday: "11:00 AM – 10:00 PM",
          thursday: "11:00 AM – 10:00 PM",
          friday: "11:00 AM – 11:00 PM",
          saturday: "12:00 PM – 11:00 PM",
          sunday: "12:00 PM – 9:00 PM"
        })
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-84.9414, 32.4098] },
      properties: {
        name: "Rose's Caribbean Restaurant",
        category: "Jamaican Restaurant",
        address: "2039 Tourch Hill Rd #200, Columbus, GA",
        hours: JSON.stringify({
          monday: "11:00 AM – 6:30 PM",
          tuesday: "11:00 AM – 6:30 PM",
          wednesday: "11:00 AM – 6:30 PM",
          thursday: "11:00 AM – 6:30 PM",
          friday: "11:00 AM – 6:30 PM",
          saturday: "12:00 PM – 6:30 PM",
          sunday: "Closed"
        })
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-84.9438, 32.4151] },
      properties: {
        name: "Country Wings",
        category: "Chicken Wings",
        address: "3754 Victory Dr, Columbus, GA",
        hours: JSON.stringify({
          monday: "10:00 AM – 9:00 PM",
          tuesday: "10:00 AM – 9:00 PM",
          wednesday: "10:00 AM – 9:00 PM",
          thursday: "10:00 AM – 9:00 PM",
          friday: "10:00 AM – 10:00 PM",
          saturday: "10:00 AM – 10:00 PM",
          sunday: "11:00 AM – 8:00 PM"
        })
      }
    },
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-84.9471, 32.4219] },
      properties: {
        name: "Tacos El Paisa",
        category: "Mexican",
        address: "1649 Elvan Ave, Columbus, GA",
        hours: JSON.stringify({
          monday: "11:00 AM – 10:30 PM",
          tuesday: "11:00 AM – 10:30 PM",
          wednesday: "11:00 AM – 10:30 PM",
          thursday: "11:00 AM – 10:30 PM",
          friday: "11:00 AM – 11:00 PM",
          saturday: "11:00 AM – 11:00 PM",
          sunday: "11:00 AM – 10:30 PM"
        })
      }
    },
    {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-73.9772, 40.7527] },
          properties: {
            name: "Sakura Sushi",
            category: "Japanese",
            address: "245 E 45th St, New York, NY",
            hours: JSON.stringify({
              monday: "12:00 PM – 10:00 PM",
              tuesday: "12:00 PM – 10:00 PM",
              wednesday: "12:00 PM – 10:00 PM",
              thursday: "12:00 PM – 10:00 PM",
              friday: "12:00 PM – 11:00 PM",
              saturday: "1:00 PM – 11:00 PM",
              sunday: "1:00 PM – 9:00 PM"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9505, 32.4263] },
          properties: {
            name: "Ramos Italian Restaurant And Social Event Center",
            category: "Italian",
            address: "1607 S Lumpkin Rd, Columbus, GA",
            hours: JSON.stringify({
              monday: "12:00 PM – 10:00 PM",
              tuesday: "12:00 PM – 10:00 PM",
              wednesday: "12:00 PM – 10:00 PM",
              thursday: "12:00 PM – 10:00 PM",
              friday: "12:00 PM – 11:00 PM",
              saturday: "1:00 PM – 11:00 PM",
              sunday: "1:00 PM – 9:00 PM"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9507, 32.4263] },
          properties: {
            name: "Wing Town",
            category: "Chicken Wings",
            address: "1607 S Lumpkin Rd #7, Columbus, GA",
            hours: JSON.stringify({
              monday: "11:00 AM – 9:00 PM",
              tuesday: "11:00 AM – 9:00 PM",
              wednesday: "11:00 AM – 9:00 PM",
              thursday: "11:00 AM – 9:00 PM",
              friday: "11:00 AM – 9:00 PM",
              saturday: "11:00 AM – 9:00 PM",
              sunday: "12:00 PM – 7:00 PM"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9508, 32.4221] },
          properties: {
            name: "Panaderia y Taqueria Tia Rose",
            category: "Mexican / Bakery",
            address: "1671 S Lumpkin Rd, Columbus, GA",
            hours: JSON.stringify({
              monday: "10:00 AM – 8:00 PM",
              tuesday: "10:00 AM – 8:00 PM",
              wednesday: "10:00 AM – 8:00 PM",
              thursday: "10:00 AM – 8:00 PM",
              friday: "10:00 AM – 8:00 PM",
              saturday: "10:00 AM – 8:00 PM",
              sunday: "10:00 AM – 8:00 PM"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9516, 32.4202] },
          properties: {
            name: "Hot Wing Connections",
            category: "Chicken Wings",
            address: "1807 S Lumpkin Rd #F, Columbus, GA",
            hours: JSON.stringify({
              monday: "11:00 AM – 8:00 PM",
              tuesday: "11:00 AM – 8:00 PM",
              wednesday: "11:00 AM – 8:00 PM",
              thursday: "11:00 AM – 8:00 PM",
              friday: "11:00 AM – 8:00 PM",
              saturday: "11:00 AM – 8:00 PM",
              sunday: "Closed"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9517, 32.4169] },
          properties: {
            name: "That's My Dog",
            category: "Hot Dog",
            address: "2001 S Lumpkin Rd, Columbus, GA",
            hours: JSON.stringify({
              monday: "11:00 AM – 6:00 PM",
              tuesday: "11:00 AM – 6:00 PM",
              wednesday: "11:00 AM – 6:00 PM",
              thursday: "11:00 AM – 6:00 PM",
              friday: "11:00 AM – 6:00 PM",
              saturday: "Closed",
              sunday: "Closed"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9518, 32.4167] },
          properties: {
            name: "Seoul Garden Restaurant",
            category: "Korean",
            address: "2001 S Lumpkin Rd, Columbus, GA",
            hours: JSON.stringify({
              monday: "10:00 AM – 9:00 PM",
              tuesday: "10:00 AM – 9:00 PM",
              wednesday: "10:00 AM – 9:00 PM",
              thursday: "10:00 AM – 9:00 PM",
              friday: "10:00 AM – 9:00 PM",
              saturday: "10:00 AM – 9:00 PM",
              sunday: "10:00 AM – 9:00 PM"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9520, 32.4165] },
          properties: {
            name: "Taqueria Brito's",
            category: "Mexican",
            address: "2025 S Lumpkin Rd, Columbus, GA",
            hours: JSON.stringify({
              monday: "Unknown",
              tuesday: "Unknown",
              wednesday: "Unknown",
              thursday: "Unknown",
              friday: "Unknown",
              saturday: "Unknown",
              sunday: "Unknown"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9528, 32.4155] },
          properties: {
            name: "Borinquen Foods",
            category: "Caribbean",
            address: "2001 S Lumpkin Rd #17, Columbus, GA",
            hours: JSON.stringify({
              monday: "11:30 AM – 4:00 PM",
              tuesday: "11:30 AM – 4:00 PM",
              wednesday: "11:30 AM – 4:00 PM",
              thursday: "11:30 AM – 4:00 PM",
              friday: "11:30 AM – 2:30 PM",
              saturday: "Closed",
              sunday: "Closed"
            })
          }
        },
        {
          type: "Feature",
          geometry: { type: "Point", coordinates: [-84.9532, 32.4151] },
          properties: {
            name: "China Dragon",
            category: "Chinese",
            address: "2075 S Lumpkin Rd, Columbus, GA",
            hours: JSON.stringify({
              monday: "Closed",
              tuesday: "11:00 AM – 10:00 PM",
              wednesday: "11:00 AM – 10:00 PM",
              thursday: "11:00 AM – 10:00 PM",
              friday: "11:00 AM – 11:00 PM",
              saturday: "11:00 AM – 11:00 PM",
              sunday: "12:00 PM – 10:00 PM"
            })
          }
        }
      ]
    };

function formatHours(hoursStr) {
  const hours = JSON.parse(hoursStr);
  return `
    <table>
      ${Object.entries(hours)
        .map(
          ([day, time]) => `
          <tr>
            <td>${day.charAt(0).toUpperCase() + day.slice(1)}</td>
            <td>${time}</td>
          </tr>`
        )
        .join("")}
    </table>
  `;
}

map.on("load", () => {
  map.addSource("restaurants", {
    type: "geojson",
    data: restaurants
  });

  map.addLayer({
    id: "restaurant-circles",
    type: "circle",
    source: "restaurants",
    paint: {
      "circle-radius": 8,
      "circle-color": "#e63946",
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff"
    }
  });

  map.on("click", "restaurant-circles", (e) => {
    const feature = e.features[0];
    const props = feature.properties;

    const popupHTML = `
      <div class="popup">
        <h3>${props.name}</h3>
        <div class="category">${props.category}</div>
        <div>${props.address}</div>
        <div><strong>Hours:</strong> ${formatHours(props.hours)}</div>
      </div>
    `;

    new mapboxgl.Popup({ offset: 15 })
      .setLngLat(feature.geometry.coordinates)
      .setHTML(popupHTML)
      .addTo(map);
  });

  map.on("mouseenter", "restaurant-circles", () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "restaurant-circles", () => {
    map.getCanvas().style.cursor = "";
  });
});
