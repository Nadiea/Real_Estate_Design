

import About from "./About";
import Agent from "./Agent";
import Feature from "./Feature";
import Property from "./Property";
import Testimonial from "./Testimonial";
import image from "/src/assets/photo-1560179707-f14e90ef3623.jpg";

export default function Home() {
  return (
    <>
      <div className="md:flex   justify-center gap-4 md:gap-40 md:mt-16 mt-4 items-center w-9/12 mx-auto">
        <div className="flex items-end justify-end">
          <div className="font-extrabold text-5xl text-center md:text-left" style={{ fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif" }}>
            Lets Start Search <br />
            For Your Dream Home
          </div>
        </div>
        <div className="grid md:justify-start justify-center font-sans font-semibold text-lg  md:block">
          <div className=" flex justify-center md:block hidden">
            Buying or selling a house
            <br />
            or an apartment is one of the biggest
            <br />
            decisions of a person’s life.
          </div>
          <div className=" md:justify-start flex justify-center">
            <button className="h-9  text-white text-xs rounded-lg w-40 mt-4 bg-blue-500" style={{ fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif" }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src={image} className="object-cover mt-5 w-full h-96" alt="Home" />
        <div className="absolute inset-0 top-[350px]  left-72 grid grid-cols-12 justify-center items-center">
        <div className="col-span-7  justify-center items-center bg-blue-600 h-14 rounded-md p-1 text-white hidden md:block">
            <div className=" flex gap-2 ">

              <div className=" flex p-1 gap-1">
                <div className=" border flex justify-center items-center rounded-full w-10">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div className=" text-sm  font-bold ">
                  <div>location</div>
                  <div>Calefonia,united states</div>
                </div>
              </div>

              <div>
                <div className=" flex p-1 gap-1">
                  <div className=" border flex justify-center items-center rounded-full w-10">
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
                        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className=" text-sm  font-bold ">
                    <div>price</div>
                    <div>10$-10000$</div>
                  </div>
                </div>

                <div></div>
              </div>


              <div>
                <div className=" flex p-1 gap-1">
                  <div className=" border flex justify-center items-center rounded-full w-10">
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
                        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </div>
                  <div className=" text-sm  font-bold ">
                    <div>Type of Property</div>
                    <div>Apartment</div>
                  </div>
                </div>

                <div>
</div>
              </div>


              <div className=" flex justify-center items-center  ml-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 bg-white rounded-md text-blue-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
            </div>
          </div> 
        </div>
      </div>
      <About />
      <Property />
      <Feature/>
      <Agent/>
      <Testimonial/>
    </>
  );
}
