// pages/about.js
import Image from 'next/image';
import Head from 'next/head';
import 'animate.css';

export default function About() {
  return (
    <div>
      <Head>
        <title>About ZENEX</title>
      </Head>

      <div className="relative flex items-center justify-center h-screen bg-gray-100 sm:h-96">
        {/* Text Section */}
        <div className="absolute left-0 p-8 rounded-r-[120px] bg-white bg-opacity-75 z-10">
          <h1 className="text-4xl  md:text-6xl font-bold">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-50xl  font-bold">ZENEX</span></h1>
        </div>

        {/* Image Section with fade-down effect */}
        <video className="absolute inset-0 w-full h-full object-cover z-0 fade-down" autoPlay loop muted>
  <source src="/1851190-uhd_3840_2160_25fps.mp4" type="video/mp4" />
</video>

      </div>

      {/* Information Section */}
      <div className="p-10 m-5 shadow-inner bg-white border-2 border-cyan-300">
        <p className="text-lg leading-relaxed p-5 mb-4 hover:bg-black rounded-lg hover:text-white transition-colors duration-300">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl md:text-xl font-bold">ZENEX</span> is a leading technology service company specializing in GIS (Geographic Information Systems). We leverage Geospatial and Software Technologies to support businesses and organizations worldwide. In the last 10 years, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl md:text-xl font-bold">ZENEX</span> has cemented its position as one of the largest and trusted GeoICT companies in India. With an impressive portfolio of 500+ successful projects and 150+ clients across 10 different market verticals, we have become synonymous with quality and innovation.
        </p>
        
      </div>
      

      <h1 class="bg-slate-800 text-white   m-5 py-4 mt-4 mb-4 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
    Why Choose Us
  </h1>

      {/* Divider */}
      <hr className=" border-black " />

      {/* Mission, Vision, and Values Section */}
      <div className="bg-gray-100 m-5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission Section */}
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:animate__animated hover:animate__tada">
              <h2 className=" rounded-md text-2xl font-bold  mb-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white">Mission</h2>
              <div className="flex justify-center mb-4">
                <iframe 
                  src="https://lottie.host/embed/27533efb-1197-4c3b-8d99-8e7a5ccf2f49/wlfOuJIe8p.json" 
                  className="w-32 h-32 sm:w-24 sm:h-24" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-stone-500 hover:bg-black p-2 rounded-2xl hover:text-white transition-colors duration-300  text-lg leading-relaxed">
                Our mission is to harness the power of GIS technology to drive sustainable development, delivering cost-effective solutions through innovation and process improvement.
              </p>
            </div>
            {/* Vision Section */}
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:animate__animated hover:animate__tada">
              <h2 className=" text-white text-2xl font-bold mb-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md">Vision</h2>
              <div className="flex justify-center mb-4">
                <iframe 
                  src="https://lottie.host/embed/6789f2e6-e49a-41c1-adad-0ae4513d74ca/PBf9PDV0v2.json" 
                  className="w-32 h-32 sm:w-24 sm:h-24" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-stone-500  hover:bg-black p-2 rounded-2xl hover:text-white transition-colors duration-300 text-lg leading-relaxed">
                We envision to become a trusted global GeoICT solution provider for innovative and customized applications leading to sustainable outcomes.
              </p>
            </div>
            {/* Values Section */}
            <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:animate__animated hover:animate__tada">
              <h2 className=" text-white text-2xl font-bold mb-2  bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md ">Values</h2>
              <div className="flex justify-center mb-4">
                <iframe 
                  src="https://lottie.host/embed/ca277d6f-b4e5-4a2c-87fb-914e0e6ba73c/9proSl3jq2.json" 
                  className="w-32 h-32 sm:w-24 sm:h-24" 
                  frameBorder="0" 
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-stone-500 hover:bg-black p-2 rounded-2xl hover:text-white transition-colors duration-300text-lg leading-relaxed">
                Inclusion, sustainability, cutting-edge tech, on-time delivery, & affordability. Experience our customer-centric approach for a positive impact on society & environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our People Section */}
      <div className="   ">
      <h1 class="bg-slate-800 text-white   m-5 py-4 mt-4 mb-4 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center ">
    Our Team
  </h1>
      

        <div className="max-w-7xl text-stone-500 rounded-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div>
              
              <p className="text-lg bg-white rounded-lg pe-5 hover:bg-black  hover:text-white transition-colors duration-300 py-8 text-center leading-relaxed mb-4">
                <span className="text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl md:text-xl font-bold">ZENEX</span> employs more than 30 highly-specialized professionals at our global facilities. We bring significant experience in the deployment and integration of GIS, engineering, and related technologies.
              </p>
              
              <p className="text-lg py-8  pe-5 bg-white hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg text-center  leading-relaxed">
                <span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl md:text-xl font-bold">ZENEX’s</span> expertise shines through the caliber of its people, innovative processes, and the passion that our team brings to every project. We enable excellence through a proven delivery approach that combines the latest in technology with experience to help customers maximize the value inherent in their systems and assets.
              </p>
            </div>
            
            {/* Image Section */}
            <div className="relative w-full h-64 transition duration-900 hover:filter hover:grayscale  md:h-96 text-center  bg-white rounded-lg shadow-md hover:shadow-lg  ">
              
              <Image
                src="/Screenshot 2024-05-20 140942.png"
                alt="Our People"
                layout="fill" 
                objectFit="cover"
                className="rounded-lg  shadow-lg"
              />
              
            </div>
            
          </div>
        </div>
      </div>









      <div class="text-gray-600 body-font"> 
  <div class="container px-5 py-24 mx-auto">
    <h1 class="bg-slate-800 text-white   m-5 py-4 mt-4 mb-4 rounded-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">Testimonials</h1>
    <div class="flex flex-wrap m-4">
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Sashirekha Mohanty, Founder and CEO with a 10 years of profound experience, is a trailblazer in the field of GIS industry.. Her visionary leadership and relentless pursuit of excellence have propelled <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}ZENEX{" "}
          </span> to unprecedented heights. Under her guidance, the company has flourished, setting new standards for innovation and customer satisfaction. Sashirekha&apos;s strategic acumen and unwavering commitment to quality serve as inspiration to all. Her remarkable journey is a testament to her passion, dedication, and relentless pursuit of success.





</p>
          <a class="inline-flex items-center">
          <iframe className='w-20 h-20' src="https://lottie.host/embed/e1144917-9619-463d-b4cb-81b6e76b4ac1/T5XuNSuGqd.json"></iframe>
            
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Sashirekha Mohanty</span>
              <span class="text-gray-500 text-sm">Founder and CEO</span>
            </span>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/2 w-full">
        <div class="h-full bg-gray-100 p-8 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p class="leading-relaxed mb-6">Jayasmita Sahoo, with 8 years of experience and as the co-founder of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}ZENEX{" "}
          </span>, brings unparalleled expertise to the GIS industry. Her visionary leadership and deep understanding of geospatial technologies have propelled <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}ZENEX{" "}
          </span> to the forefront of innovation. Jayasmita&apos;s commitment to delivering cutting-edge solutions and her passion for harnessing the power of spatial data make her a driving force in the GIS community. Her contributions have undoubtedly shaped the landscape of geospatial technology.</p>
          <a class="inline-flex items-center">
          <iframe className='w-20 h-20' src="https://lottie.host/embed/e1144917-9619-463d-b4cb-81b6e76b4ac1/T5XuNSuGqd.json"></iframe>
            
            
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900">Jayasmita Sahoo</span>
              <span class="text-gray-500 text-sm">Co-founder </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      
   
  
        

      
    </div>
    
  );
  
}


