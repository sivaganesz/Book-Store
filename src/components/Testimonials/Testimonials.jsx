import React from "react";
import Slider from "react-slick";

const testimonialData = [
    {
        id: 1,
        name: "Victor",
        text: "Fantastic selection of books! Found exactly what I was looking for and loved the seamless reading experience.",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 1,
        name: "Satya Narayan",
        text: "Great service and an easy-to-navigate site. Bought and started reading my favorite books in minutes!",
        img: "https://picsum.photos/105/105",
    },
    {
        id: 1,
        name: "vijayamoorthi",
        text: "Impressive collection and user-friendly interface. Buying and reading books has never been easier.",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 1,
        name: "Shiva lokesh",
        text: "Love the convenience! , Highly recommend this site! Quick purchase process and instant access to my new reads.",
        img: "https://picsum.photos/103/103",
    },
];


export const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <div data-aos="fade-up" data-aos-duration="300" className="py-10">
                <div className="container">
                    <div className="text-center mb-10 max-w-[600px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-semibold">
                            What our customers say
                        </p>
                        <h1 className="text-3xl font-bold mt-2">Testimonial</h1>

                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="300"
                        className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                    >
                        <Slider {...settings}>
                            {testimonialData.map((data) => {
                                return (
                                    <div className="" key={data}>
                                        <div
                                            key={data.id}
                                            className=" flex flex-col gap-4 shadow-lg py-6 px-6 mx-4 rounded-xl bg-primary/50  dark:bg-gray-600  relative"
                                        >
                                            <div>
                                                <img
                                                    className="rounded-full w-20 h-20"
                                                    src={data.img}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <p className="dark:text-gray-300 text-black/75 text-sm">{data.text}</p>
                                                    <h1 className="text-xl font-bold text-black/80 dark:text-light mt-2">
                                                        {data.name}
                                                    </h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

