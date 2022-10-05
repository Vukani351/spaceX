import React from 'react';

const Pagination = ({shipsPerPage, totalShips, setCurrentPage}) => {
    let pages = [];
    for(let i = 1; i <= Math.ceil(totalShips/shipsPerPage); i++){
      pages.push(i); 
    }
    return (
      <div>
        {
          pages.map((page, index) => {
            return <button onClick={() => setCurrentPage(page)} className='mx-5 text-lg my-3 hover:bg-gray-300 px-2 py-1 rounded-sm' key={index}> {page} </button>
          })
        }
      </div>
    )
  }
  
  export default Pagination
