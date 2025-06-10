import React from 'react';
import { IoSyncSharp } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";


const TableHeader = () => {
  return (

    <div className="flex flex-col w-full">
      <div className="overflow-x-auto max-w-full">
        <div className="inline-block w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">

            <table className="min-w-full w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr className='flex  items-center'>
                  
                    <MdOutlineCheckBoxOutlineBlank  className= 'text-2xl flex justify-between text-blue-600'/>

                    <select className='text-blue-700 flex justify-center ' name="" id="">
                      <option className='' value=""></option>
                    <option value="">todas</option>
                  </select> 

                  <th scope="col" className="px-3 py-4 gap-0 flex items-center w-2/5 min-w-[180px]">
 
                 

                         <IoSyncSharp className='mr-2 text-2xl text-blue-700 ' />
                          Servicios 
            
                  </th>
                  <th scope="col" className="px-6 py-4 w-1/5 min-w-[120px]">Fecha</th>
                  <th scope="col" className="px-6 py-4 w-1/5 min-w-[120px]">Estado</th>
                  <th scope="col" className="px-6 py-4 w-1/5 min-w-[120px]">Tickets</th>
                </tr>
              </thead>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
};



export default TableHeader;
