/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Link from 'next/link'




const Hero = () => {
  return (
    <div className=' flex flex-col justify-center items-center text-center pb-16  '> 
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ">Unlock Your Potential </h1>
        <p className="text-base md:text-xl  leading-relaxed  md:px-14">
        At SAAED, our mission is to empower individuals and organizations by providing expert guidance and support through our diverse range of services and research initiatives.        </p>
    

{/* <Dialog>
  <DialogTrigger> */}
    <Link href='/book'
    className='  bg-black  text-white text-lg font-semibold  px-8 py-2 rounded-full mt-8'>Book Now</Link>
    {/* </DialogTrigger>
  <DialogContent> */}
    

  {/* <form className="max-w-sm mx-auto"> 
  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
  <input type="email" id="email" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"/>
  <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>


  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

<option>Individual</option>
<option>Bussines</option>

</select>
</form> */}



  {/* </DialogContent> */}
{/* </Dialog> */}



    </div>
  )
}

export default Hero



