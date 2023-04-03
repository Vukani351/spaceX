import React from 'react';

const VehicleItem = ({id, name, height, mass}) => {
    function getKg(mass){ return (mass*9.80).toFixed(1)};

    return (
        <div className="mx-2 grid max-w-sm rounded ">
        <img src='https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg' className="w-full max-w-sm rounded-lg overflow-hidden shadow-xl" alt='rock1'/>
        <div className="px-6 my-4">
            <h3 className="uppercase text-left font-bold text-xl mb-2">{name}</h3>
        </div>
        <div className="px-2 text-left pt-2 pb-2">
            <p className="blue-gray-700 uppercase font-bold block rounded-full px-3 py-1 font-semibold text-black mr-2 mb-2">height: { height.feet } M</p>
            <p className="uppercase font-bold block rounded-full px-3 py-1 font-semibold text-black mr-2 mb-2">weight: { getKg(mass.kg   ) } KG</p>
        </div>
        <button className="uppercase mb-4 justify-self-center bg-black hover:bg-blue-700 text-white font-bold py-2 rounded w-11/12">  learn more </button>
    </div>
    );
}

export default VehicleItem;
