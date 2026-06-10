import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Home from './pages/Home';
import Setup from './pages/Setup';



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<Setup />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  )
}

export default App