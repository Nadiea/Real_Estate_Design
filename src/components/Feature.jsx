import image from "/src/assets/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg";
export default function Feature() {
  return (
    <div className=" w-9/12 mx-auto mb-28">
      <h1
        className="font-extrabold text-3xl flex justify-center  mt-5 text-center md:text-left"
        style={{ fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif" }}
      >
        Featured Properties
      </h1>
      <p
        className="font-extrabold  flex justify-center  text-sm mt-1 text-slate-500  mb-5 "
        style={{
          fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif",
        }}
      >
        Using it can make you sound like you have been studying English for a
        long time Here are the challenges
      </p>
      <div className="">
        {" "}
        <img
          src={image}
          className=" relative rounded-3xl object-cover mt-10 w-full  md:h-96 h-72 "
          alt="Home"
        />{" "}
      </div>
      <div className=" hidden md:block  bg-blue-600 w-[400px] h-60 rounded-xl absolute top-[2250px] left-[700px] p-4 text-white">
        <h3
          className="text-2xl font-bold "
          style={{
            fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif",
          }}
        >
          Luxery Apartment Sea view sell in California
        </h3>
        <p className="text-lg font-bold mt-1 mb-1">$10000</p>
        <p className=" text-slate-50 text-xs">
          {" "}
          Using it can make you sound like you have been studying English for a
          long time Here are the challenges
        </p>
        <div className="text-xm font-bold flex text-white gap-2 mt-3 mb-3">
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
            <div className=" text-xs">5</div>
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
            <div className=" text-xs">1</div>
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
            <div className=" text-xs">4</div>
          </div>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-white rounded">
          More Details
        </button>
      </div>
    </div>
  );
}
