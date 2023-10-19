import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultProfile from './pages/DefaultProfile';
import Gyumin from './pages/Gyumin';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultProfile />} />
        <Route path="/gyumin" element={<Gyumin />} />
        <Route path="/test1" element={<Test1 />} />
        <Route path="/test2" element={<Test2 />} />
        <Route path="/test3" element={<Test3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
