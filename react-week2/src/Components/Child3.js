import React from 'react';
import { usecontext } from '../App';

const Child3 = () => {
  return (
    <usecontext.Consumer>
      {value => (
        <div>
          <p>My name is {value}</p>
        </div>
      )}
    </usecontext.Consumer>
  );
};

export default Child3;
