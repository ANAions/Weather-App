import React, { useState } from "react";


const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  return (
    <div className="App">
       <h1 >Find Sunny Places ☀️</h1>
    </div>
  );
}

export default App;
