import React from 'react'
import './AboutMe.scss';
import Picture from './sean.jpg'

function AboutMe() {
  return (
    <section className='about'>
      <container className='contain'>
        <div className='about-me-info'>

        {/* <img src={Picture} /> */}
        <p>
          <h1>Who Am I?</h1>
          <h2>I am a full-stack developer eager to create web applications and exploring new technological trends. My love and curiosity towards logical thinking and creative freedom has led me to pursue web development. I am looking to join a diverse and functional team, working towards a common goal. Team oriented, but also very independently driven. </h2>
          <h2>Besides coding what I do during my free time, I like to play basketball, golf, tennis and snowboard. I also enjoy fishing and cooking.</h2>
        </p>
      </div>
      </container> 
    </section>
  )
}

export default AboutMe