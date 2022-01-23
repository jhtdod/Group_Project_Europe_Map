import './App.css';
import MapContainer from './containers/MapContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <h1 style={{margin: "0", zIndex: "10"}}>Europe</h1>
      <MapContainer/>
    </>
  );
}

export default App;
