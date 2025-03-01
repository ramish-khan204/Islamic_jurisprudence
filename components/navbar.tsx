import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
<header className="text-gray-600 body-font bg-slate-200">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {/* <Image src={require("../../../public/images2.jpg")}alt="#"width={100}height={100} className='w-[60px]'/> */}
    </a> 
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <i><b><a className="mr-5 text-3xl hover:text-gray-900 text-center">Islamic Jurisprudence(Fiqh)</a></b></i>
      
    </nav>
  
  </div>
</header>

    </div>
  )
}

export default Navbar
