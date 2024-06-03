import Encryption from '@/components/main/Encryption';
import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    
    <div className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-r from-green-50/50 via-teal-50 to-green-50/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800">
      <a href=""
        className="border border-gray-700 dark:border-gray-300 rounded-lg py-2 px-4 text-gray-700 dark:text-gray-300 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-450">
        Forget about wasting time
      </a>
      <h1 className="mx-auto max-w-4xl font-display text-3xl  font-bold tracking-normal text-gray-700 dark:text-gray-300 sm:text-7xl">
        Revolutionize Your Career
        <span className="relative whitespace-nowrap text-gray-700 dark:text-gray-300"> and Future.</span>
        <span className="relative whitespace-nowrap text-orange-500 dark:text-orange-300">
          <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-500 dark:fill-orange-300/60" preserveAspectRatio="none">
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <span className="relative">with us</span>
        </span>
      </h1>
      <h2 className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-7">
        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl md:text-xl font-bold">ZENEX</span>, where we specialize in delivering top-notch GIS and Web development services. Our team of experts is dedicated to transforming data into actionable insights and creating web solutions that stand out.
      </h2>
      
      <div className="m-2 w-full mx-auto py-10 bg-gray-50 dark:bg-gray-900 dark:text-white">
        <div className="border  py-2 px-4 text-gray-700 dark:text-gray-300  mb-5 transition duration-300 ease-in-out hover:text-gray-500 dark:hover:text-gray-450-fit pb-1 mx-4 text-center items-center rounded-md  font-semibold text-2xl border-b-2 border-blue-600 dark:border-yellow-600">Services</div>

        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center items-stretch mt-4">
          <div className="lg:w-[50%] xs:w-full">
          <Image className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm" src="/gis services.png" alt="GIS Services" width={800} height={600} />
          </div>
          <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-450 md:p-4 xs:p-0 rounded-md">
            <h2 className="py-2 mt-3 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">GIS Services & Map Production</h2>
            <p className="text-md mt-4"><span className="text-transparent  bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-4xl md:text-xl font-bold">ZENEX’s</span> is a well-known GIS Company that offers clients all around the world a variety of GIS services. Our GIS mapping services provided by us allow users to visualize geographical data, perform analysis and manage data efficiently.We provided following services
</p>
<li className='bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2'>Mapping and Navigation</li>
              <li className='bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2'>CAD Design and
Drafting</li>
              <li className='bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2'>Land Information
Management</li>
          </div>
        </div>
        <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col md:flex-row lg:gap-4 xs:gap-2 justify-center items-stretch mt-6">
        <div className="lg:w-[50%] xs:w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-450 md:p-4 xs:p-0 rounded-md">
          <h2 className="py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
            Web Application Development Services
          </h2>
          <ul>
            <li className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2">
              Custom Web Application Development
            </li>
            <li className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2">
              Frontend and Backend Development
            </li>
            <li className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2">
              Responsive Web Development
            </li>
            <li className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2">
              E-commerce Solutions
            </li>
            <li className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2">
              Mobile App Development (if applicable)
            </li>
            <li className="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-xs text-center self-center px-4 py-2 m-2">
              Maintenance and Support
            </li>
          </ul>
        </div>
        <div className="lg:w-[50%] xs:w-full">
          <Image
            className="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
            src="/web.png"
            alt="Web Development"
            width={800}
            height={600}
          />
        </div>
      </div>
      <div id="features" class="container mx-auto px-4 space-y-6 bg-slate-50 py-8 md:py-12 lg:py-20">

    <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

        <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-centertext-base  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Features</h2>

        <p class="max-w-[85%] leading-normal hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg text-muted-foreground sm:text-lg sm:leading-7">
            The product can personalize user experiences by understanding individual preferences and tailoring
            recommendations or content based on user behavior and historical data.
        </p>

    </div>

    <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[450px] flex-col justify-between rounded-md p-6">
                
                <div class="space-y-2">
                <iframe src="https://lottie.host/embed/ffa47143-34c4-45a7-961e-6e152831b4bc/B7SEtGiQdU.json"></iframe>
                    <h3 class="py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Mapping and Navigation</h3>
                    <p class="text-sm hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg text-muted-foreground">Our Mapping and Navigation Services provide accurate geospatial data, real-time route optimization, 3D mapping, and fleet management, ensuring efficient travel, logistics, and enhanced spatial understanding for various industries.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[450px] flex-col justify-between rounded-md p-6">
                <div class="space-y-2">
                <iframe src="https://lottie.host/embed/cdc8838d-1b65-439b-8133-1e29ea990eef/u3MGNkLBe8.json"></iframe>

                    <h3 class="py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">CAD Design and Drafting</h3>
                    <p class="text-sm hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg">Our CAD Design and Drafting services offer precise 2D and 3D modeling, detailed technical drawings, and customizable designs, enhancing accuracy and efficiency for engineering, architecture, and manufacturing projects.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[450px] flex-col justify-between rounded-md p-6">
             
                <div class="space-y-2">
                <iframe src="https://lottie.host/embed/a3ae0c72-d3af-435d-8a1f-3a323500afd0/kVBsyMWCYh.json"></iframe>
                    <h3 class="py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Land Information Management</h3>
                    <p class="text-sm text-muted-foreground hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg">Our Land Information Management services provide comprehensive solutions for land data collection, analysis, and visualization, ensuring accurate property records, efficient land use planning, and streamlined decision-making for government and private sectors.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[450px] flex-col justify-between rounded-md p-6">
               
                <div class="space-y-2">
                <iframe src="https://lottie.host/embed/a4cfa27c-bba3-4e18-a485-767e8b0f82f9/v4veIQ9kkD.json"></iframe>
                    <h3 class="py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Responsive Web Development</h3>
                    <p class="text-sm text-muted-foreground hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg">Our Responsive Web Development services ensure websites adapt seamlessly to any device, providing optimal user experiences with flexible layouts, fast load times, and enhanced accessibility across desktops, tablets, and smartphones.
                        CSS.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[450px] flex-col justify-between rounded-md p-6">
                
                <div class="space-y-2">
                <iframe src="https://lottie.host/embed/fe241c43-b9ca-47fb-82c9-42d6095ebd18/m85NW5pXyo.json"></iframe>
                    <h3 class="py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">Frontend and Backend Development
</h3>
                    <p class="text-sm hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg  text-muted-foreground">Frontend and Backend Development involves creating the user-facing and server-side components of websites and applications respectively, ensuring seamless functionality, performance, and user experience across all interactions and devices.</p>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div class="flex h-[450px] flex-col justify-between rounded-md p-6">
                
                <div class="space-y-2">
                <iframe src="https://lottie.host/embed/ecd53a4e-f33d-467d-b78e-001e7120764a/esb7AEgNbP.json"></iframe>
                    <h3 class="py-2 px-4 mt-3 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">Maintenance and Support</h3>
                    <p class="text-sm text-muted-foreground hover:bg-black p-2  hover:text-white transition-colors duration-300 rounded-lg">Our Maintenance and Support services offer ongoing website and application upkeep, including regular updates, performance monitoring, security enhancements, bug fixes, and technical assistance, ensuring smooth and reliable operation at all times</p>
                </div>
            </div>
        </div>

    </div>
    <div>
      <Encryption/>
    </div>
    </div>

</div>

    </div>
  );
};

export default Services;
