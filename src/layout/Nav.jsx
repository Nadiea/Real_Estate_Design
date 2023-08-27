
import { Link } from 'react-router-dom';
import image from '/src/assets/download.png';

export default function Nav() {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-4 p-2 w-9/12 mx-auto">
      <div className="col-span-12 md:col-span-2 flex items-center justify-center">
        <img className="h-5" src={image} alt="Logo" />
      </div>
      <div className="col-span-12 md:col-span-8 flex items-center justify-center mt-2 md:mt-0">
        <ul className="flex gap-4 md:gap-6 list-none font-bold text-sm" style={{ fontFamily: "'Bodoni Moda', serif, 'Poppins', sans-serif" }}>
         <Link to={"/"}> <li>Home</li></Link>
         <Link to={"/about"}> <li>About</li></Link>
      <Link to={"/property"}>    <li>Property</li></Link>
      <Link to={"/agent"}>    <li> Our Agent</li></Link>
      <Link to={"/testimonial"}>    <li> Testimonial</li></Link>
        </ul>
      </div>
      <div className="col-span-12 md:col-span-2 flex items-center justify-center mt-2 md:mt-0">
        <button className="h-9 text-white font-sans text-sm font-bold    rounded-lg w-24  bg-blue-500">Login</button>
      </div>
    </div>
  );
}
