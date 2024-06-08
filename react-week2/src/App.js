import React, { useState } from 'react'
import './App.css';

import State from './Components/State'
import Props from './Components/Props'
import Map from './Components/Map'
import UseReducer from './Components/UseReducer';
import UseMemoDemo from './Components/UseMemoDemo';
import UseCallback from './Components/UseCallback';
import UseContext from './Components/UseContext';

export const usecontext = React.createContext()

function App() {

  
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

     <usecontext.Provider value={'neethu'}>
     <UseContext />
     </usecontext.Provider>

    </div>
    </>
  );
}

export default App;
