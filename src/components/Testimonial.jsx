import image from "/src/assets/images (1).jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
const data = {
  products: [
    {
      id: 1,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (1).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 2,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (2).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 3,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (3).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 4,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (7).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 5,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (5).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 6,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (6).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 7,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (8).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 8,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (7).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 9,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (5).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 10,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (2).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 11,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download (3).jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
    {
      id: 12,
      name: "Nadiea Akther",
      description:
        "Using it can make you sound like you have been studying English for a long time",
      location: "California",
      image: "/src/assets/download.jpg",
      bed: "2",
      bath: "2",
      car: "1",
    },
  ],
};

export default function Testimonial() {
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
        Testimonials
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
          <div className="w-10 h-10 p-1 border bg-blue-600">
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
         slidesPerView={window.innerWidth <= 768 ? 1 : 3} 
        //  slidesPerView={window.innerWidth >= 768 ? 4 : 2}
         onSlideChange={() => console.log("slide change")}
         onSwiper={setSwiper}
        className="grid md:grid-cols-9 grid-cols-2 md:w-9/12 w-10/12 mx-auto mt-5 gap-3 rounded-2xl "
      >
        {data.products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="border-white bg-white  rounded-3xl   w-11/12 mb-10 "
          >
           
          
            <div className="p-3">
             
              <p className="text-lg font-bold mt-2 mb-2 flex gap-1 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg> <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>


              </p>
              <p className="text-gray-500 text-xs">{product.description}</p>

             

              <div className="text-sm font-bold flex justify-between mt-3">
                <div className=" flex gap-2">
                  <div>
                    <img className=" h-8 w-8 rounded-full" src={image} />
                  </div>
                  <div className=" mt-0 text-slate-600 font-bold text-xs">
                  {product.name} <br/>
                  {product.location}
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

