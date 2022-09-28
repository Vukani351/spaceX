import React from 'react';


const Card = () => (
    <div class="grid max-w-sm rounded overflow-hidden shadow-lg">
        <img src='https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg' alt='rock1'/>
        <div class="px-6 py-4">
            <h3 class="uppercase font-bold text-xl mb-2">TTITLE</h3>
        </div>
        <div class="px-6 pt-4 pb-2">
            <p class="uppercase font-bold block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">height:</p>
            <p class="uppercase font-bold block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">weight: </p>
        </div>
        <button class="mb-4 justify-self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded w-11/12">  Learn More </button>
  </div>
)


export default Card

