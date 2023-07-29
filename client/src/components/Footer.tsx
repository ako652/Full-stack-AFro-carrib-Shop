
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="flex justify-around  xxl:h-screen bg-slate-950 p-4 content-center text-center text-white  ">
      <div>
        <h1>Customer Service</h1>
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Contact Us
        </button>
      </div>
      <div className="w-96">
        <LinkedInIcon />
        <FacebookIcon />
        <YouTubeIcon />
      </div>
    </div>
  );
}
