// import Card from './Card';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import ReactPaginate from "react-paginate";
import { useState, useEffect } from 'react';
import VehicleItem from './VehicleItem';

function getKg(mass){ return (mass*9.80).toFixed(1)};

const Rockets = ({currentRockets}) => {
  const data = currentRockets;
  // search logic.
  const [name, setName] = useState('');
  const [rocket, setRocket] = useState('');
  const [searching, setSearching] = useState(false);
  // the search result
  
  const [foundRockets, setFoundRockets] = useState(data?.data);
  const filter = (e) => {
    const keyword = e.target.value;
    if (keyword !== '') {
      const results = data.filter((rocket) => {
        return rocket.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundRockets(results);
    } else {
      setFoundRockets(data?.data);
      // If the text field is empty, show all rockets
    }
    setName(keyword);
  };

  return (
    <div> 
      <div className='flex'>
        <div className='text-left w-full my-2'>
        <h1 className='text-md uppercase pb-3 font-bold md:ml-24 md:text-xl'>Rockets </h1>
      </div>
        <div className="relative w-full">
          <form className="flex items-center justify-end">   
            <div className="relative">
              <span className={searching ? 'inline-flex w-full animate__animated animate__bounceInRight': 'hidden'}>
                <label htmlFor="voice-search" className="sr-only">Search</label>
                <input type="text"  value={name} onChange={filter} onBlur={() => setSearching(false)}
                className="bg-gray-50 border rounded-md border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required="" />
              </span>
              <span className={searching ? 'hidden' : 'inline-flex animate__animated animate__bounceInRight'} onClick={() => setSearching(true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
              </span>
            </div>    
          </form>
        </div>
      </div>
      <div>
      <div className="grid justify-center md:flex">
          { foundRockets && foundRockets.length > 0 ? (
            foundRockets.map((rocket) => (
              <div className='grid grid-row-3 gap-2 shadow-lg' key={rocket.id} >
                <VehicleItem id={rocket.id} name={rocket.name} height={rocket.height} mass={rocket.mass} />
              </div>              
            ))
          ) : (
            <div className="grid justify-center md:flex gap-2">{ 
              name == "" && data?.map((rocket, index) => { 
                return (
                  <div className='shadow-lg' key={index} >
                    <VehicleItem id={rocket.id} name={rocket.name} height={rocket.height} mass={rocket.mass} />
                  </div>
                )
              }) 
            }</div>
          )}
        </div>
      </div>  
    </div>
  )
}

const RocketsComponent = () => {
  const {loading, error, data} = useQuery(['rockets'], () => { return axios.get("https://api.spacexdata.com/v4/rockets") });

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data?.data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data?.data]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Rockets currentRockets={currentItems} />
      <div className='flex justify-items-ceneter mx-auto my-6'>
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination flex mx-auto"
        pageLinkClassName="page-num mx-3"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="activee boxx font-bold"
        />
      </div>
    </>
  );
};

export default RocketsComponent