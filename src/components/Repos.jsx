import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';



const Repos = (props) => {
  const { title, description, imgUrl, gitLink } = props;

  return (
    <Card>
      <CardHeader
        title={title}
      />
      <CardMedia
        style={{ height: '150px' }}
        image={imgUrl}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">GITHUB</Button>
      </CardActions>
    </Card>
  );
}

export default Repos;