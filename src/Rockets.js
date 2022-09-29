import React from 'react';
// import Card from './Card';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

function Home (){
  const {loading, error, data} = useQuery(['posts'], () => {return axios.get("https://api.spacexdata.com/v4/rockets")});
  console.clear(); console.table( data);

  // get the kg of that specific mass and round it to nearest integer.
  function getKg(mass){ return (mass*9.80).toFixed(1)};
                                                                                                                    
  return (
    
    <div className=''> 
      
      <div className='w-full'>
        <h1 className='uppercase my-5 bold text-2xl'>Rockets </h1>
      </div>
      <div className= "flex flex-wrap">
        
        {
          data?.data?.map((rocket, index) => { 
          
            return (<>
              <div className='flex ' key={index} >
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



export default Home
