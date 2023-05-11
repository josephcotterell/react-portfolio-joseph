import React from "react";
export default function Home() {
  return (
    <div>
      <section id="hero">
        <div className="hero container">
          <div>Joseph Cotterell</div>
        </div>
      </section>
      <section id="about">
        <div className="about container">
          <div className="col-left">
            <div className="about-img"></div>
          </div>
          <div className="col-right">
            <h1 className="section-title">About Me</h1>
            <h2>Full-Stack Developer</h2>
            <p>
              Hi, my name is Joseph. I am a full software developer from
              Birmingham. I recently graduated from Birmingham University where
              I participated in a 6 month coding bootcamp. Here you will find my
              portfolio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
