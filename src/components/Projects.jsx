import React from 'react'
// import './Projects.scss';
import { Grid } from '@material-ui/core';
import Content from './Content';



const Projects = () => {



  return (
    
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} s={8}>
          <Content />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>

  )
}

export default Projects
