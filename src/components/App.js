import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
function App() {
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow",
          },
          {
            name: "Dewas",
          },
        ],
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit",
          },
          {
            name: "Berasia",
          },
        ],
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur",
          },
        ],
      },
    ],
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad",
          },
          {
            name: "Hirapur",
          },
        ],
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's",
          },
          {
            name: "Faizal khan's",
          },
        ],
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's",
          },
          {
            name: "Guddu bhaiya's",
          },
        ],
      },
    ],
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin",
          },
          {
            name: "Jalah",
          },
        ],
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati",
          },
          {
            name: "Leopard found in IIT Guwahati",
          },
        ],
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh",
          },
          {
            name: "Silchar",
          },
        ],
      },
    ],
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur",
          },
          {
            name: "Maner",
          },
        ],
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur",
          },
          {
            name: "Barachatti",
          },
        ],
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara",
          },
          {
            name: "Jale",
          },
        ],
      },
    ],
  },
];

const [selectedState, setSelectedState] = useState(null);
const [selectedCity, setSelectedCity] = useState(null);

const handleStateClick = (stateIndex) => {
  setSelectedState(selectedState === stateIndex ? null : stateIndex);
  setSelectedCity(null); // Reset selected city when state is clicked
};

const handleCityClick = (cityIndex) => {
  setSelectedCity(selectedCity === cityIndex ? null : cityIndex);
};

return (
  <div id="main">
    {states.map((state, stateIndex) => (
      <div key={`state${stateIndex + 1}`} onClick={() => handleStateClick(stateIndex)}>
        {state.name}
        {selectedState === stateIndex && (
          <ul style={{ listStyleType: "circle"}}>
            {state.cities.map((city, cityIndex) => (
              <div key={`city${stateIndex + 1}-${cityIndex + 1}`} onClick={(e) => {e.stopPropagation(); handleCityClick(cityIndex)}}>
                {city.name}
                {selectedCity === cityIndex && (
                  <ul style={{ listStyleType: "square"}}>
                    {city.towns.map((town, townIndex) => (
                      <li key={`town${stateIndex + 1}-${cityIndex + 1}-${townIndex + 1}`}>{town.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);
}

export default App;