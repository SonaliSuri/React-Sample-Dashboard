import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import FolderList from './Lists';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import ReplayIcon from '@material-ui/icons/Replay';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import CustomizedDialogDemo from './Dialogs.js';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const flexContainer = {
    // display: 'flex',
     flexDirection: 'column',
    padding: 0,
  };

const styles = theme => ({
//   popover: {
//     pointerEvents: 'none',
//   },
//   paper: {
//     padding: theme.spacing.unit,
//   },
root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class ViewDetailsPopover extends React.Component {
 ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
      }
  state = {
    anchorEl: null,
    open:true
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes,name } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handlePopoverOpen}
          size="small"
        >
          {this.props.name}<KeyboardArrowRightIcon />
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          onClose={this.handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          
          
        >
        <div className={classes.root}>
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}   
        style={{background:"#ecebeb"}}
        
        > 
          <Typography  className={classes.heading}>Motley Fool News</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <List component="nav" style={flexContainer}>
        <ListItem button>          
          <ListItemText primary="Run Time" secondary="12/18/2018 09:05:21" />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Data Volume(MB)" secondary="16"  />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Record Count" secondary="14" />
        </ListItem>
     </List>  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary style={{background:"#ecebeb"}}
          expandIcon={<ExpandMoreIcon />} >
          <Typography className={classes.heading}>Twitter Stream</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
    <List component="nav" style={flexContainer}>
        <ListItem button>          
          <ListItemText primary="Run Time" secondary="12/18/2018 09:05:21" />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Data Volume(MB)" secondary="16"  />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Record Count" secondary="14" />
        </ListItem>
        
     
     </List>  
          
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel >
        <ExpansionPanelSummary 
        style={{background:"#ecebeb"}}
        expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Yahoo Pricing</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <List component="nav" style={flexContainer}>
        <ListItem button>          
          <ListItemText primary="Run Time" secondary="12/18/2018 09:05:21" />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Data Volume(MB)" secondary="16"  />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Record Count" secondary="14" />
        </ListItem>
     </List>  
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    
      
      
    </div>
          
        </Popover>
      </div>
    );
  }
}

ViewDetailsPopover.propTypes = {
  classes: PropTypes.object.isRequired,
  name:PropTypes.string
};

export default withStyles(styles)(ViewDetailsPopover);
