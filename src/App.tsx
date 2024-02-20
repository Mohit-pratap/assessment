// Import necessary modules
import * as React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';

// Define the component that renders routes
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
