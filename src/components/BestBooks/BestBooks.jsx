import React from 'react'
import Book1 from "../../assets/books/book6.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book12.png";
import { FaStar } from 'react-icons/fa';
const BookList = [
    {
        id: 1,
        img: Book2,
        title: "Atomic Habits",
        description:"That provides a comprehensive guide on how to create good habits and break bad ones"
    },
    {
        id: 2,
        img: Book1,
        title: "Rich Dad Poor Dad",
        description:
            "The teachings of his two dads: his real father, who was a poor man, and the father of his best friend, who was a rich man.",
    },
    {
        id: 3,
        img: Book3,
        title: "High Hanging Fruit",
        description:
            "The journey of building a successful business, ZICO, and his philosophy on entrepreneurship, leadership, and innovation.",
    },
];
export const BestBooks = ({handleOrderPopup}) => {
    return (
        <>
            <div className='py-10'>
                <div className="text-center">
                    <div className="max-w-[410px] mx-auto">
                        <h1 className='bg-clip-text bg-gradient-to-t to-text-primary from text-secondary font-semibold text-sm'>Trending Books</h1>
                        <p className='font-bold text-3xl'>Best Books</p>
                        <p className='mt-3 text-md font-semibold'>Here are some of the best books that have been recommended by various sources</p>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="500"
                                data-aos-delay="100" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mt-20">
                        {BookList.map((data) => (
                            <div className='dark:bg-gray-900 rounded-2xl bg-white sm:items-center sm:justify-center hover:bg-primary dark:hover:bg-primary hover:text-white   shadow-xl duration-high group max-w-[300px]' key={data.id}>
                                <div className='h-[100px]'><img src={data.img} alt="" className='rounded-sm max-w-[100px] block mx-auto transform -translate-y-14 group-hover:scale-105  duration-300 shadow-md' /></div>
                                <div>
                                    <div className='w-full items-center justify-center flex mt-2'>
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                        <FaStar className='text-yellow-500' />
                                    </div>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p className='text-gray-500  group-hover:text-white duration-300 text-sm line-clamp-2'>{data.description}</p>
                                    <button className='bg-primary to-secondary text-white px-4 py-2 mt-3 mb-3 group-hover:bg-gray-800 rounded-full' onClick={handleOrderPopup}>Order Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
