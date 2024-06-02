// pages/index.jsx

import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/2D building.JPG', title: '2D Building', link: '/2D-Building' },
  { src: '/3D building.JPG', title: '3D Building', link: '/3D-Building' },
  { src: '/Base Map.png', title: 'Base Map', link: '/BaseMap' },
  { src: '/Land Use and Land Cover.JPG', title: 'Land Use and Land Cover', link: '/LULC' },
  { src: '/parcel map.JPG', title: 'Parcel Map', link: '/ParcelMap' },
  { src: '/CADASTRAL.png', title: 'CADASTRAL', link: '/CADASTRAL' },

];

export default function Home() {
  return (
    <div className='bg-white'>
      <div className="sm:flex items-center max-w-screen-xl">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
        <Image src="/j89wr53u.png"  
          width={600}
          height={400}
          alt="About our company" />        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
          What  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-50xl  font-bold">ZENEX</span> do
          </h2>
          <p className="text-gray-700">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-50xl  font-bold">ZENEX</span> specializes in GIS data collection, management, and spatial analysis, transforming geographic data into actionable insights. We develop custom GIS applications and provide advanced mapping and visualization services, empowering clients to make informed decisions, optimize operations, and enhance strategic planning through geospatial technology.






          </p>
        </div>
      </div>
    </div>
    <div className='  text-4xl font-bold font-serif text-gray-900 leading-tight  border-t-4 border-b-4 border-purple-600 text-center mb-2'>
      <h3 >
        About Our Projects
      </h3>

    </div>
    <div className=''>
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative group w-64  h-64 overflow-hidden border-4 border-purple-600 rounded-lg shadow-lg">
          <Image 
            src={image.src} 
            alt={image.title} 
            layout="fill" 
            objectFit="cover" 
            className="transform group-hover:scale-150  transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h2 className="text-white text-lg font-semibold P-2 mb-2 font-sans  bg-black rounded-3xl  pl-2 pr-2 ">{image.title}</h2>
            <Link href={image.link} legacyBehavior>
              <a className="px-8 py-4 bg-gradient-to-r  text-blue-300 underline font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">Read More</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
    </div>  
  );
}
