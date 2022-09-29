import React from "react";
import { BsInstagram } from "react-icons/bs"
import { FiFacebook, FiTwitter } from "react-icons/fi"
import { AiOutlineYoutube } from "react-icons/ai"
function Footer() {
  const first_footer_links = ["Connectivity", "Dashboard", " Iot Sim Card"];
  const second_footer_links = ["About Us", "Blog", "Patnership", "Career"];
  const third_footer_links = ["Twitter", "Youtube", "Instagram", "Linked In"];

  const iconStyle = "text-lg hover:text-red-700 cursor-pointer"
  const liStyle = "hover:underline cursor-pointer mb-3"
  return (
    <>
      <footer className="shadow-lg bg-slate-200 py-10">
        <div className="flex justify-end">
        <div className="flex justify-between bg-slate-400 rounded-lg p-3 w-1/2 md:w-1/3">
       < BsInstagram className={iconStyle}/>
        <FiTwitter className={iconStyle}/>
        <AiOutlineYoutube className={iconStyle}/>
        <FiFacebook className={iconStyle}/>
        </div>
        </div>
        <div className="flex justify-between p-5">
          <ul>
            {first_footer_links.map((li) => (
              <li className={liStyle}>{li}</li>
            ))}
          </ul>
          <ul>
            {second_footer_links.map((li) => (
              <li className={liStyle}>{li}</li>
            ))}
          </ul>
          <ul>
            {third_footer_links.map((li) => (
              <li className={liStyle}>{li}</li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-center">© Copyright 2025 Mobirise - All Rights Reserved</div>
      </footer>
    </>
  );
}

export default Footer;
