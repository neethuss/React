import React from 'react'
import './App.css';
import ParentComponent from './Components/ParentComponent';
import Counter from './Components/Counter';
import ComponentC from './Components/ComponentC';
import CounterOne from './Components/CounterOne';

export const UserContext = React.createContext()

function App() {
  
  return (
    <>
    <div>
      <CounterOne/>
    </div>
    </>
  );
}

export default App;
