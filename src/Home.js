import React from 'react';
import Ships from './Ships';
import Rockets from './Rockets';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

function Home (){
  const {loading, error, data} = useQuery(['posts'], () => {return axios.get("https://api.spacexdata.com/v4/rockets")});

  // get the kg of that specific mass and round it to nearest integer.
  function getKg(mass){ return (mass*9.80).toFixed(1)};
                                                                                                                    
  return (
    <div className='w-full' >
    <div className='mx-8'> 
      
      <Rockets /> 
      <Ships />
    </div>
    </div>
  )
}


export default Home
