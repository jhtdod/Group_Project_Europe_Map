import './App.css';
import MapContainer from './containers/MapContainer';

function App() {
  return (
    <>
      <h1 style={{zIndex: "10"}}>
        <span class="black-header">Euro</span>
        <span class="new-colour-header">peer-In</span>
      </h1>
      <MapContainer/>
    </>
  );
}

export default App;
