import React from "react";
import "../styles/Hero.scss";

const Hero = ({ info }) => {
  return (
    <div className="hero">
      <h1>Datos personales</h1>
      <img src="/assets/profile.jpg" alt={info.name} className="profile--img"/>
      <div className="card">
        <h1>
          {info.name} {info.lastName}
        </h1>
        <h4>{info.birthDate}</h4>
        <h4>
          📧<a href={"mailto:" + info.email}>yagocd10@hotmail.com</a>
        </h4>
        <h4>📱{info.phone}</h4>
        <h4>🌇{info.city}</h4>
        <h4>
          💾<a href={info.gitHub}>GitHub</a>
        </h4>
        <h4>
          <a href={info.linkedIn}>linkedIn</a>
        </h4>
      </div>
    </div>
  );
};

export default Hero;
