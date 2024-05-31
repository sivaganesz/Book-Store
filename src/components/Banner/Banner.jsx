import React from 'react'
import libraryimg from '../../assets/website/library.jpg'
import { GrSecure } from "react-icons/gr";
import { BiSolidOffer } from "react-icons/bi";
import { GiFoodTruck } from "react-icons/gi";
import { IoFastFood } from "react-icons/io5";



export const Banner = () => {
    return (
        <>
            <div className='py-10'>
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <div>
                            <img src={libraryimg} alt="" data-aos='zoom-right' data-aos-duration="500"
                                data-aos-delay="100" className='max-w-[380px] block mx-auto h-[300px] w-full  drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.8)]' />
                        </div>

                        <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                            <h1 data-aos='zoom-out' className='text-3xl sm:text-4xl font-bold'>Library at your fingertips</h1>
                            <p className='text-sm text-gray-500 tracking-wide leading-5'>Access thousands of books at your fingertips with our library app. Explore, read, and enjoy a vast collection anytime, anywhere, effortlessly transforming your reading experience.</p>
                            <div className="flex flex-col gap-4 ml-32 sm:ml-10 md:ml-20 w-[250px]">
                                <div data-aos='slide-left' data-aos-duration="500"
                                data-aos-delay="100"  className="flex items-center gap-4">
                                    <GrSecure className='text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-violet-300 dark:bg-violet-400 dark:text-black' />
                                    <p>Quality Books</p>
                                </div>
                                <div data-aos='slide-right' data-aos-duration="500"
                                data-aos-delay="100"  className="flex items-center gap-4">
                                    <IoFastFood className='text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-orange-300 dark:bg-orange-400 dark:text-black' />
                                    <p>Fast Delivery</p>
                                </div>
                                <div data-aos='slide-left' data-aos-duration="500"
                                data-aos-delay="100"  className="flex items-center gap-4">
                                    <GiFoodTruck className='text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-green-300  dark:bg-green-400  dark:text-black' />
                                    <p>Easy Payment method</p>
                                </div>
                                <div data-aos='slide-right' data-aos-duration="500"
                                data-aos-delay="100"  className="flex items-center gap-4">
                                    <BiSolidOffer className='text-4xl h-12 w-12 shadow-lg p-4 rounded-full bg-yellow-300 dark:bg-yellow-400 dark:text-black' />
                                    <p>Get offers on books</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
