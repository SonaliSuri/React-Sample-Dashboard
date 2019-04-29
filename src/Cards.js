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
import { withState } from 'recompose';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import IconButton from '@material-ui/core/IconButton';
import CustomizedDialogDemo from './Dialogs.js';
import ViewDetailsPopover from './ViewDetails.js';
import App from './App.js'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },

};


function ImgMediaCard(props) {
    
    
  const { classes ,data,feeds,count} = props;
  //console.log(classes);
  if(data.name==feeds.clientname )
  {
  if(feeds.status=='Failure')
            data.feedcountfailure++;
    else if(feeds.status=='In-Progress')
          data.feedcountinprogress++;
    else{
            data.feedcountsuccessful++;
        }
}
var colors;
if((data.name==feeds.clientname && feeds.status=='Failure') ||data.name=="Fund 2, LLP.") 
{
colors="#f44336";
}
else if(data.name==feeds.clientname && feeds.status=="Success")
{
colors="#4caf50";
}
else if((data.name==feeds.clientname && feeds.status=="In-Progress")|| data.name=="Fund 3, LLP.")
{
colors="rgb(228, 149, 47)"
}
else{
    colors="#4caf50"; 
}
if(colors=="#4caf50")
{
    data.feedcountsuccessful++;
}

  return (
    <Card className={classes.card}>
      <CardActionArea style={{color:'snow'}}>
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
      style={{color: colors,marginRight:"6px"}}
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
                     
            <SimpleTable data={data.name} status={data.status} feeds={feeds} datastruct={data}></SimpleTable>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <SimpleBadge feedcountsuccessful={data.name=="Fund 2, LLP."?2:data.name=="Fund 3, LLP."?1:count} feedcountfailure={data.feedcountfailure}
        feedcountinprogress={data.feedcountinprogress}
        ></SimpleBadge>
        <IconButton
           
          >
            <CustomizedDialogDemo name={data.name}></CustomizedDialogDemo> 
            {/* <ViewDetailsPopover></ViewDetailsPopover> */}
          </IconButton>
        
      </CardActions>
    </Card>
    
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  data:PropTypes.object,
  feeds:PropTypes.object,
  count:PropTypes.string
};

export default withStyles(styles)(ImgMediaCard);
