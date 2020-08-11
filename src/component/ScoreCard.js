import { useTable } from 'react-table'
import React, { Component } from 'react';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css'
import '../Scorecard.css'



import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import FixtureDataService from '../service/FixtureDataService';
import ScorecardDataService from '../service/ScorecardDataService';


function TabContainer(props) {
  return (
    <Typography component="div" >
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor:"#3F51B5"
  },
  indicator: {
    backgroundColor: 'red',
    fontSize:"20px",
   marginBottom:0
   
  },
  selected:{
    color:'white',
    background:'navy',
    fontSize:"20px"
  }
 
 
});

class ScoreCard extends Component{
  constructor(props){
    super(props);
this.state={
  fixture_id:this.props.match.params.id,
  data1:[],
  data2:[],
  data3:[],
  data4:[],
  value:0,
  team1:"",
  team2:"",
  team1_id:"",
  team2_id:"",
  series_name:"",
  fixture_date:"",
  fixture_time:"",
  venue:"",
  Batsmen:[],
  Bowlers:[],
  t1bat:[],
  t2bat:[],
  t1bowl:[],
  t2bowl:[]
}
this.getFixturedetails=this.getFixturedetails.bind(this)
this.refreshBowlers=this.refreshBowlers.bind(this)
this.refreshBatsmen=this.refreshBatsmen.bind(this)
  }
 
  componentDidMount() { 
  this.getFixturedetails();
    
    //this.refreshBatsmen(this.state.fixture_id)
  }

//   refreshBatsmen(id) {
//     ScorecardDataService.retrieveBatsmen(id)
//         .then(
//             response => {
//                 console.log(response);
//                 this.setState({Batsmen: response.data },()=>{
//                   this.state.Batsmen.map((bat)=>{
//                     if(bat.team_name===this.state.team1)
//                     this.state.t1bat.push(bat)
//                     else
//                     this.state.t2bat.push(bat)
//                   })
//                 })
//             }
//         )
// }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };
  getFixturedetails(){
    FixtureDataService.retrieveFixture(this.state.fixture_id)
    .then(response => this.setState({
        team1: response.data.team1,
        team2:response.data.team2,
        team1_id:response.data.team1_id,
        team2_id:response.data.team2_id,
        series_name:response.data.series_name,
        fixture_date:response.data.fixture_date,
        fixture_time:response.data.fixture_time,
        venue:response.data.venue 
        
    },()=>{
      this.refreshBatsmen();
       this.refreshBowlers();
      console.log(this.state.t1bat);
      console.log(this.state.t2bowl);
    })
    
    )
  }



  refreshBowlers(){
    ScorecardDataService.retrieveAllBowlersInAMatch(this.state.fixture_id)
      .then(
          response => {
              
             
                  response.data.map((bowl)=>{
                  if(bowl.team_name===this.state.team1)
                  this.state.t1bowl.push(bowl)
                  else
                  this.state.t2bowl.push(bowl)
                 this.setState({Bowlers:response.data})
          })
          }
      ); 
      
  }
  refreshBatsmen(){
    ScorecardDataService.retrieveBatsmen(this.state.fixture_id)
    .then(
        response => {
            
            
              response.data.map((bat)=>{
                if(bat.team_name===this.state.team1)
                this.state.t1bat.push(bat)
                else
                this.state.t2bat.push(bat)
                this.setState({Batsmen:response.data})
            })
          }   
    )
  }


  render(){
    var t1bat=this.state.t1bat
    const { classes } = this.props;
    const { value } = this.state;
    const columns = [{  
      Header: () => (
        <div
          style={{
            textAlign:"left"
          }}
        >Batsman</div>), 
      accessor: 'batsman_name',
      width:200
      // Cell: row => {
      //   return (
      //     <div>
      //       <span className="class-for-name">{row.row.Batsman.name} </span>
      //       <span className="class-for-desc"><i>{row.row.Batsman.desc} </i> </span>
      //       <span className="class-for-bowler">{row.row.Batsman.bowler}</span>
      //     </div>
      //   )
      // }
      
      },{  
      Header: 'R',  
      accessor: 'runs',
      width:90,
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      
      },
      {  
        Header: 'B',  
        accessor: 'balls',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {  
        Header: 'S/R',  
        accessor: 'strike_rate',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {  
        Header: '4s',  
        accessor: 'fours',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {  
        Header: '6s',  
        accessor: 'sixes',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      }
    ]  
    const columns2 = [{  
      Header: 'Bowler',  
      accessor: 'bowler_name',
      width:200,
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      
      
      },{  
      Header: 'Over',  
      accessor: 'overs',
      width:100,
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      
      },
      {  
        Header: 'M',  
        accessor: 'maiden_overs',
        width:100,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {  
        Header: 'Runs',  
        accessor: 'runs',
        width:100 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {  
        Header: 'W',  
        accessor: 'wickets',
        width:100 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      }
     
    ]  
    return(
   
                  <div>
                    <div>
                 
                    <div className="match_header">
                       <div className="stadium">
                        {this.state.venue} 
                       </div>

                       <div className="match_n_series">
                         <h2>{this.state.team1} Vs {this.state.team2}</h2>
                        {this.state.series_name}
                       </div>

                       <div className="match_time">
                         {this.state.fixture_date} {this.state.fixture_time}
                        
                       </div>
                       
                      
                       
                     </div>
                     <hr></hr>

                    <center>
                     <h3>SCORE CARD</h3>
                      </center>
                  
                      <br/><br/>
                     

                      <div  className="team_name">
                              <AppBar position="static" style={{backgroundColor:"#3F51B5"}} >
                                <Tabs  classes={{
                                        indicator: classes.indicator
                                    }}  variant="fullWidth" value={value}  style={{fontSize:"20px"}}  onChange={this.handleChange}>
                                  <Tab  classes={{ selected: classes.selected }} style={{fontSize:"20px"}} label={this.state.team1}  />
                                  <Tab  classes={{ selected: classes.selected }} style={{fontSize:"20px"}} label={this.state.team2} />
                                </Tabs>
                              </AppBar>
                             
                              {value == 0 && <TabContainer><div className="current_score" ><h3>WI 112/2 (Overs 8.3)</h3></div>
                                    <div className="table_div1">
                                  <ReactTable  
                                    columns={columns}  
                                    data={this.state.t1bat}
                                    NoDataComponent={() => null}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                  </div>
                                  <div className="table_div2">
                                 {this.state.t2bowl.length>0 &&
                                   <ReactTable  
                                    columns={columns2}  
                                    data={this.state.t2bowl}
                                    NoDataComponent={() => null}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                 }
                                    </div> 
                                    </TabContainer>}


                                    {value === 1 && <TabContainer><div className="current_score"><h3>PAK 240/8 (Overs 20)</h3></div>
                                    <div className="table_div1">
                                  <ReactTable  
                                    columns={columns}  
                                    data={this.state.t2bat}
                                    NoDataComponent={() => null}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                  </div>
                                  <div className="table_div2">
                                  <ReactTable  
                                    columns={columns2}  
                                    data={this.state.t1bowl}
                                    NoDataComponent={() => null}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                    </div> 
                                    </TabContainer>}
                      </div>
                    </div>
                    <div className="back">
                    <Button variant="contained" color="primary" className={classes.button}>
                      BACK
                    </Button>
                    </div>

                  </div>
    );
  }
}
ScoreCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ScoreCard);
