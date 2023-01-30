import React from "react";
import "./about.css";
import man from "../../images/man.jpg";
import Pdf from "../../assets/cv.pdf";
const About = () => {
  return (
    <div className="aboutpage">
      <div className="leftcon">
        <h1 className="abouttitle">Abdul Aziz</h1>
        <h5>A MERN STACK DEVELOPER</h5>
        <article className="aboutdesc">
          An enthusiastic engineering fresher who is a self-starter and capable
          to use technical skills for the betterment of the organization. A
          talented and creative web developer with an eye for detail looking for
          an entry-level role at a reputable company. Has hands-on knowledge in
          both Frontend and Backend skills.
        </article>
        <a href={Pdf} target="_blank" rel="noreferrer">
          <button>DOWNLOAD CV</button>
        </a>
      </div>

      <div className="rightcon">
        <img src={man} alt="" className="imge" />
      </div>
    </div>
  );
};

export default About;
