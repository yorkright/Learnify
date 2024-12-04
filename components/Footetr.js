import React from 'react'

const Footetr = () => {
    return (
        <footer className='bg-slate-700 text-teal-100 font-bold flex flex-col md:flex-row justify-between items-center py-6 px-6'>
        <div className="logo font-bold text-center md:text-left mb-4 md:mb-0">
            This is an education platform for better <br /> learning or provided live class according to buy subscription
        </div>
        <ul className='text-black flex flex-col ml-10 md:flex-row gap-4 md:gap-6 mb-4 md:mb-0'>
            <li>Connect with us</li>
            <li>-------</li>
            <li><a href="https://github.com/yorkright?tab=repositories">Github</a></li>
            <li>-------</li>
        </ul>
        <div className="container mx-auto text-center ">
            <p className="mb-4">© 2024 Education Platform. All Rights Reserved.</p>
            <div>
                <a href="#" className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out">Privacy Policy</a>
                <a href="#" className="inline-block bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition duration-300 ease-in-out">Terms of Service</a>
                <a href='/contact'  className="inline-block cursor-pointer bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300 ease-in-out">
                Contact
            </a>
            </div>
        </div>



        
    </footer>
    
    )
}

export default Footetr