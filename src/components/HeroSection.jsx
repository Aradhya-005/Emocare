import React from "react";
import HeroImg from "../assets/heroImg.svg";
import Stars from "../assets/stargroup.svg";
import Decorative from "../assets/decorative.png";
import ListIcon from "../assets/listIcon.svg";
import ButterFly from '../assets/butterfly.png'
import Rings from "../assets/rings.svg";
import FAQs from "./FAQs";
import About from "./About";
import '../css/HeroSection.css'

function HeroSection() {
  const features = [
    "Sign up or log in to access all the features.",
    "Browse professional therapists based on your needs.",
    "Schedule a session via messaging or video call.",
    "Join the anonymous chatroom to connect with others.",
    "Reach out via the Contact Us page if you need help or guidance.",
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Take Control of Your Mental Health</h1>
          <p className="hero-subheading">
            Connect with therapists, chat anonymously, and find support.
          </p>
        </div>
        {/* <div className="hero-image"> */}
        <img src={HeroImg} alt="a girl meditating " loading="lazy"/>
        {/* </div> */}
      </section>
      <section className="about-section">
        <About />
      </section>
      <div className="decoratives">
        <img src={Stars} alt="group of stars" loading="lazy"/>
      </div>
      <section className="WhyEmocare">
        <h1>Why Emocare?</h1>
       <article>
       <p>
          <span>Professional Help:<br/> </span> Access a network of certified
          therapists who are ready to support you through messaging or video
          calls.
        </p>
        <p>
          <span>Anonymous Chatroom:<br/>  </span> Connect with others who may be going
          through similar challenges in a safe, anonymous space.
        </p>
        <p>
          <span>Support at Your Fingertips:<br/>  </span>
          With just a click, you can reach out for help, guidance, or simply
          have a conversation.
        </p>
       </article>
      </section>
      <section className="howItWorks-section">
        <img src={Decorative} alt="abstract shape" loading="lazy" />
        <div>
          <h1>How It Works</h1>
          <div className="process">
            {features.map((feature, index) => (
              <p key={index}>
                <img src={ListIcon} alt="a icon of square" loading="lazy" />
                {feature}
              </p>
            ))}
          </div>
        </div>
        <img className="butterfly-img" src= {ButterFly}/>
      </section>
      <div className="decoratives">
        <img src={Rings} alt=""  loading="lazy"/>
      </div>
      <section className="frequentQuestion-section">
        <FAQs />
      </section>
     
    </>
  );
}

export default HeroSection;
