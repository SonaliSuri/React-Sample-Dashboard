import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImgMediaCard from './Cards.js';
import DenseAppBar from './NavBar.js';
import PersistentDrawerLeft from './Drawer.js';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import DateAndTimePickers from './DatePicker.js'
const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
  typography: { useNextVariants: true },
});

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

 var getData=() =>
 {
 
 var data=[
    {id: 1,
    name: "Fund 1, LLP.",
    feeds:[
      {id: 1,
        name: "Motley Fool News"},
        {id: 2,
        name: "Twitter Stream"},
        {id: 3,
        name: "Yahoo Pricing"},  
        ]   ,
    status:1,
    feedcountsuccessful: 3,
  feedcountfailure:0,
feedcountinprogress:0},
    {id: 2,
    name: "Fund 2, LLP.",
    status:0,
    feeds:[
      {id: 1,
        name: "Motley Fool News"},
        {id: 2,
        name: "Twitter Stream"},
        {id: 3,
        name: "Yahoo Pricing"},  
        ]   ,
        feedcountsuccessful: 2,
        feedcountfailure:1,
      feedcountinprogress:0},
    {id: 3,
    name: "Fund 3, LLP.",
    status:2,
    feeds:[
      {id: 1,
        name: "Motley Fool News"},
        {id: 2,
        name: "Twitter Stream"},
        {id: 3,
        name: "Yahoo Pricing"},  
        ]   ,
        feedcountsuccessful: 1,
        feedcountfailure:0,
      feedcountinprogress:2},    
    ]
       if (data.status==1 && data.name=="Fund 1, LLP.")
       {
       //this.status.yahoosuccesscount++;
       //this.setState({yahoosuccesscount:this.state.yahoosuccesscount+1})
       this.setState({yahoosuccesscount: (this.state.yahoosuccesscount + 1)})
       }
       if (data.status==1 && data.name=="Fund 2, LLP.")
       {
       //this.status.yahoosuccesscount++;
       //this.setState({yahoosuccesscount:this.state.yahoosuccesscount+1})
       this.setState({twittersuccesscount: (this.state.twittersuccesscount + 1)})
       }
       if (data.status==1 && data.name=="Fund 3, LLP.")
       {
       //this.status.yahoosuccesscount++;
       //this.setState({yahoosuccesscount:this.state.yahoosuccesscount+1})
       this.setState({newssuccesscount: (this.state.newssuccesscount + 1)})
       }
    return data;
  
 }
 
function getFeedNames()
{
  var feednames=[
    {id: 1,
    name: "Motley Fool News"},
    {id: 2,
    name: "Twitter Stream"},
    {id: 3,
    name: "Yahoo Pricing"},    
    ]
}
 function getfeedsData()
 {
  var feeds= [
    {
      clientname:"Fund 1, LLP.",
      name:'Yahoo Pricing',
      status:'Success',
      previousstate:'Success',
      metrics:[
        {
          name:'Run Time',
          value:'12/18/2018 09:05:21'
        },
        {
        name:'Data Volume(MB)',
        value:'12'
        },        
        {
          name:'Record Count',
          value:'14'
        }
      ]            
      }        
    ]  
   
      return feeds;
 }
 

class App extends Component {
 constructor(){
   super();
   this.state = {count: 1,newssuccesscount:0,twittersuccesscount:0,yahoosuccesscount:9}
   this.feeds=getfeedsData();
   this.data=getData();
   this.startTimer()
   
   this.count=1;
   
 }
componentWillUnmount () {
  clearInterval(this.timer)
  //this.stopTimer()
}
 
tick () {
 // if (this.state.count%150==0)
  //{
    var data=getData();
    var feeds=getfeedsData();
    //var metrics=getMetrics();
    var count=1;
    
   var counter=count
    console.log(feeds.name)
    var mapfeeds={};
    var yahoosuccesscount=0;
    var feeds = this.feeds.map (
      function iterator( feeds ) {
       // feeds.clientname=this.data.name%2;
          feeds.previousstate=feeds.status;
          if(feeds.status=='Failure')
          feeds.status='In-Progress';
          else if(feeds.status=='In-Progress')
          feeds.status='Success';
          else feeds.status='Failure';
          var rndnum=Math.floor(Math.random()*(1000-1)+1)
         // feeds.name=data[(rndnum)%2].feeds[rndnum%2].name;
         if(feeds.status=="Success")
         feeds.name=data[0].feeds[rndnum%3].name;
         // feeds.name=data[counter%3].feeds.name;
         //feeds.clientname=data[rndnum%3].name;
         feeds.clientname=data[0].name;
         if(feeds.clientname==data.name)
         {
         data.status=feeds.status=="Success"?1:feeds.status=="Failure"?0:2;
         }
          mapfeeds=feeds;
        count=count  + 1;

      // if(feeds.clientname==data.name && feeds.status=='Failure')
      //   data.feedcountfailure++;
      
      // var st=this.state.count;
      // else if (feeds.clientname==data.name && feeds.status=='In-Progress')
      //   data.feedcountinprogress++;
    //   //   else{data.feedcountsuccessful++;}
    // if(feeds.clientname=="Client 1")
    // data.successcount++;
   }
  );
    //this.stopTimer();
    //this.setState({feeds: (feedsnew)})
    
 // }
  
   
    console.log(data.name)
  this.setState({count: (this.state.count + 1)})
  this.setState({successcount: (this.state.successcount)})
  this.setState({data:(this.data)})
  console.log("Feeds clientname"+this.data.name)
  //this.setState({yahoosuccesscount:data.name=="Client 1"?this.state.yahoosuccesscount+1:0})
  //this.setState({feeds:(mapfeeds)})
  
  
}
startTimer () {
  //clearInterval(this.timer)
  this.timer = setInterval(this.tick.bind(this), 35000)
 
}
stopTimer () {
  clearInterval(this.timer)
}
     
  render() {
    // data = data.map (
    //   function iterator( data ) {
    //     <ImgMediaCard></ImgMediaCard>
    //   }
    //   );
   
    data=getData();
    //feeds=getfeedsData();
     var mapfeeds={};
        var feeds = this.feeds.map (
          function iterator( feeds ) {
           
              mapfeeds=feeds;
           
            
          }
      );
     // console.log("Check val"+this.props.count)
     //if(data.feedcountfailure==0 && data.feedcountinprogress==0 && data.name==feeds.clientname)
    
   
var stcheck=this.state.successcount
//data.feedcountsuccessful=this.state.yahoosuccesscount
    var data = data.map (
      function iterator( data ) {
        // if(data.feedcountfailure==0 && data.feedcountinprogress==0)
        // data.feedcountsuccessful=data.feedcountsuccessful+1
      
      if(data.name == mapfeeds.clientname && data.name=="Fund 1, LLP." && mapfeeds.status!="Failure" && mapfeeds.status!="In-Progress" && data.feedcountfailure==0 && data.feedcountinprogress==0)
      {
      // 
      this.state.yahoosuccesscount=(this.state.yahoosuccesscount+1);
      }
      else if(data.name == mapfeeds.clientname && data.name=="Fund 2, LLP." && mapfeeds.status!="Failure" && mapfeeds.status!="In-Progress"  && data.feedcountfailure==0 && data.feedcountinprogress==0)
      {
      // 
      this.state.twittersuccesscount=(this.state.twittersuccesscount+1);
      }
      if(data.name == mapfeeds.clientname && data.name=="Fund 3, LLP." && mapfeeds.status!="Failure" && mapfeeds.status!="In-Progress" &&   data.feedcountfailure==0 && data.feedcountinprogress==0)
      {
      // 
      this.state.newssuccesscount=(this.state.newssuccesscount+1);
      }
       var client1=0,client2=0,client3=0,client=0;
       client1=(Math.floor(this.state.yahoosuccesscount/3));
       client2=(Math.floor(this.state.twittersuccesscount/3));
       client3=(Math.floor(this.state.newssuccesscount/3));
       if (data.name=="Fund 1, LLP.")
       client=client1;
       else if (data.name=="Fund 2, LLP.")
       client=client2;
       else if(data.name=="Fund 3, LLP.")
       client=client3;
        return(
          
        <ImgMediaCard 
        data={data} count={client}  feeds={mapfeeds}
        ></ImgMediaCard>
        );
      },this
  );
 
    return (
      
      <div className="App">
      {/* {this.data} */}
    
      <MuiThemeProvider theme={theme}>

      <PersistentDrawerLeft></PersistentDrawerLeft>
      
<div className="AppContent">

         {/* <h1>{this.state.yahoosuccesscount}</h1>  */}
        {/* <div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
        </div> */}
      
      {data}
</div>
    </MuiThemeProvider>
      </div>
   
    );
  }
}
// ImgMediaCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default App;
