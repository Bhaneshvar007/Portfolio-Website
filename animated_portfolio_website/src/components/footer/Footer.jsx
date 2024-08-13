import React from "react";
import { RiLinkedinFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-[#36454F] h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2
          data-aos="zoom-out"
          className=" font-bold text-5xl sm:text-3xl text-white">Let's Talk</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up" data-aos-duration="1000"

            href="https://www.linkedin.com/in/bhaneshvar-kshirsagar-301663291/"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <RiLinkedinFill className=" text-[#24A1DE] text-3xl hover:scale-125 cursor-pointer" />
            <p>Linkedin</p>
          </a>
          <a
            data-aos="fade-up" data-aos-duration="1200"

            href="https://wa.me/qr/J6QFXBTOM6C5I1"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-[#25D366] text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a href="https://www.instagram.com/ugr__abhishek/"
            data-aos="fade-up" data-aos-duration="1400"

            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-[#E1306C] text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px] text-white">
          | Copyright &copy; <span>2024 Web Addicted </span> All rights reserved
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
