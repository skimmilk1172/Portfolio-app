import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import './Repos.scss';



const Repos = (props) => {
  const { title, description, imgUrl, gitLink } = props;

  return (
    <Card>
      <h1>
      <CardHeader
        title={title}
      />
      </h1>
      <CardMedia
        style={{
          height: 0,
          paddingTop: '56.25%', // 16:9,
          marginTop:'30'
        }}
        image={imgUrl}
      />
      <CardContent>
        <Typography variant="body2" component="p" className='description'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => window.open(gitLink, '_blank')} size="small">GITHUB</Button>
      </CardActions>
    </Card>
  );
}

export default Repos