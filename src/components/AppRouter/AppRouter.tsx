import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from '../Main';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={ <Main /> } />
  </Routes>
);

export default AppRouter;
