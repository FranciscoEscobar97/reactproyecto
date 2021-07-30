import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action:{
      marginTop:"1rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  
}));

export default function Productos({prod:{id,referencia,precio,imageUrl}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        /* avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        } */
        action={
          <Typography
              className={classes.action}
              variant='h5'
              color='textSecondary'>
              {accounting.formatMoney(precio,"$")}
          </Typography>
        }
        title="Cerveza Club Colombia Dorada "
        subheader="En stock"
      />
      <CardMedia
        className={classes.media}
        image="https://raw.githubusercontent.com/FranciscoEscobar97/imagenes/master/cerveza-club-colombia-dorada-lata-330ml%2C-6-pack.-4.7%25-abv-1.webp"
        title="ClubColombiaSix"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Club Colombia en lata six-pack
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Agregar al carro">
          <AddShoppingCart fontsize='large'/>
          
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography 
            paragraph>
                "Cerveza en lata x 350 mililitros x 6 unidades"
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
