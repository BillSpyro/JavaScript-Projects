const WEATHER_DATA = {
  location: 'Lancaster, PA',
  currentTemp: 50,
  tempUnit: 'F',
  status: 'Cloudy',
  hourly: [{
      time: '12:00 pm',
      temp: 49,
      precip: 0
    },
    {
      time: '1:00 pm',
      temp: 50,
      precip: 0
    },
    {
      time: '2:00 pm',
      temp: 52,
      precip: 0
    },
    {
      time: '3:00 pm',
      temp: 50,
      precip: 0
    },
    {
      time: '4:00 pm',
      temp: 49,
      precip: 0
    },
    {
      time: '5:00 pm',
      temp: 48,
      precip: 10
    },
  ],
  daily: [{
      date: '11/20',
      day: 'Wednesday',
      high: 50,
      low: 33,
      status: 'Partly Cloudy'
    },
    {
      date: '11/21',
      day: 'Thursday',
      high: 52,
      low: 44,
      status: 'Partly Cloudy'
    },
    {
      date: '11/22',
      day: 'Friday',
      high: 55,
      low: 28,
      status: 'AM Showers'
    },
    {
      date: '11/23',
      day: 'Saturday',
      high: 47,
      low: 37,
      status: 'PM Showers'
    },
  ]
};

// Your code should start after this line

let today = document.querySelector('#today');

let title = document.body.querySelector("h1");
title.append(WEATHER_DATA.location);

let temp = document.createElement('p');
temp.append("Current temp " + WEATHER_DATA.currentTemp + WEATHER_DATA.tempUnit);
today.append(temp);
let tempC = document.createElement('p');
tempC.append("Current temp in celsius " + "10" + "C");
today.append(tempC);
let status = document.createElement('p');
status.append("Current status " + WEATHER_DATA.status + "\n");
today.append(status);

function buildTable(data) {
  let table = document.createElement("table");

  let fields = Object.keys(data[0]);
  let headRow = document.createElement("tr");
  fields.forEach(function(field) {
    let headCell = document.createElement("th");
    headCell.appendChild(document.createTextNode(field));
    headRow.appendChild(headCell);
  });
  table.appendChild(headRow);

  data.forEach(function(object) {
    let row = document.createElement("tr");
    fields.forEach(function(field) {
      let cell = document.createElement("td");
      cell.appendChild(document.createTextNode(object[field]));
      if (typeof object[field] == "number") {
        cell.style.textAlign = "right";
      }
      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return table;
}

document.querySelector("#hourly")
  .appendChild(buildTable(WEATHER_DATA.hourly));

document.querySelector("#daily")
  .appendChild(buildTable(WEATHER_DATA.daily));
