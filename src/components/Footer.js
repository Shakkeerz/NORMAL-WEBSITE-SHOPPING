import { data } from "autoprefixer";

import {footerData,socialIcons} from '../data/Data'

function Footer() {
 

  const liStyle =
    "hover:underline  underline-offset-8 cursor-pointer capitalize pb-4";
  return (
    <div className="p-10 bg-slate-200">
      <div className="flex justify-end">
        <ul className="flex justify-between rounded-lg shadow-inner  w-2/5 bg-white p-3">
          
          {socialIcons.map(icon=>{
            return <li className="text-2xl font-bold hover:text-red-500 bg-white cursor-pointer" >{icon}</li>
          })}
        </ul>
      </div>

      <div className="flex justify-between mt-4">
        <ul>
          {Object.values(footerData.Conections).map((data) => {
            return <li className={liStyle}>{data}</li>;
          })}
        </ul>

        <ul>
          {Object.values(footerData.company).map((data) => {
            return <li className={liStyle}>{data}</li>;
          })}
        </ul>

        <ul>
          {Object.values(footerData.socials).map((data) => {
            return <li className={liStyle}>{data}</li>;
          })}
        </ul>
      </div>

      <div>
        <p className="text-center">
          © Copyright 2025 Mobirise - All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
