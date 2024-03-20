'use client';
import React from "react";

const OnlineCV = () => {
  return (
    <div className="online-cv cv-bg section-overly pt-90 pb-120" style={{backgroundImage: "url('resume.png')", backgroundSize: "cover"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="cv-caption text-center">
              <p className="pera2" style={{fontSize: '3rem'}}>Make a Difference with Your Online AI Resume!</p>
              <a href="https://myfusee.vercel.app" className="border-btn2 border-btn4">Generate Resume using AI</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCV;