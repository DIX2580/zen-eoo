"use client"
import { useState } from 'react';
import Image from 'next/image';

const Carrier = () => {
  const [isOpen, setIsOpen] = useState({
    gis: false,
    autocad: false,
    qgis: false,
  });

  const toggleDropdown = (section) => {
    setIsOpen((prevState) => ({ ...prevState, [section]: !prevState[section] }));
  };

  const handleApplyNow = () => {
    window.open("/applyform", "_blank");
  };

  return (
    <div>
      <div className="relative flex  items-center justify-center h-screen  sm:h-96">
        {/* Text Section */}
        <div className="absolute left-0 rounded-r-[120px] p-8 bg-white bg-opacity-75 z-10">
          <h1 className="text-4xl  md:text-6xl font-bold">
            Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-50xl font-bold">ZENEX</span>
          </h1>
        </div>

        {/* Image Section with fade-down effect */}
        <Image
          className="absolute inset-0 w-full rounded-lg  h-full object-cover z-0 fade-down"
          src="/wallpaperflare.com_wallpaper.jpg"
          alt="3d-view-planet-earth"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-4  md:p-8 lg:p-12 space-y-4">
        {['gis', 'autocad', 'qgis'].map((section) => (
          <div key={section} className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center">
            <div onClick={() => toggleDropdown(section)} className="w-full cursor-pointer">
              <button className="
                group
                p-5
                relative
                text-xl
                font-normal
                border-0
                flex
                items-center
                justify-center
                bg-transparent
                text-red-500
                h-auto
                w-full
                overflow-hidden
                transition-all
                duration-100">
                <span className="group-hover:w-full absolute left-0 h-full w-5 
                  border-y
                  border-l
                  border-red-500
                  transition-all
                  duration-500">
                </span>

                <p className="group-hover:opacity-0 text-xl font-bold group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
                  duration-200">{section === 'gis' ? 'GIS Engineer' : section === 'autocad' ? 'AutoCAD Engineer' : 'QGIS Engineer'}</p>

                <span className="group-hover:translate-x-0 font-bold group-hover:opacity-100 absolute translate-x-full opacity-0 transition-all duration-200">APPLY NOW
                </span>

                <span
                  className="group-hover:w-full absolute right-0 h-full w-5 border-y border-r border-red-500 transition-all duration-500">
                </span>
              </button>

              {isOpen[section] && (
                <div className="p-3">
                  <h4 className='inline-block px-3 py-1 text-sm m-2 font-semibold text-indigo-100 rounded-lg text-cn bg-[#000000] hover:cursor-pointer hover:bg-opacity-40'><b>Communication :</b></h4>
                  <p>Good in Communication</p>

                  <h4 className='inline-block px-3 py-1 text-sm font-semibold m-2 text-indigo-100 rounded-lg text-cn bg-[#000000] hover:cursor-pointer hover:bg-opacity-40'><b>Qualification :</b></h4 >
                  <p>Diploma/UG/PG- ANY</p>

                  <p>Skills Required: AutoCAD, Arc GIS, Arc View, Arc Map</p><br />

                  <h4 className='inline-block px-3 py-1 text-sm m-2 font-semibold text-indigo-100 rounded-lg text-cn bg-[#000000] hover:cursor-pointer hover:bg-opacity-40'><b>Responsibilities:</b></h4>
                  <p>
                    Working in AutoCAD and ArcGIS software to convert hard copy maps into a digital form for GIS usage<br />
                    1. Working in QA/QC tools<br />
                    2. Working with team skills and maintaining the project schedule<br />
                    3. Updating time management software<br />
                    4. Creating the Quality data by following project standards and procedures.
                  </p><br />

                  <h4 className='inline-block px-3 py-1 text-sm m-2 font-semibold text-indigo-100 rounded-lg text-cn bg-[#000000] hover:cursor-pointer hover:bg-opacity-40'><b>Requirements:</b></h4>
                  <p>
                    Should have good experience in AutoCAD and ArcGIS<br />
                    • Should be very strong in Technical skills<br />
                    • Candidates residing in Bangalore are preferable.<br />
                    • Working experience in Utilities (Water, Waste Water, Storm, etc) in ArcGIS AutoCAD is preferable<br />
                    • Good in written and verbal communication<br />
                    • Experience with Geo referencing tools
                  </p><br />

                  <button 
                    type="button" 
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleApplyNow}
                  >
                    Apply Now
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carrier;
