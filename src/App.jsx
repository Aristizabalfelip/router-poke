import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import InfoPoke from './pages/InfoPoke';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/infoPoke/:id" element={<InfoPoke/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
