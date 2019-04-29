import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import MouseOverPopover from './Popover';
const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
const styles = theme => ({
  root: {
    width: '100%',
    //marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
 
  table: {
   // minWidth: 700,
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing.unit,
  },
  table: {
    fontFamily: theme.typography.fontFamily,
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  noClick: {
    cursor: 'initial',
  },
});



let id = 0;
function createData(name, status) {
  id += 1;
  return { id, name, status};
}

  


var state = {
    anchorEl: null,
  };
  var { anchorEl } = state;
function handlePopoverClose ()  {
    anchorEl= null 
  };
  
function  handlePopoverOpen (event) {
  //  anchorEl= event.currentTarget 
  };
function SimpleTable(props) {
   

const {anchorEl}= state;
 
   var { classes,feeds,data ,status,datastruct} = props;
  console.log("Details"+feeds);
  var  newsstatus='Success',twitterstatus='Success',yahoostatus='Success';
  if (feeds.name =='Motley Fool News' && feeds.clientname==data)
  {
      newsstatus=feeds.status;
  }
  else if (feeds.name =='Twitter Stream' && feeds.clientname==data)
  {
      twitterstatus=feeds.status;
  }
  else if(feeds.name =='Yahoo Pricing' && feeds.clientname==data)
  {
      yahoostatus=feeds.status;
  }
if(data=="Fund 2, LLP.")
{
    twitterstatus="Failure"
}
if(data=="Fund 3, LLP.")
{
    yahoostatus="In-Progress"
    twitterstatus="In-Progress"
}
  const rows = [
    createData(data=="Fund 2, LLP."?'Trading Economics RSS':data=="Fund 3, LLP."?'Email Tracker':"Motley Fool News", newsstatus),
    createData(data=="Fund 2, LLP."?'Edgar Filings':data=="Fund 3, LLP."?'Web Scrapper':'Twitter Stream', twitterstatus),
    createData(data=="Fund 2, LLP."?'Google Finance':data=="Fund 3, LLP."?'Geo spatial':'Yahoo Pricing', yahoostatus),
  ];
// if(feeds.clientname==data && feeds.status=='Failure')
//   datastruct.feedcountfailure++;
// // else if(feeds.clientname==data && (newsstatus=='Success' || twitterstatus=='Success' || yahoostatus=='Success'))

// else if (feeds.clientname==data && feeds.status=='In Progress')
//     datastruct.feedcountinprogress++;
// else if(feeds.clientname==data)
//     datastruct.feedcountsuccessful++;
//     console.log(datastruct)

  const open = Boolean(anchorEl);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell > <h3 style={{color:"#757575"}}>Feed Name</h3></TableCell>
            <TableCell > <h3 style={{color:"#757575",textAlign:"left"}}>Status</h3></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" style={{textAlign:"left",paddingLeft:"23px",paddingRight:"0px"}}>
               
         {/* {row.name} */}
        
         <MouseOverPopover name={row.name} status={row.status}></MouseOverPopover>
        
                </TableCell>
                <TableCell style={{textAlign:"left",paddingLeft:"23px",paddingRight:"0px"}} >{row.status}</TableCell>
            
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  feeds:PropTypes.object,
  data:PropTypes.string,
  status:PropTypes.string,
  datastruct:PropTypes.object
};

export default withStyles(styles)(SimpleTable);
