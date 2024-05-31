import React from 'react'
import boardimg from '../../assets/website/board.png'
import appstore from '../../assets/website/app_store.png'
import playstore from '../../assets/website/play_store.png'
export const AppStore = () => {
    const BannerImg = {
        backgroundImage: `url(${boardimg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repect',
        backgroundSize: 'cover',
        height: '100%',
        weight: '100%',
    }
    return (
        <>
            <div className='bg-gray-100 dark:bg-gray-800 text-white py-10' style={BannerImg}>
                <div className='container'>
                    <div>
                        <p className='text-2xl text-center font-bold sm:text-4xl'>Read Books at your fignertips</p>
                        <div className="flex items-center justify-center pt-10">
                            <img src={playstore} alt="" className='w-[120px] sm:w-[150px] md:w-[180px]'/>
                            <img src={appstore} alt="" className='w-[120px] sm:w-[150px] md:w-[180px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
