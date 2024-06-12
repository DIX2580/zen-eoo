import React from "react";
import Image from "next/image";

const Project2DBuilding = () => {
  return (
    <div className="mt-10 pt-10 bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-teal-500 text-white text-center py-2 rounded-t-lg">
        <h1 className="text-xl font-bold">PROJECT-2D Building</h1>
      </div>
      <div className="">
        <div className="flex flex-col md:flex-row px-4 py-2">
          <div className="mb-4 md:mb-0">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                  1
                </div>
                <h2 className="ml-2 text-lg underline font-semibold">Project Overview</h2>
              </div>
              <p className=" text-gray-700  hover:bg-black hover:text-white  rounded-lg p-2">
                To create accurate 3D model of the critical structures like Buildings and associated constructions using latest High Resolution Oblique Imagery.
              </p>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                  2
                </div>
                <h2 className="ml-2 text-lg font-semibold underline">Area Covered</h2>
              </div>
              <p className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-2">
                This Project covers the modeling of the major cities UK and Sydney.
              </p>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                  3
                </div>
                <h2 className="ml-2 underline text-lg font-semibold">Oblique Imagery</h2>
              </div>
              <p className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-2">
                To collect the height of the building roof, eave, lines of eave, ridges, creases and other critical areas. Also to use as input in checking the proper representation of the Land mark structures.
              </p>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                  4
                </div>
                <h2 className="ml-2 text-lg font-semibold underline">Project Shipment</h2>
              </div>
              <p>The following shipments were made-</p>
              <p className="text-gray-700">
              </p>
              <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">3D shape files of building, lines of eave, ridges and creases.</li>
              <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">3D facet files to represent the actual position, shape and height to represent the true structure.</li>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <div className="bg-blue-500 text-white rounded-full h-8 w-8 flex items-center justify-center">
                  5
                </div>
                <h2 className="ml-2 text-lg font-semibold underline">Software uses</h2>
              </div>
              <p className="text-gray-700">
              </p>
              <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">AutoCAD Map.</li>
              <li className="text-gray-700  hover:bg-black hover:text-white  rounded-lg p-1">ARC GIS</li>
            </div>
          </div>
          <div className="md:ml-4">
            <Image
              src="zenexinfo.com/2D building.JPG"
              alt="Building Footprints capture from Ortho"
              width={2000} // adjust as needed
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
