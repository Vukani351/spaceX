import React from 'react';
import Ships from './Ships';
import Pagination from './Pagination';
import Rockets from './Rockets';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { useState} from 'react';

function Home (){
  const {loading, error, data} = useQuery(['posts'], () => {return axios.get("https://api.spacexdata.com/v4/ships")});
  // pagination logic.
  const [currentPage, setCurrentPage] = useState(1);
  const [shipsPerPage, setShipsPerPage] = useState(4);

  // pagination logic.
  const lastShipIndex = currentPage * shipsPerPage;
  const firstShipIndex = lastShipIndex - shipsPerPage;
  const currentShips = data?.data.slice(firstShipIndex, lastShipIndex);

  // get the kg of that specific mass and round it to nearest integer.
  function getKg(mass){ return (mass*9.80).toFixed(1)};
                                                                                                                    
  return (
    <div className='w-full' >
      <div className='mx-8 grid'> 
        <span> <Rockets /></span>
        <span> <Ships currentShips = {currentShips}/> </span>
        <span><Pagination totalShips={data?.data.length} shipsPerPage={shipsPerPage} setCurrentPage={setCurrentPage}/> </span>
       
      </div>
    </div>
  )
}



export default Home
