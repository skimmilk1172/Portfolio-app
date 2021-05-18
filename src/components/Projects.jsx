import React, { useEffect, useState } from 'react';
import './Projects.scss';
import { Grid } from '@material-ui/core';
import Content from './Content';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Freelance from './Freelance';
import Program from './Program';
import Inspect from './Inspect';





const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);


  return (
    <div className='whole-page' id='projects'>
      <div>
        <h1 className='wrapper'>&lt;projects&gt;</h1>
          <Grid 
            data-aos='fade-up'
            item
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '10vh' }}>
              <Grid item xs={0} sm={10} m={4} l={1} />
              <Grid item xs={12} sm={10} m={4} l={1}>
                <Content />
              </Grid>
              <Grid item xs={0} sm={12} />
          </Grid>
        <h1 className='wrapper'>&lt;/projects&gt;</h1>
      </div>
        <span className='undraw'>
          < Freelance />
        </span>
    </div>
  )
}

export default Projects





// Parallax attempt

{/* <div className='div2'>
<span className='undraw' style={{ transform: `translateY(-${offsetY * 0.1}rem)` }}>
    <Freelance />
  </span>
</div>
<span className='undraw2' style={{ transform: `translateY(-${offsetY * 0.1}rem)` }}>
  <Program />
</span>
<span className='undraw3' style={{ transform: `translateY(-${offsetY * 0.1}rem)` }}>
  <Inspect />
</span> */}