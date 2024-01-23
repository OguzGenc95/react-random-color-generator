import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('');
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');

  const handleHueChange = (event) => {
    setHue(event.target.value);
  };
  const handleLuminosityChange = (event) => {
    setLuminosity(event.target.value);
  };
  function generateColor() {
    setColor(randomColor({ hue: hue, luminosity: luminosity }));
  }
  return (
    <div
      style={{
        display: 'flex',
        width: '80vw',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          width: '100%',
          fontSize: '35px',
          padding: '5px',
          margin: '15px',
          borderRadius: '5px',
          color: 'white',
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        Generated Color: {color}
      </div>
      Hue:
      <input type="text" value={hue} onChange={handleHueChange} />
      Luminosity:
      <input type="text" value={luminosity} onChange={handleLuminosityChange} />
      <button
        style={{
          width: '100%',
          padding: '5px',
        }}
        onClick={generateColor}
      >
        Generate
      </button>
    </div>
  );
}
