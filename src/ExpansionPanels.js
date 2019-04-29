import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});
const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  };
function SimpleExpansionPanel(props) {
  const { classes,data } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded="true" >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}   
        style={{background:"#ecebeb"}}
        
        > 
          <Typography  className={classes.heading}>  {data=="Fund 2, LLP."?"Trading Economics RSS":data=="Fund 3, LLP."?"Email Tracker":"Motley Fool News"}</Typography>
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
          <Typography className={classes.heading}>{data=="Fund 2, LLP."?"Edgar Filings":data=="Fund 3, LLP."?"Web Scrapper":"Twitter Stream"}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
    <List component="nav" style={flexContainer}>
        <ListItem button>          
          <ListItemText primary="Run Time" secondary="12/18/2018 09:05:21" />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Data Volume(MB)" secondary="28"  />
        </ListItem>
        <ListItem button>         
          <ListItemText primary="Record Count" secondary="14" />
        </ListItem>
        
     
     </List>  
          
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary 
        style={{background:"#ecebeb"}}
        expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{data=="Fund 2, LLP."?"Google Finance":data=="Fund 3, LLP."?"Geo spatial":"Yahoo Pricing"}</Typography>
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
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  data:PropTypes.object
};

export default withStyles(styles)(SimpleExpansionPanel);
