import React from 'react';
import AddHobbies from './components/AddHobbies';
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom';
import EditHobbies from './components/EditHobbies';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AddHobbies />}></Route>
        <Route path='/edit/:id' element={<EditHobbies />}></Route>
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;