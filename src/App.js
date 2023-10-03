import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/jsx/Signup';
import Login from './Components/jsx/Login';
import GetLink from './Components/jsx/GetLink';
import SetLink from './Components/jsx/SetLink';

function App() {
  return (
    <div>
      {/* hello */}
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/getlink' element={<GetLink />} />
        <Route path='setlink' element={<SetLink />} />
      </Routes>
    </div>
  );
}

export default App;
