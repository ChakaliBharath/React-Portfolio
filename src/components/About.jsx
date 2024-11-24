import React from "react";

const About = () => {
  return (
    <>
      <div className="container about pb-5" id="about">
        <h1 className="about-heading pb-3">About Me</h1>
        <div className="card-container"
        data-aos = "zoom-in-down"
        data-aos-duration = "1000"
        >
          <div
            className="card"
            style={{
              width: "70rem",
              border: "2px solid yellow",
              boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
            }}
          >
            <div className="card-body">
              <h5 className="card-title heading-t">Chakali Bhaarath Kumar</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary heading-p">
                Full Stack Developer
              </h6>
              <p className="card-text card-paragaph">
                I’m a passionate Front-End Developer with expertise in HTML,
                CSS, JavaScript, React.js, and React Native, dedicated to
                creating visually engaging, responsive, and user-friendly
                digital experiences. I have worked on projects like a Myntra
                clone, a to-do app, and a React Native parcel delivery
                application, showcasing my ability to solve challenges and
                deliver scalable, intuitive solutions. Combining technical
                expertise with creativity, I specialize in crafting seamless
                user interfaces tailored to modern business needs. I am eager to
                contribute my skills to innovative projects while growing as a
                developer <br />
                let’s collaborate to build something impactful!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
