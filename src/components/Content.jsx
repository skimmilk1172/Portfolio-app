import React from 'react';
import Repos from './Repos';
import { Grid } from '@material-ui/core';
import projectList from './constants';
import './Repos.scss';


const Content = () => {

  const getProjectList = (projectListObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <Repos { ...projectListObj } />
      </Grid>
    )
  }

  return (
    <Grid container spacing={4}>
        {projectList.map(projectListObj => getProjectList(projectListObj))}
    </Grid>

  )
}

export default Content;
