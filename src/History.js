import React from 'react';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Link } from "react-router-dom";

function History (){
  const {loading, error, data} = useQuery(['history'], () => {return axios.get("https://api.spacexdata.com/v4/history")});
                                                                                                                    
  return (
    <div className=''> 
     
      <div className='flex justify-between'>
        <div className='w-full my-2'>
        <h1 className='uppercase pb-3 bold text-2xl font-bold'>history </h1>
      </div>
        <div className="relative">
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
      <div className= "grid grid-cols-3 gap-1">
        
        {
          data?.data?.map((article, index) => { 
          
            return (<>
              <div className='flex' key={index} >
                
                {/* remove the border n shadow & index after setting up */}
                <div className="mx-2 grid overflow-hidden flex justify-items-center">
                    {/* will add onerror that works correctly after all other things work */}
                    {/* <img src={rocket.flickr_images[0]} onError={({ currentTarget }) => { currentTarget.src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg";}} className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl" alt='rocks - spaceX'/> */}
                    <img src='https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg'  className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl" alt='rock1'/>
                    <div className="px-6 my-4">
                        <h3 className="text-ellipsis truncate h-14 uppercase font-bold text-xl mb-2">{article.title} {index}</h3>
                    </div>
                    <div className="overflow-hidden px-2 mb-5 pb-2">
                        <p className="uppercase h-14 my-5 font-normal rounded-md px-3 py-1 text-sm text-black mr-2 mb-2"> { article.details } </p>
                    </div>
                    <Link to={article.links.article} className='w-full' _target="blank">
                      <button className="uppercase mb-4 justify-self-center bg-black hover:bg-blue-700 text-white font-bold py-2 rounded w-11/12">  view article </button>
                    </Link>
                </div>
              </div>
            </>)
          }) 
        }
      </div>  

      
    </div>

  )
}



export default History