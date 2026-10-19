import React from "react";
import "./style.css";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo";

export const Home = () => {
  return (
      <section id="home" className="home">
        <Seo
          title="Développeur web à Lille & cybersécurité | Codexium"
          description="Codexium aide entreprises et collectivités de Lille et des Hauts-de-France en développement web, applications métier et cybersécurité."
          path="/"
        />
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
            role="img"
            aria-label="Portrait de Rarib LAAMIMAT, développeur chez Codexium"
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
  );
};
