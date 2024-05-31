import React from 'react'

import Book1 from "../../assets/books/book10.png";
import Book2 from "../../assets/books/book5.jpg";
import Book3 from "../../assets/books/book4.jpg";
import Book4 from "../../assets/books/book7.jpg";
import Book5 from "../../assets/books/book11.png";

import { FaStar } from "react-icons/fa";

const BookList = [

    {
        id: 1,
        img: Book1,
        title: "The power of habit ",
        author: "Charles Duhigg",
        rating: 4.2,
    },
    {
        id: 2,
        img: Book2,
        title: "Who Will Cry",
        author: "Robin Sharma",
        rating: 4.2,
    },
    {
        id: 3,
        img: Book3,
        title: "You Can Win",
        author: "Shiv Khera",
        rating: 4.2,
    },
    {
        id: 4,
        img: Book4,
        title: "Hyper Focus",
        author: "Chris Bailey",
        rating: 4.2,
    },
    {
        id: 5,
        img: Book5,
        title: "Grit",
        author: "Angela Duckworth",
        rating: 4.2,
    },


];
export const AllBooks = () => {
    return (
        <>
            <div className='py-10'>
                <div className="container">
                    <div data-aos='slide-up' data-aos-duration="500"
                        data-aos-delay="100" className="text-center">
                        <h1 className='font-bold bg-gradient-to-t text-primary'>Top Books for you</h1>
                        <h2 className='font-bold mt-3 text-3xl'>TOP BOOKS</h2>
                        <p className='mt-2'>Here are some of the best books that have been recommended by various sources</p>
                    </div>
                    <div className="py-6">
                        <div data-aos='slide-up' data-aos-duration="500"
                            data-aos-delay="200" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center">
                            {BookList.map((BooksData) => (
                                <div key={BooksData} className="hover:bg-gray-600 bg-white dark:bg-gray-900 shadow-md hover:text-white p-3 w-[220px] items-center justify-center flex rounded-lg mt-3">
                                    <div key={BooksData.id}><img src={BooksData.img} alt="" className='h-[220px] w-[150px] rounded-md pt-2 hover:scale-90' />
                                        <div className='mt-5'>
                                            <h2 className='font-bold text-lg'>{BooksData.title}</h2>
                                            <p>{BooksData.author}</p>
                                            <span className='flex gap-2 items-center'><FaStar className='text-yellow-500' />{BooksData.rating}</span>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className='items-center justify-center flex mt-7'>
                        <button data-aos='zoom-in' className=' bg-gradient-to-r to-primary from-primary text-white rounded-full p-2.5 hover:scale-105 '>View All Books</button>
                    </div>
                </div>
            </div>

        </>
    )
}
