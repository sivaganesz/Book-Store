import React from "react";
import Book3 from "../../assets/books/book5.jpg";

import Book5 from "../../assets/books/book2.jpg";
import Book1 from "../../assets/books/book12.png";
import Book2 from "../../assets/books/book15.png";
import Vector from "../../assets/website/pattern.jpg";

const ImageList = [
    {
        id: 1,
        img: Book5,
        title: "ATOMIC HABITS",
        author: "James Clear",
        description: "That provides a comprehensive guide on how to create good habits and break bad ones. The book is based on the idea that small, incremental changes can lead to significant improvements in our lives.",
    },
    {
        id: 2,
        img: Book1,
        title: "HIGH HANGING FRUIT",
        author: "Mark Rampolla",
        description: 'The book is a memoir that shares Rampolla’s journey of building a successful business, ZICO, and his philosophy on entrepreneurship, leadership, and innovation.',
    },
    {
        id: 3,
        img: Book2,
        title: "THE SUBTLE OF ART NOT GIVEING A F*CK",
        author: "Mark Manson",
        description: " The book challenges conventional self-help advice by encouraging readers to focus on what’s truly important in life and to stop trying to be positive all the time. Manson argues that by not giving a fck about everything, we can find a sense of purpose and fulfillment.",
    },
];

export const Hero = ({ handleOrderPopup }) => {
    const [imageId, setImageId] = React.useState(Book3);
    const [title, setTitle] = React.useState("WHO WILL CRY WHEN YOU DIE");
    const [author, setAuthor] = React.useState("Robin Sharma");
    const [description, setDescription] = React.useState(
        " The book is based on the idea that when you die, you want people to cry not just because they miss you, but also because they are grateful for the positive impact you had on their lives.."
    );

    const bgImage = {
        backgroundImage: `url(${Vector})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // height: "100%",
        width: "100%",
    };

    return (
        <>
            <div
                className="min-h-[550px] sm:min-h-[650px] bg-white flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 "
                style={bgImage}
            >
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/* text content section */}
                        <div
                            data-aos-once="true"
                            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                        >
                            <h1
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                {title}
                                <p className="bg-clip-text md:mr-5 text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary mt-2">
                                    by {author}
                                </p>{" "}
                            </h1>
                            <p
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className="text-xl font-semibold text-white sm:text-black md:text-black dark:sm:text-white"
                            >
                                {description}
                            </p>
                            <div>
                                <button
                                    data-aos="zoom-in"
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    onClick={handleOrderPopup}
                                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white font-semibold py-2 px-4 mt-2 rounded-full"
                                >
                                    Order Now
                                </button>
                            </div>
                        </div>
                        {/* Image section */}
                        <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                                <img
                                    data-aos='zoom-in'
                                    data-aos-duration="500"
                                    data-aos-delay="100"
                                    data-aos-once="true"
                                    src={imageId}
                                    alt="biryani img"
                                    className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                                />
                            </div>
                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                                
                                {ImageList.map((item) => (
                                    <img
                                        data-aos="zoom-in"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                        data-aos-once="true"
                                        src={item.img}
                                        onClick={() => {
                                            setImageId(
                                                item.id === 1 ? Book5 : item.id === 2 ? Book1 : Book2
                                            );
                                            setTitle(item.title);
                                            setDescription(item.description);
                                        }}
                                        alt="biryani img"
                                        className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

