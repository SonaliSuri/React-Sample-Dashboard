import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SimpleExpansionPanel from './ExpansionPanels.js';
import PropTypes from 'prop-types';
import ImgMediaCardDetails from './ViewDetailsCard';
const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CustomizedDialogDemo extends React.Component {
   
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes,name} = this.props;
    return (
      <div>
          <Typography
         
          onClick={this.handleClickOpen}
          size="small"
        >
          View Details<KeyboardArrowRightIcon />
        </Typography>
       
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            {name} Metric Details
            <Typography size="small">
            {/* <Link target="_blank" to='http://www.google.com'>Google</Link> */}
            <a  target="_blank" href=" https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#dashboards:name=Datalake-POC">AWS Dashboard</a>
            </Typography>
          </DialogTitle>
          <DialogContent>
              
         
            <SimpleExpansionPanel data={name}></SimpleExpansionPanel>
            {/* <ImgMediaCardDetails data="Client"></ImgMediaCardDetails> */}
          </DialogContent>
      
        </Dialog>
      </div>
    );
  }
}
CustomizedDialogDemo.propTypes = {
    classes: PropTypes.object.isRequired,
    name:PropTypes.string
  };
  
export default CustomizedDialogDemo;