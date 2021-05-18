import React, { useEffect } from 'react';
import './Projects.scss';
import { Grid } from '@material-ui/core';
import Content from './Content';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);


  return (
    <section className='whole-page' id='projects'>
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
            <Grid item xs={0} sm={8} />
            <Grid item xs={12} sm={8}>
              <Content />
            </Grid>
            <Grid item xs={0} sm={8} />
        </Grid>
        <h1 className='wrapper'>&lt;/projects&gt;</h1>
    </section>
  )
}

export default Projects
