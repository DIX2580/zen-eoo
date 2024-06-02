// pages/index.jsx

import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: '/image1.jpg', title: 'Title 1', link: '/page1' },
  { src: '/image2.jpg', title: 'Title 2', link: '/page2' },
  { src: '/image3.jpg', title: 'Title 3', link: '/page3' },
  { src: '/image4.jpg', title: 'Title 4', link: '/page4' },
  { src: '/image5.jpg', title: 'Title 5', link: '/page5' },
];

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative group w-64 h-64 overflow-hidden rounded-lg shadow-lg">
          <Image 
            src={image.src} 
            alt={image.title} 
            layout="fill" 
            objectFit="cover" 
            className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h2 className="text-white text-lg font-semibold mb-2">{image.title}</h2>
            <Link href={image.link} legacyBehavior>
              <a className="text-blue-400 underline">Read More</a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
