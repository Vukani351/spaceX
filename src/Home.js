import React from 'react';
import ShipsComponent from './Ships';
import RocketsComponent from './Rockets';

const Home = () => {
                                                                                                                      
  return (
    <div className='w-full' >
      <div className='mx-8 grid '> 
        <RocketsComponent />
        <ShipsComponent /> 
      </div>
    </div>
  )
}

export default Home
