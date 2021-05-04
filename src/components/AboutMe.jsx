import React, { useEffect } from 'react'
import './AboutMe.scss';
import Picture from './sean.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='about'>
      <container className='contain'>
        <div className='about-me-info'>

        <p data-aos='fade-right'>
          <h1>Who Am I?</h1>
          <h2>I am a full-stack developer eager to create web applications and exploring new technological trends. My love and curiosity towards logical thinking and creative freedom has led me to pursue web development. I am looking to join a diverse and functional team, working towards a common goal. Team oriented, but also very independently driven. </h2>
          <h2>Besides coding what I do during my free time, I like to play basketball, golf, tennis and snowboard. I also enjoy fishing and cooking.</h2>
        </p>
          <div className='photo'>
            <img data-aos='fade-left' src={Picture} />
          </div>
      </div>
      </container> 
    </section>
  )
}

export default AboutMe
