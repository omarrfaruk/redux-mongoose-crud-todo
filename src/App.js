import React from 'react';
import AddHobbies from './components/AddHobbies';
import ShowHobbies from './components/ShowHobbies';
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div>
      <AddHobbies />
      <ShowHobbies></ShowHobbies>
      <Toaster />
    </div>
  );
};

export default App;