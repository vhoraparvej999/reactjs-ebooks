import React from 'react';
import AppStoreImg from "../../assets/images/app_store.png";
import PlayStoreImg from "../../assets/images/play_store.png";
import BoardImg from "../../assets/images/board.png";

const bannerImg = {
    backgroundImage : `url(${BoardImg})`,
    backgroundPosition : "center",
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover",
    height : "100%",
    width : "100%",
};


const AppStoreBanner = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 text-white py-10"
        style={bannerImg}>
        <div className="container">
            <div className="space-y-6 max-w-xl mx-auto ">
                <h1
                data-aos="slide-up" 
                className='text-2xl text-center sm:text-4xl font-semibold'>Read Books At Your Fingertips</h1>
                <div 
                data-aos="slide-up"
                className='flex flex-wrap justify-center items-center gap-4'>
                <a href="#">
                    <img src={PlayStoreImg} 
                        className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                    />
                </a>
                <a href="#">
                    <img src={AppStoreImg}
                     className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" />
                </a>

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AppStoreBanner
