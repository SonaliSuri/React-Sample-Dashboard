import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SimpleTable from './Table.js';
import SimpleBadge from './Badge.js';
import CardHeader from '@material-ui/core/CardHeader';
import MailIcon from '@material-ui/icons/Mail';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ViewAgendaIcon from  '@material-ui/icons/ViewAgenda';
import CloudIcon from '@material-ui/icons/Cloud';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import CustomizedDialogDemo from './Dialogs.js';
import ViewDetailsPopover from './ViewDetails.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },

};
const flexContainer = {
     display: 'flex',
     flexDirection: 'row',
    padding: 0,
  };
function ImgMediaCardDetails(props) {
    
  const { classes ,data} = props;
  console.log(classes);
  
  return (
    <Card className={classes.card}>
      <CardActionArea>
      <CardHeader
        style={
            {
              // background:
            //   background:data.status?"#4caf50":"#f44336",          
            }
        }
        title={data.name} 
       action={
           
      <CloudIcon 
      style={{color: data.status?"#4caf50":"#f44336"}}
        >
      </CloudIcon>
        
          }
        subheader="December 18, 2018"
      />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Company 1
          </Typography> */}
          <Typography component="p">            
            {/* <SimpleTable></SimpleTable> */}
            <List component="nav" style={flexContainer}>
        <ListItem button>          
          <ListItemText primary="Run Time" secondary="12/18/2018 09:05:21" />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Data Volumne(MB)" secondary="16"  />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Record Count" secondary="14" />
        </ListItem>
     </List>  
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    
  );
}

ImgMediaCardDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  data:PropTypes.object
};

export default withStyles(styles)(ImgMediaCardDetails);
