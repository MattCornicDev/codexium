import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">

                <h1 className="home-title">{introdata.title}</h1>

                <div className="box">
                  <div className="cercle"></div>
                </div>

                <h2 className="home-animated">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h2>

                <p className="home-description">{introdata.description}</p>

                <div className="intro_btn-action">
                  <Link to="/portfolio">
                    <div className="ac_btn">Mon Portfolio</div>
                  </Link>

                  <Link to="/contact">
                    <div className="ac_btn">Contactez-moi</div>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
