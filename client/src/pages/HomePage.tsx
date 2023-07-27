import {Link } from 'react-router-dom'
import backgroundImage from "../assets/backgroundImage.jpg";

export default function HomePage() {
  
  return (
    <div className="w-screen ">
      <div className=" Background-Image relative">
        <div className="absolute top-40 left-40">
          <p className="text-3xl text-center text-white font-bold shadow-2xl">
            for your favorite african product
          </p>
          <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <Link to="/menu">shop with us</Link>
          </button>
        </div>
      </div>
      <div className=" flex">
        <img src={backgroundImage} className="w-6/12 m-10" />
        <div className="m-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2191.9211665734047!2d12.852563815966569!3d56.675600980810295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651a33ae76bab51%3A0x8ccdd6551859d833!2sAfro%20Caribbean%20salong!5e0!3m2!1sen!2sse!4v1689441025119!5m2!1sen!2sse"
            width="500"
            height="450"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
