// components/StatsCounterSection.jsx
'use client';
import React from "react";

const StatsCounterSection = () => {
  return (
    <section id="stats-counter" className="stats-counter" style={{backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-honeycomb-white-background-picture-image_1151589.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div className="container" data-aos="fade-up">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <img src="/homepage/jobss.jpg" alt="" className="img-fluid" style={{height: "60vh", width: "60vh", borderRadius: "8px"}} />
          </div>
          <div className="col-lg-6">
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="2500" data-purecounter-duration="1" className="purecounter"></span>
              <span style={{marginRight: "1rem", position: "relative", left: "-.9rem"}}>+</span>
              <p><strong>Active Students</strong></p>
            </div>
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="3000" data-purecounter-duration="1" className="purecounter"></span>
              <span style={{marginRight: "1rem", position: "relative", left: "-.9rem"}}>+</span>
              <p><strong>Jobs</strong></p>
            </div>
            <div className="stats-item d-flex align-items-center">
              <span data-purecounter-start="0" data-purecounter-end="5500" data-purecounter-duration="1" className="purecounter"></span>
              <span style={{marginRight: "1rem", position: "relative", left: "-.9rem"}}>+</span>
              <p><strong>Active Applications</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounterSection;
