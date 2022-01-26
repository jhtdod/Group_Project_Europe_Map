import './App.css';
import MapContainer from './containers/MapContainer';
import CapitalsQuizContainer from "./containers/CapitalsQuizContainer";

function App() {
  return (
    <>
      <h1 style={{zIndex: "10"}}>
        <span className="black-header">Euro</span>
        <span className="new-colour-header">peer-In</span>
      </h1>
      <CapitalsQuizContainer/>
      <MapContainer/>
    </>
  );
}

export default App;
