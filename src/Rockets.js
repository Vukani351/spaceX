import React from 'react';
// import Card from './Card';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

function Rockets (){
  const {loading, error, data} = useQuery(['posts'], () => {return axios.get("https://api.spacexdata.com/v4/rockets")});
  // console.clear(); console.table( data);

  // get the kg of that specific mass and round it to nearest integer.
  function getKg(mass){ return (mass*9.80).toFixed(1)};
                                                                                                                    
  return (
    
    <div className=''> 
      
     
      <div className='flex justify-between'>
        <div className='w-full my-2'>
        <h1 className='uppercase pb-3 bold text-2xl'>Rockets </h1>
      </div>
        <div className="relative w-1/2">
          <form className="flex items-center">   
            <label htmlFor="voice-search" className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                </div>
                <input type="text" id="voice-search" className="bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-3/4 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
                <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
                    
                </button>
            </div>    
          </form>
        </div>
      </div>
      <div className= "flex flex-wrap">
        
        {
          data?.data?.map((rocket, index) => { 
          
            return (<>
              <div className='flex w-1/4' key={index} >
                
                {/* remove the border n shadow & index after setting up */}
                <div className="mx-2 grid max-w-sm rounded ">
                    {/* will add onerror that works correctly after all other things work */}
                    {/* <img src={rocket.flickr_images[0]} onError={({ currentTarget }) => { currentTarget.src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg";}} className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl" alt='rocks - spaceX'/> */}
                    <img src='https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg'  className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl" alt='rock1'/>
                    <div className="px-6 my-4">
                        <h3 className="uppercase font-bold text-xl mb-2">{rocket.name} {index}</h3>
                    </div>
                    <div className="px-2 pt-2 pb-2">
                        <p className="uppercase font-bold block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">height: { rocket.height.feet } M</p>
                        <p className="uppercase font-bold block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">weight: { getKg(rocket.mass.kg   ) } KG</p>
                    </div>
                    <button className="uppercase mb-4 justify-self-center bg-black hover:bg-blue-700 text-white font-bold py-2 rounded w-11/12">  learn more </button>
                </div>
              </div>
            </>)
          }) 
        }
      </div>  

      
    </div>

  )
}



export default Rockets
