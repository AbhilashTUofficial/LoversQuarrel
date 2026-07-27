import { Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Home from './pages/Home';
import Setup from './pages/Setup';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import Landing from './pages/Landing';



function App() {

  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App