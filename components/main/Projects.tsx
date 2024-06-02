import React from 'react';
import Image from 'next/image';

const BlogGrid = () => {
  return (
    <div className="min-h-screen w-full dark:bg-gray-900">
      <div className="w-full mx-auto py-10 px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="max-w-3xl mx-auto text-center bg-white rounded-r-[60px] rounded-l-[60px] md:rounded-r-[120px] md:rounded-l-[120px] mb-8 md:mb-16 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight border-t-4 border-b-4 border-purple-600 py-2 sm:py-3 md:py-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold">Some Blogs</span>
          </h1>
        </div>
        <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article, index) => (
            <div
              key={index}
              className="relative flex flex-col justify-end px-4 pt-32 pb-4 overflow-hidden bg-gray-900 sm:pt-40 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50"
            >
              <Image
                src={article.image}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              <a
                className="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                href={article.link}
              >
                {article.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const articles = [
  {
    image: "/blog1.png",
    title: "In the fast-paced world of real estate, information is key. Whether you're a property investor, developer, or simply a prospective homeowner, having access to accurate and detailed data can make all",
    link: "https://www.agsrt.com/post/unlocking-the-potential-navigating-real-estate-with-the-power-of-gis",
  },
  {
    image: "/blog2.png",
    title: "Building a GIS Career— A Student’s Guide",
    link: "https://medium.com/@kavita_salvi/building-a-gis-career-a-students-guide-356adbef44d4",
  },
  {
    image: "/web.png",
    title: "Web developers around the world share the desire to write, debug, and ship code day in and day out. It’s not an easy job since most of the time you’re constantly",
    link: "https://www.thinkful.com/blog/web-developer-blogs/",
  },
];

export default BlogGrid;
