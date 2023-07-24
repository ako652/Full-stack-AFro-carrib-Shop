import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="flex justify-around bg-slate-950 p-4 content-center text-center text-white">
      <div>
        <h1>Customer Service</h1>
        <button className="bg-red-400 w-32 rounded-full">Contact Us</button>
      </div>
      <div className='w-96'>
        <LinkedInIcon  />
        <FacebookIcon  />
        <YouTubeIcon  />
      </div>
    </div>
  );
}
