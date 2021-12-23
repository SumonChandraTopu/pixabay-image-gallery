import "./App.css";
import Photos from "./components/Photos";

function App() {
  return (
    <div>
      <nav className="w-full bg-yellow-400 py-4">
        <h1 className="text-center text-2xl font-bold">PIXABAY PHOTOS</h1>
      </nav>
      <Photos />
    </div>
  );
}

export default App;
