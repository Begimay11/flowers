import './App.scss';
import Header from "./components/Header";
import VideoBackground from "./components/videoBacckground";
import RoutesLink from './routes/Routes';

function App() {

  return (
    <div className="app">
      <Header />
      {/* <VideoBackground /> */}
      <RoutesLink/>
    </div>
  );
}

export default App;
