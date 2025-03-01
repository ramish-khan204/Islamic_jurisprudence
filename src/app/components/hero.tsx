"use client";
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <div>
      <section className="text-black text-xl  body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto w-[30rem]"
        alt="hero"
        width={600}
        height={600}
        src={require("../../../public/image3.jpg")}     
         />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-700">
       Islamic Laws
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Holy Book ', ' The Sunnah','Ijma (Consensus)', 'Qiyas (Analogy)'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-36 h-1 bg-black'></div>
     <b> <p className="mb-8 leading-relaxed ">
      Sharia law is a religious law that lays down governing principles for spiritual, mental, and physical behavior that must be followed by Muslims. It categorizes all man's acts into five distinct categories: obligatory, recommended, permitted, discouraged, and forbidden.
      </p></b>
      <div className="flex justify-center">
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
