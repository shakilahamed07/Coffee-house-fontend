import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[url(https://i.ibb.co/wNFPsRjw/13.jpg)] ">
      <div className="grid md:grid-cols-2 max-w-[1320px] mx-auto text-primary pt-25 px-2">
        <div className="mb-12">
          <img
            className="w-15"
            src="https://i.ibb.co/rRW20QXX/logo1.png"
            alt=""
          />
          <h1 className="text-5xl text-primary mt-4">Espresso Emporium</h1>
          <p className="text-gray-500 my-6 max-w-md">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex gap-3">
            <a href="">
              <FaFacebook size={25} />
            </a>
            <a href="">
              <FaTwitter size={25} />
            </a>
            <a href="">
              <FaInstagramSquare size={25} />
            </a>
            <a href="">
              <FaLinkedin size={25} />
            </a>
          </div>
          <h2 className="text-5xl text-primary my-6">Get in Touch</h2>
          <p className="flex gap-2 items-center">
            <FaPhone /> +88 01533 333 333
          </p>
          <p className="flex gap-2 items-center">
            <MdEmail size={18} />{" "}
            <span className="text-xl mt-1">info@gmail.com</span>
          </p>
          <p className="flex gap-2 items-center">
            <FaLocationArrow /> 72, Wall street, King Road, Dhaka
          </p>
        </div>

        {/* //*contact us */}
        <div className="md:mt-22">
          <h1 className="text-5xl mb-6">Contact with Us</h1>
          <form>
            {/* //*name input */}
            <fieldset className=" border-none rounded-box border py-2">
              <input
                type="text"
                name="Name"
                className="input bg-white border-none w-full"
                placeholder="Name"
                required
              />
            </fieldset>
            {/* //*Email input */}
            <fieldset className=" border-none rounded-box border py-2">
              <input
                type="text"
                name="email"
                className="input bg-white border-none w-full"
                placeholder="Email"
                required
              />
            </fieldset>
            {/* //*massage */}
            <fieldset>
              <textarea
                className="textarea w-full border-none"
                placeholder="Massage"
              ></textarea>
            </fieldset>
            {/* //&submit btn */}
            <button className="btn mt-4 rounded-xl border-primary border-1 bg-none text-primary hover:bg-secondary mb-5">Send Massage</button>
          </form>
        </div>
      </div>
      <div className="bg-[url(https://i.ibb.co/qY4xCqSC/24.jpg)]">
        <p className="text-center py-2 text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
