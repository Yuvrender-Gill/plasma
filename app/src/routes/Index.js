import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// Pages
import Home from '../pages/Home';
import Profile from '../pages/Profile';
const AppRoutes = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)}>
    <Routes>
      <Route path={'/'} exact element={<Home />} />
      <Route path={'/profile'} exact element={<Profile />} />
    </Routes>
  </Router>
);

export default AppRoutes;
