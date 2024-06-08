import React, { useState } from 'react'
import './App.css';

import State from './Components/State'
import Props from './Components/Props'
import Map from './Components/Map'
import UseReducer from './Components/UseReducer';
import UseMemoDemo from './Components/UseMemoDemo';
import UseCallback from './Components/UseCallback';
import UseContext from './Components/UseContext';
import Component1 from './Components/Component1';

export const usecontext = React.createContext()

function App() {

  const [name, setName] = useState('neethu')

  const updateName = (newName)=>{
    setName(newName)
  }
  
  let a = [1,2,3,4,5,6]
  
  return (
    <>
    <div>

     {/* <State /> */}

     {/* <Props name='neethu'/> */}

     {/* <Map values={a}/> */}

     {/* <UseReducer /> */}

     {/* <UseMemoDemo /> */}

     {/* <UseCallback /> */}

     {/* <usecontext.Provider value={'neethu'}>
     <UseContext />
     </usecontext.Provider> */}

     <usecontext.Provider value={{name, updateName}}>
      <Component1 />
      <p>{name}</p>
     </usecontext.Provider>

    </div>
    </>
  );
}

export default App;
