import Image from 'next/image';

const ResponsiveImage = () => {
    return (
        <div className="">

            

    <div className='cont max-w-4xl mx-auto gap-6 shadow-md rounded-lg p-6 bg-stone-700  flex justify-center items-center flex-col'>

      <h1 className='text-2xl text-white'>1.File Based <span className='text-3xl font-serif text-red-600'>Routing</span></h1>
      <p className=''>
      Next.js uses a file-system based router where: Folders are used to define routes. 
      A route is a single path of nested folders, following the file-system
       hierarchy from the root folder down to a final leaf folder that includes a page.js file.

      </p>
      <ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400">
          <li>
          pages/index.js → / (Home page)
          </li>
          <li>
          pages/about.js → /about
          </li>
           <li>
           pages/blog.js → /blog
           </li>
        </ul>

      <div style={{ width: '50%', height:'40%',  margin: '0 auto' }}>
        {/* Responsive Image */}
        <Image
          src="/Screenshot (11).png" // Path to your image
          alt="Example Image"
          className=" border-4 border-white shadow-md"
          layout="responsive" // Automatically sizes based on parent container
          width={16} // Aspect ratio width
          height={9} // Aspect ratio height
          priority // Optional: Loads this image with high priority
        />
      </div>
      {/* <hr className='bg-black' /> */}
         </div>



<div className='cont max-w-4xl mx-auto gap-6 shadow-md rounded-lg p-6 bg-stone-700  flex justify-center items-center flex-col'>

<h1 className='text-2xl text-white'>1.File Based <span className='text-3xl font-serif text-green-400'>Routing</span></h1>
<p className=''>
Next.js uses a file-system based router where: Folders are used to define routes. 
A route is a single path of nested folders, following the file-system
 hierarchy from the root folder down to a final leaf folder that includes a page.js file.

</p>
<ul className="max-w-md space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400">
    <li>
    pages/index.js → / (Home page)
    </li>
    <li>
    pages/about.js → /about
    </li>
     <li>
     pages/blog.js → /blog
     </li>
  </ul>

<div style={{ width: '40%', height:'40%',  margin: '0 auto' }}>
  {/* Responsive Image */}
  <Image
    src="/Screenshot (11).png" // Path to your image
    alt="Example Image"
    className=" border-4 border-white shadow-md"
    layout="responsive" // Automatically sizes based on parent container
    width={16} // Aspect ratio width
    height={9} // Aspect ratio height
    priority // Optional: Loads this image with high priority
  />
</div>
   </div>
</div>
    );
};

export default ResponsiveImage;
