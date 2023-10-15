import image from "/src/assets/images (1).jpg";
import first from "/src/assets/download (1).jpg";
import second from "/src/assets/download (2).jpg";
import img4 from "/src/assets/download (3).jpg";
import img5 from "/src/assets/download (7).jpg";
import img6 from "/src/assets/download (5).jpg";
import img7 from "/src/assets/download (6).jpg";
import img8 from "/src/assets/download (2).jpg";
import img9 from "/src/assets/download (7).jpg";
import img10 from "/src/assets/download (6).jpg";
import img11 from "/src/assets/download (6).jpg";
import img12 from "/src/assets/download (2).jpg";
import img13 from "/src/assets/download (2).jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
const data = {
  products: [
    {
      id: 1,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 19.99,
      image: first,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 2,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 29.99,
      image:second,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 3,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 39.99,
      image: img4,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 4,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 49.99,
      image: img5,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 5,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 59.99,
      image: img6,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 6,
      name: "Luxery Apartment in London",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 69.99,
      image: img7,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 7,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 79.99,
      image: img8,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 8,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 89.99,
      image: img9,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 9,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 99.99,
      image: img10,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 10,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 109.99,
      image: img11,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 11,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 119.99,
      image: img12,
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 12,
      name: "Luxery Apartment in California",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      price: 129.99,
      image: img13,
      bed: "2",
      bath: "2",
      car: "1",
    },
  ],
};

export default function Property() {
  function checkScreenSize() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 600) {
      location.reload(); 
    }
    if (screenWidth > 600) {
      location.reload();
    }
  }

  window.addEventListener('resize', checkScreenSize);
  const [swiper, setSwiper] = useState(null);

  const slidesPerView = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const onSlideChange = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  
  return (
    <div className=" bg-slate-100  pt-10 ">
      <div className="md:w-9/12 w-10/12  mx-auto md:flex md:justify-between mt-10 h-fit  ">
        <div
          className="font-extrabold text-3xl"
          style={{ fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif" }}
        >
          Explore the latest properties <br /> available
        </div>

        <div className="flex gap-2 mt-4 md:mt-0">
          <div className="w-10 h-10 p-1 border">
            <svg
              onClick={slidesPerView}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </div>
          <div className="w-10 h-10 p-1 border">
            <svg
              onClick={onSlideChange}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </div>
        </div>
      </div>
      <Swiper
         spaceBetween={16}
         slidesPerView={window.innerWidth <= 768 ? 2 : 3 } 
        // slidesPerView={3}
        
        
         onSlideChange={() => console.log("slide change")}
         onSwiper={setSwiper}
        className="grid md:grid-cols-9 grid-cols-2 md:w-9/12 w-10/12 mx-auto mt-5 gap-3 rounded-2xl "
      >
        {data.products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="border-white bg-white  rounded-3xl   w-11/12 mb-10 "
          >
            <div className="flex justify-center rounded-3xl  items-center ">
              <img
                className=" rounded-3xl object-cover relative  h-56 p-3"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div  className="w-7 hidden md:block h-7 absolute border top-5 left-[270px] rounded-md bg-slate-200" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="p-3">
              <h3
                className="md:text-2xl sm:text-xl font-bold "
                style={{
                  fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif",
                }}
              >
                {product.name}
              </h3>
              <p className="text-lg font-bold mt-1 mb-1">${product.price}</p>
              <p className="text-gray-500 text-xs">{product.description}</p>

              <div className="text-xm font-bold flex text-slate-900 gap-2 mt-3 mb-3">
                <div className=" flex gap-1 ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className=" text-xs">{product.bed}</div>
                </div>

                <div className=" flex gap-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                      />
                    </svg>
                  </div>
                  <div className=" text-xs">{product.bath}</div>
                </div>

                <div className=" flex gap-1 ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className=" text-xs">{product.bed}</div>
                </div>
              </div>
              <hr></hr>

              <div className="text-sm font-bold flex justify-between mt-3">
                <div className=" flex gap-2">
                  <div>
                    <img className=" h-8 w-8 rounded-full" src={image} />
                  </div>
                  <div className=" md:mt-2 mt-0 text-slate-600 font-bold text-xs">
                    Alexa Mate
                  </div>
                </div>

                <div className=" flex gap-1">
                  <div className=" border border-zinc-400 rounded-md h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <div className=" border border-zinc-400 rounded-md h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                  <div className=" border border-zinc-400 rounded-md h-6 w-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>


    
    </div>
  );
}

