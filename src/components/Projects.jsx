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
    <section className='whole-page' id='projects' data-aos='fade-up'>
        <Grid 
          item
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}>
            <Grid item xs={0} sm={8} />
            <Grid item xs={12} sm={8}>
              <Content />
            </Grid>
            <Grid item xs={0} sm={8} />
        </Grid>
    </section>
  )
}

export default Projects
