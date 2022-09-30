import React from 'react';
// import Card from './Card';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

function About (){
  const {loading, error, data} = useQuery(['posts'], () => {return axios.get("https://api.spacexdata.com/v4/company")});
  console.clear(); console.dir( data.data);

  // get the kg of that specific mass and round it to nearest integer.
  function getKg(mass){ return (mass*9.80).toFixed(1)};
                                                                                                                    
  return (
    
    <div className=''> 
      
     
      <div className='flex justify-between'>
        <div className='w-full my-2'>
        <h1 className='uppercase pb-3 bold text-2xl'> about </h1>
      </div>
        <div className="relative w-1/2">
          
        </div>
      </div>
      <div className= "grid">
        
      <div className='w-full' >
                
                {/* remove the border n shadow & index after setting up */}
                <div className="mx-2 grid max-w-sm rounded ">
                    {/* will add onerror that works correctly after all other things work */}
                    {/* <img src={rocket.flickr_images[0]} onError={({ currentTarget }) => { currentTarget.src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg";}} className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl" alt='rocks - spaceX'/> */}
                    <img src='https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg'  className="w-full max-w-md rounded-lg shadow-xl" alt='rock1'/>
                    <div className="px-6 my-4">
                        <h3 className="uppercase font-bold text-xl mb-2">{data?.data?.ceo} </h3>
                    </div>
                    <div className="px-2 pt-2 pb-2">
                        <p className="font-normal block px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> { data?.data?.summary } </p>
                        <hr className='h-5 my-8'/>

                        <span className='grid grid-col-2 gap-4'>
                          <ul>
                            <li className=' flex '> <p className='uppercase font-bold mr-5'>ceo: </p>{data?.data?.ceo}</li>
                            <li className=' flex '> <p className='uppercase font-bold mr-5'>cto: </p>{data?.data?.cto}</li>
                            <li className=' flex '> <p className='uppercase font-bold mr-5'>coo: </p>{data?.data?.coo}</li>
                            <li className=' flex '> <p className='uppercase font-bold mr-5'>cto propulsion: </p>{data?.data?.cto_propulsion}</li>
                            </ul>
                          <ul>
                            <li className=' flex '> <p className='uppercase font-bold mr-5'>address: </p>{data?.data?.headquarters.address}</li>
                            <li className=' flex '> <p className='uppercase font-bold mr-5'>city: </p>{data?.data?.headquarters.city}</li>
                            <li className=' flex '> <p className='uppercase font-bold mr-5'>state: </p>{data?.data?.headquarters.state}</li>
                            </ul>
                        </span>    
                    </div>
                </div>
              </div>
      </div>  

      
    </div>

  )
}



export default About
