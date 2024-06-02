import React from "react";
import Image from "next/image";

const Project2DBuilding = () => {
  return (
    <div className="mt-10 pt-10 bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-teal-500 text-white text-center py-2 rounded-t-lg">
        <h1 className="text-xl font-bold">PROJECT-LAND USE AND LAND COVER MAPPING </h1>
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
            Satellite imagery to classify natural and man-made features into different LULC classes like forests, urban and rural settlements, highways, building, tree, barren land, cultivated land, forest area, canal, electric pole, well based on project requirements.
            </p>
          </div>
          <div className="mb-4">
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                2
              </div>
              <h2 className="ml-2 text-lg font-semibold underline">Service Provided</h2>
            </div>
            <p className="text-gray-700">
                
            </p>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">Digitization and classification of features from Aerial photograph. 
             Give attribution of every feature.</li>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">The deliverables will go in two phases. In first phase will deliver the data after production to client and client would done QC over the production areas and send us feedback points to fix where need to edit more with respect to the element represented on the ortho imagery.</li>
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">In the second phase the feedback from the client will be implemented to achieve the desire results.
                </li>            
            <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">Finally we delivered LULC map in shape file format.</li>
            
          </div>
          <div>
            <div className="flex items-center mb-2">
              <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                3
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
