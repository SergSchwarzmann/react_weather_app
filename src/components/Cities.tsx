import * as React from 'react';


import "../styles/Cities.css";

const cities = [
    { name: 'Темиртау', latitude: 50, longitude: 72.9 },
    { name: 'Астана', latitude: 51, longitude: 71.4 },
    { name: 'Алматы', latitude: 43.2, longitude: 76.9 },
    { name: 'Москва', latitude: 55.7, longitude: 37.6 },
    // Добавьте другие города соответствующим образом
  ];
  
  function Cities({ onCitySelect }) {
    const [selectedCity, setSelectedCity] = React.useState('');
    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);
  
    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
      const selectedCityData = cities.find((city) => city.name === e.target.value);
      if (selectedCityData) {
        setLatitude(selectedCityData.latitude);
        setLongitude(selectedCityData.longitude);
        onCitySelect(selectedCityData.latitude, selectedCityData.longitude);
      }
    };
  
    return (
      <div>
        <label htmlFor="citySelect">Выберите город:</label>
        <select id="citySelect" value={selectedCity} onChange={handleCityChange}>
          <option value="">-- Выберите город --</option>
          {cities.map((city) => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <p>Выбранные координаты: {latitude}, {longitude}</p>
      </div>
    );
  }
  
  export default Cities;
