import image from "/src/assets/wo1.jpg";
export default function Agent() {
  return (
    <div className="  w-9/12 mx-auto mt-5">
      <h1
        className="font-extrabold  text-3xl"
        style={{ fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif" }}
      >
        Our Agents
      </h1>
      <p
        className="font-extrabold   text-sm mt-1 text-slate-500  mb-5 "
        style={{
          fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif",
        }}
      >
        Using it can make you sound like you have been studying English <br />{" "}
        for a long time Here are the challenges
      </p>

      <div className="md:grid md:grid-cols-3   grid-cols-2  w-10/12 mx-auto mt-10  gap-3 rounded-2xl ">
        <div className=" bg-white shadow-md  rounded-3xl   mb-10">
          <div className="flex justify-center rounded-3xl   items-center ">
            <img
              className=" rounded-3xl object-cover relative  h-56   p-3"
              src={image}
            />
          </div>

          <div className="p-3">
            <h3
              className="text-2xl font-bold "
              style={{
                fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif",
              }}
            >
              Alecjen den1
            </h3>
            <p className="text-sm font-bold text-slate-400 mt-1 mb-1">
              studying English{" "}
            </p>
            <p className="text-gray-500 text-xs">
              {" "}
              Using it can make you sound like you have been studying English
              for a long time Here are the challenges
            </p>
          </div>
        </div>




        <div className=" bg-white shadow-md  rounded-3xl   mb-10">
        
          <div className="p-3">
            <h3
              className="text-2xl font-bold "
              style={{
                fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif",
              }}
            >
              Alecjen den2
            </h3>
            <p className="text-sm font-bold text-slate-400 mt-1 mb-1">
              studying English{" "}
            </p>
            <p className="text-gray-500 text-xs">
              {" "}
              Using it can make you sound like you have been studying English
              for a long time Here are the challenges
            </p>
            <div className="flex justify-center rounded-3xl   items-center ">
            <img
              className=" rounded-3xl object-cover relative  h-60    mt-3"
              src={image}
            />
          </div>

          </div>
        </div>



        <div className=" bg-white  shadow-md  rounded-3xl     mb-10">
          <div className="flex justify-center rounded-3xl  items-center ">
            <img
              className=" rounded-3xl object-cover relative  h-56   p-3"
              src={image}
            />
          </div>

          <div className="p-3">
            <h3
              className="text-2xl font-bold "
              style={{
                fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif",
              }}
            >
              Alecjen den3
            </h3>
            <p className="text-sm font-bold text-slate-400 mt-1 mb-1">
              studying English{" "}
            </p>
            <p className="text-gray-500 text-xs">
              {" "}
              Using it can make you sound like you have been studying English
              for a long time Here are the challenges
            </p>
          </div>
        </div>




      </div>
    </div>
  );
}
