import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import DoneIcon from '@material-ui/icons/Done';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import ErrorIcon from '@material-ui/icons/Error';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 1.7,
  },
  padding: {
    //padding: `0 ${theme.spacing.unit * 2}px`,
  },
});

function SimpleBadge(props) {
    // if(feedcountfailure==0 && feedcountinprogress==0)
    // {
    //     feedcountsuccessful++;
    // } 
   
  // this.state = {count: 1,successcount:0}
       
  var { classes,feedcountsuccessful ,feedcountfailure,feedcountinprogress} = props;
  
  //console.log("Feeds"+ {feedcountsuccessful});
 
  return (
    <div>
      <div>
        <Badge className={classes.margin} badgeContent={feedcountfailure==0 && feedcountinprogress==0?feedcountsuccessful++:feedcountsuccessful} color="primary">
          <CheckCircleIcon style={{color: "#4caf50"}} />
        </Badge>
        <Badge className={classes.margin} badgeContent={feedcountfailure} color="primary">
          <ErrorIcon style={{color: "#f44336"}} />
        </Badge>
        <Badge className={classes.margin} badgeContent={feedcountinprogress} color="primary">
          <WatchLaterIcon style={{color: "rgb(228, 149, 47)"}} />
        </Badge>
    
      </div>
  
    </div>
  );
}

SimpleBadge.propTypes = {
  classes: PropTypes.object.isRequired,
  feedcountsuccessful:PropTypes.string,
  feedcountinprogress:PropTypes.string,
  feedcountfailure:PropTypes.string
};

export default withStyles(styles)(SimpleBadge);
