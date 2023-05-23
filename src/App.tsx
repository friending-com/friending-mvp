import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultProfile from './pages/DefaultProfile';
import Gyumin from './pages/Gyumin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultProfile />} />
        <Route path="/gyumin" element={<Gyumin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
