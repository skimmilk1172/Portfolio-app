import React, { useEffect, useState } from 'react'
import './AboutMe.scss';
// import Picture from './sean.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Balloon from './Balloon';

const AboutMe = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='about1' id='about'>
      <container className='contain'>
        <div className='about-me-info'>

        <p data-aos='fade-right'>
          <h1 className='wordCarousel'>
            <span className='who-am-i'>Who Am I?</span>
            <div>
              <ul className='flip4'>
                <li>Sihun Sean Kim</li>
                <li>Software Developer 👨‍💻</li>
                <li>Sports Fan 🏀</li>
                <li>Foodie 🍣</li>
              </ul>
            </div>
          </h1>
          <h2>
            <a className='para'>
              I am a full-stack developer eager to create web applications and exploring new technological trends. My love and curiosity towards logical thinking and creative freedom has led me to pursue web development. I am looking to join a diverse and functional team, working towards a common goal. Team oriented, but also very independently driven. 
            </a>
          </h2>
          <h2> 
            <a className='para'>
              Besides coding what I do during my free time, I like to play basketball, golf, tennis and snowboard. I also enjoy fishing and cooking.
            </a>
          </h2>
        </p>
          {/* <div className='photo'>
            <img data-aos='fade-left' src={Picture} />
          </div> */}
          <div className='photo' style={{ transform: `translateY(-${offsetY * 0.1}rem)` }}>
            <Balloon />
          </div>
          
      </div>
      </container> 
    </section>
  )
}

export default AboutMe
