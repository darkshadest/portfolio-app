import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import backgroundImage from '../../assets/images/IMG_7759.jpeg';
import { Icon } from "@iconify/react";
import html5Icon from "@iconify/icons-logos/html-5";
import reactIcon from "@iconify/icons-logos/react";
import javaIcon from "@iconify/icons-logos/java";
import androidIcon from "@iconify/icons-logos/android-vertical";
import pythonIcon from "@iconify/icons-logos/python";
import * as url from "url";

const divStyle = {
  backgroundImage: `url(${backgroundImage})`,
};

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
          <div className="h_bg-image order-1 order-lg-2 h-100 " style={divStyle}>

          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                  />
                </h1>
                <p className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/about">
                    <div id="button_h" className="ac_btn btn">
                      About Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
                <div className="polaroid">
                  <span style={{cursor: "auto"}}>
                    <Icon
                        icon={javaIcon}
                        style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                    />
                    <Icon
                        icon={html5Icon}
                        style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                    />
                    <Icon
                        icon={reactIcon}
                        style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                    />
                    <Icon
                        icon={pythonIcon}
                        style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                    />
                    <Icon
                        icon={androidIcon}
                        style={{fontSize: "400%", margin: "9% 5% 0 5%"}}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
