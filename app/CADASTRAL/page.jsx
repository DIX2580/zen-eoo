import React from "react";
import Image from "next/image";

const Project2DBuilding = () => {
  return (
    <div className="mt-10 pt-10 bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-teal-500 text-white text-center py-2 rounded-t-lg">
        <h1 className="text-xl font-bold ">PROJECT-CADATRAL MAP </h1>
      </div>
      <div className="">
      <div className="flex flex-col md:flex-row px-4 py-2">
        <div className="flex-grow mb-4 md:mb-0">
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                1
              </div>
              <h2 className="ml-2 text-lg underline font-semibold">Project Overview</h2>
            </div>
            <p className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1 ">
            Cadastral map used to track and show the boundary lines of both private owned real estate and public land. This information is used in the creation of cadastral maps, which may include line work, parcel number, land ownership, dimensions and topographic mapping.  
            </p>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                2
              </div>
              <h2 className="ml-2 text-lg font-semibold underline">Service Provided</h2>
            </div>
            <div className="">
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">We have received the scan Cadastral map.</li>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">We have scaled images as per coordinate.</li>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">Digitize the map as per the client specification and layer standard.</li>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">After digitization, we have polygon each plot and symbol.</li>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg">Finally we deliver data in SHP format, DWG format and also in PDF format.</li>
           

            </div>
            
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                2
              </div>
              <h2 className="ml-2 underline text-lg font-semibold">Software uses</h2>
            </div>
            <p className="text-gray-700">
               
            </p>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-2">AutoCAD Map</li>
                <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-2">ARC GIS</li>
          </div>
         </div>
         <div className="md:ml-4">
          <Image
            src="/Base Map.png"
            alt="Building Footprints capture from Ortho"
            width={2500} // adjust as needed
            height={3000} // adjust as needed
            className="rounded-lg mb-2"
          />
       
        </div>
        </div>
      </div>
    </div>
  );
};

export default Project2DBuilding;
