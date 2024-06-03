import React from "react";
import Image from "next/image";

const Project2DBuilding = () => {
  return (
    <div className="mt-10 pt-10 bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-teal-500 text-white text-center py-2 rounded-t-lg">
        <h1 className="text-xl font-bold">PROJECT-PARCEL MAPPING </h1>
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
            <p className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">
            Georeferencing required to process accurately find the positions of the points on the surface of the map.
After Georeferencing, digitize parcel map typically built to identify property boundaries. Parcel mapping involves creating accurate maps of land boundaries and property lines. These maps help in identifying the location, size, and shape of a property.
            </p>
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
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">AutoCAD Map</li>
                <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">ARC GIS</li>
          </div>
         </div>
         <div className="md:ml-4">
          <Image
            src="/parcel map.JPG"
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
