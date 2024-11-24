import React, { useEffect, useRef } from "react";
import pdf from "../pdf/BHARATH.CV.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ["Full Stack Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="conatiner home" id="home">
        <div className="left">
          <h1 className="heading1">Hello Everyone!</h1>
          <h4 className="heading">My Name is <span className="name">Chakali Bharath Kumar</span></h4>
          <h2> I'm <span ref={typedRef} className="heading-js"></span></h2>
          
          <h3 className="heading">Passionate Full Stack Developer creating responsive and user-friendly applications</h3>

          <a
            href={pdf}
            download={"Bharath.Resume.pdf"}
            className="btn btn-outline-success my-3"
          >
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img">
            <img src={`/assets/${hero.imgSrc}`} alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
