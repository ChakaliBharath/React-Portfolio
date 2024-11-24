import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Me</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/" className="items">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="https://www.facebook.com/" className="items">
            <FaFacebookSquare className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/bharath-chakali-/"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://x.com/i/flow/login?lang=en" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/ChakaliBharath" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a href="mailto:chakalibharath99@gmail.com" className="items">
            <MdEmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
