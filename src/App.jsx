import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InfoPoke from './pages/InfoPoke';
import Movs from './pages/Movs';
import { useState } from 'react';

function App() {
  const [movs, setMovs] = useState([])
 
  return (
    <BrowserRouter> 
      <Routes>

        <Route path="/" element={<Home  />} />
        <Route path="/infoPoke/:id" element={<InfoPoke setMovs = {setMovs} />}>
          <Route path="Movs/" element={<Movs movs={movs} />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}


export default App;
