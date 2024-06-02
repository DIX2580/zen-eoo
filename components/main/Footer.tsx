import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-800 py-4 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 my-4">
              <a href="/" className="block w-56 mb-10 mx-auto sm:mx-0">
                <Image
                  src="/IMG_3404.PNG"
                  alt="logo"
                  width={150}
                  height={150}
                  className="cursor-pointer mt-4 hover:animate-slowspin"
                />
              </a>
              <p className="text-justify">
                ZENEX is a leading GIS company providing innovative geospatial solutions for diverse industries, revolutionizing spatial data analysis and visualization.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 my-4">
              <div>
                <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">Company</h2>
              </div>
              <ul className="leading-8">
                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="/services" className="hover:text-blue-400">Our services</a></li>
                <li><a href="/career" className="hover:text-blue-400">Career</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 my-4">
              <div>
                <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">Blog</h2>
              </div>
              <ul className="leading-8">
                <li><a href="https://mangomap.com/beginners-guide-to-gis" className="hover:text-blue-400">Getting Started With GIS</a></li>
                <li><a href="https://www.geographyrealm.com/learning-gis-resources-for-gis-training/" className="hover:text-blue-400">How to learn GIS?</a></li>
                <li><a href="https://medium.com/@mayankmishra29/the-reality-of-gis-jobs-in-india-2024-7a6a5905cdb7" className="hover:text-blue-400">Future of GIS in 2024</a></li>
                <li><a href="https://www.lifeingis.com/effective-tips-to-enhance-your-gis-development-skills/#google_vignette" className="hover:text-blue-400">Tips for growth in GIS</a></li>
                <li><a href="/" className="hover:text-blue-400">See More</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 my-4">
              <div>
                <h2 className="text-2xl pb-4 mb-4 border-b-4 border-blue-600">Connect With Us</h2>
              </div>
              <div className="flex justify-center sm:justify-start">
              <a href="https://www.linkedin.com/in/zenex-info-solution-8562082ab/" className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 54.3 0 24.6 24.3 0 53.79 0c29.64 0 53.79 24.6 53.79 54.3 0 29.3-24.15 53.8-53.79 53.8zM447.8 448h-92.37V302.4c0-34.7-12.6-58.4-43.99-58.4-24.02 0-38.33 16.1-44.62 31.7-2.29 5.6-2.89 13.3-2.89 21.1V448H172.7s1.2-241.9 0-266.8h92.36v37.8c-0.2 0.3-0.4 0.6-0.5 0.9h0.5v-0.9c12.3-18.9 34.2-45.9 83.2-45.9 60.8 0 106.4 39.7 106.4 125.2V448z"></path>
  </svg>
</a>

                <a href="#" className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full mr-1 hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8c14.8-.1 26.8 11.9 26.8 26.8zm76.1 27.2c-1.7-35.7-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.9 1.7-67.7 9.9-93.9 36.2-26.2 26.2-34.4 58-36.2 93.9-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9 26.2 26.2 58 34.4 93.9 36.2 37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.9 0-184.9zM398.8 388c-6.2 15.7-18.9 28.4-34.6 34.6-23.9 9.5-80.5 7.3-107.3 7.3s-83.4 2.1-107.3-7.3c-15.7-6.2-28.4-18.9-34.6-34.6-9.5-23.9-7.3-80.5-7.3-107.3s-2.1-83.4 7.3-107.3c6.2-15.7 18.9-28.4 34.6-34.6 23.9-9.5 80.5-7.3 107.3-7.3s83.4-2.1 107.3 7.3c15.7 6.2 28.4 18.9 34.6 34.6 9.5 23.9 7.3 80.5 7.3 107.3s2.2 83.4-7.3 107.3z"></path>
                  </svg>
                </a>
                <a href="#" className="flex items-center justify-center h-8 w-8 border border-gray-100 rounded-full hover:text-blue-400 hover:border-blue-400">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.5 90.9 225.9 209 247.4v-175H126v-72.4h91V208c0-90.1 54-139.4 136.6-139.4 39.6 0 81.2 7 81.2 7v89.2h-45.7c-45.1 0-59.1 28-59.1 56.6v67.7h100.4L396 328.9h-90.6V504C413.1 481.9 504 379.5 504 256z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-3 text-gray-500 text-center">
        <p>&copy; 2023 All Rights Reserved by  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}ZENEX{" "}
          </span></p>
      </div>
    </footer>
  );
};

export default Footer;
