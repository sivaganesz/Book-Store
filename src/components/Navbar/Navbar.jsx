import React from 'react'
import Logo from '../../assets/website/books-stack.png'
import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { DarkMode } from './DarkMode';
import { Link } from 'react-router-dom';


const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Best Seller",
        link: "/bestbooks",
    },
];

const DropdownLinks = [
    {
        name: "Trending Books",
        link: "/#",
    },
    {
        name: "Best Selling",
        link: "/#",
    },
    {
        name: "Authors",
        link: "/#"
    }
]
export const Navbar = ({handleOrderPopup}) => {
    return (
        <>
            <div className="shadow-lg bg-white  dark:bg-gray-950 dark:text-white duration-300 border-2 rounded-md dark:border-0">
                <div className="container py-2 sm:y-0">
                    <div className="flex justify-between items-center">
                        <div className='md:ml-20 ml-5'>
                            <a href="/" className='font-blod text-2xl sm:text-3xl flex gap-2 '>
                                <img src={Logo} alt="logo" className='w-10' />
                              <p className='font-semibold'> SG-Books</p>
                            </a>
                        </div>
                        <div className='flex gap-4 items-center justify-between'>
                            <div><DarkMode /></div>

                            <ul className='gap-4 items-center hidden sm:flex '>
                                {
                                    Menu.map((menu) => (
                                        <li key={menu.id}>
                                        <Link to={menu.link} className='inline-block py-4 px-4 hover:text-primary duration-200'>
                                            {menu.name}
                                        </Link>
                                    </li>
                                    ))}
                                {/* dropdown-section  */}
                                <li className='group relative cursor-pointer'>
                                    <a href="#" className='flex gap-2 h-[68px] items-center'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className="hover:rotate-180 transition duration-300" />
                                        </span>
                                    </a>
                                    <div className='absolute -left-5 z-[10] hidden group-hover:block text-black p-2 bg-white rounded-sm shadow-md'>
                                        <ul>
                                            {DropdownLinks.map((lists) => (
                                                <li key={lists}><a href={lists.link} className='rounded-sm p-2 w-32 hover:bg-primary/20 inline-block'>{lists.name}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                            <button className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex gap-3 items-center hover:scale-105 duration-300' onClick={handleOrderPopup}>Order <FaCartShopping /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
