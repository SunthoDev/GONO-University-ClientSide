import React, { useState, useEffect } from 'react';
import "./Banner.css"
import icon from "../../../assets/Icon/four.png"
import { Link } from 'react-scroll'
import one from "../../../assets/banner/one.png"
import two from "../../../assets/banner/two.png"
import three from "../../../assets/banner/three.png"
import four from "../../../assets/banner/four.png"
import five from "../../../assets/banner/five.png"
import six from "../../../assets/banner/six.png"

// =====================================================
// Import Swiper styles Start
// =====================================================
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-fade';
// =====================================================
// Import Swiper styles End
// =====================================================


const Banner = () => {


  return (
    <div className='BannerParent pt-[100px] md:pt-[140px] px-2 md:px-16'>

      <div className='Banner grid grid-cols-1 md:grid-cols-2 gap-5 items-center'>

        <div className='Left'>
          <h1 className="text-center md:text-left">Everything You Need to <br /> Learn and  A to Z</h1>
          <h3 className="text-center md:text-left">Up to <span className="text-[#673EE6]">14.67%</span> off Learn + Buy Course</h3>

          <div className="Support text-center md:text-left">
            <h4><i className="text-[#6441d9] mr-[10px] fa fa-check" aria-hidden="true"></i>Skill Elevation<i className="text-[20px] pl-[10px] fa fa-question-circle-o" aria-hidden="true"></i></h4>
            <h4><i className="text-[#6441d9] mr-[10px] fa fa-check" aria-hidden="true"></i>Optimized  Powerful Resources<i className="text-[20px] pl-[10px] fa fa-question-circle-o" aria-hidden="true"></i></h4>
            <h4><i className="text-[#6441d9] mr-[10px] fa fa-check" aria-hidden="true"></i>24/7 Support Session fo 3 times</h4>
          </div>

          <h5 className="text-center  md:text-left">৳<span>12,800</span>/Start</h5>

          <h6 className="text-center md:text-left">+ 4 Months Free Extra Support</h6>

          <Link to="Course" spy={true} smooth={true} offset={50} duration={500}><button className="py-[6px] w-[100%] md:w-[56%]">Claim Deal</button></Link>

          <div className='flex justify-center md:justify-start items-center mt-[16px]'>
            <img className='mr-[10px] w-[26px]' src={icon} alt="img" />
            <h2>
              30-Day You can ready to project Guarantee
            </h2>

          </div>

        </div>


        {/* =================================================== */}


        <div className='Right mt-[20px] md:mt-0'>

          <div className="slider">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              // dotte true click 
              pagination={{
                clickable: true,
              }}
              // sidebar click
              // navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-[100%]">
                  <img className="w-[100%] " src={one} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[100%]">
                  <img className="w-[100%] " src={two} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[100%]">
                  <img className="w-[100%] " src={three} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[100%]">
                  <img className="w-[100%] " src={four} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[100%]">
                  <img className="w-[100%] " src={five} alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-[100%]">
                  <img className="w-[100%] " src={six} alt="img" />
                </div>
              </SwiperSlide>

            </Swiper>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Banner;