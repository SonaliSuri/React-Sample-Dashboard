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
import RedoIcon from '@material-ui/icons/Redo';
import Tooltip from '@material-ui/core/Tooltip';
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

class MouseOverPopover extends React.Component {
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
    const { classes,name,status } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
          <Tooltip title="Click for details">
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handlePopoverOpen}
          onInput={this.handlePopoverClose}
        >
        
          {this.props.name}
        </Typography>
        </Tooltip>
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
        
      <List component="nav" subheader ={<ListSubheader component="div" >{this.props.name}
    {this.props.status=="Failure"?<IconButton className={classes.button} aria-label="Retry" style={{float:'right'}}>
    <Tooltip title="Retry">
        <RedoIcon style={{color:"#f44336"}} />
        </Tooltip>
      </IconButton>:null}
      
      
      </ListSubheader>}>
        <ListItem button>
          
          <ListItemText primary="Run Time" secondary="12/18/2018 09:05:21" />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Data Volume(MB)" secondary={this.props.name=="Twitter Stream" || this.props.name=="Edgar Filings" || this.props.name=="Web Scrapper"?"28":"16"} />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Record Count" secondary="14" />
        </ListItem>
      </List>    
      
      
    </div>
          
        </Popover>
      </div>
    );
  }
}

MouseOverPopover.propTypes = {
  classes: PropTypes.object.isRequired,
  name:PropTypes.string,
  status:PropTypes.string
};

export default withStyles(styles)(MouseOverPopover);
