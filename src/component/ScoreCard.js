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
  },
  appbar_text:{
    fontSize:"20px"
  }
 
});

class ScoreCard extends Component{
  constructor(props){
    super(props);
this.state={
  data1:[],
  data2:[],
  data3:[],
  data4:[],
  value:0
}

  }
  componentWillMount(){
    const data = [{  
      Batsman: {name:'Rajesh', desc:'bowled',bowler:'Wasim'},  
      R: 49,
      B: 32,
      S_R:153,
      Fours:4,
      Sixes:1 
      },{  
       Batsman: {name:'Chris Gayle', desc:'bowled',bowler:'Asif'},  
       R: 32,
       B: 17,
       S_R:188,
       Fours:3,
       Sixes:0 
       }]  
       this.setState({data1:data});
       const data2 = [{  
        Bowler: 'Wasim',  
        Over: 5.3,
        M: 1,
        Runs:45,
        W:1
        
        },{  
          Bowler: 'Imran Khan',  
          Over: 3,
          M: 0,
          Runs:55,
          W:0 
         }] 
         this.setState({data2:data2});
         const data3 = [{  
          Batsman: {name:'Wasim', desc:'bowled',bowler:'Ramesh'},  
          R: 49,
          B: 32,
          S_R:153,
          Fours:4,
          Sixes:1 
          },{  
           Batsman: {name:'Shadab Khan', desc:'bowled',bowler:'Chris Gayle'},  
           R: 32,
           B: 17,
           S_R:188,
           Fours:3,
           Sixes:0 
           },
           {  
            Batsman: {name:'Ramdin', desc:'bowled',bowler:'Chris Gayle'},  
            R: 32,
            B: 17,
            S_R:188,
            Fours:3,
            Sixes:0 
            }]  
           this.setState({data3:data3});
           const data4 = [{  
            Bowler: 'Rovman Powell',  
            Over: 5.3,
            M: 1,
            Runs:45,
            W:1
            
            },{  
              Bowler: 'Chadwick Walton',  
              Over: 3,
              M: 0,
              Runs:55,
              W:0 
             },
             {  
              Bowler: 'Kesrick Williams',  
              Over: 3,
              M: 0,
              Runs:55,
              W:0 
             }] 
             this.setState({data4:data4});
  }
  
  handleChange = (event, value) => {
    this.setState({ value });
  };


  render(){
    
    const { classes } = this.props;
    const { value } = this.state;
    const columns = [{  
      Header: () => (
        <div
          style={{
            textAlign:"left"
          }}
        >Batsman</div>), 
      accessor: 'Batsman',
      width:250,
      Cell: row => {
        return (
          <div>
            <span className="class-for-name">{row.row.Batsman.name} </span>
            <span className="class-for-desc"><i>{row.row.Batsman.desc} </i> </span>
            <span className="class-for-bowler">{row.row.Batsman.bowler}</span>
          </div>
        )
      }
      
      },{  
      Header: 'R',  
      accessor: 'R',
      width:90,
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      
      },
      {  
        Header: 'B',  
        accessor: 'B',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {  
        Header: 'S/R',  
        accessor: 'S_R',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {  
        Header: '4s',  
        accessor: 'Fours',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {  
        Header: '6s',  
        accessor: 'Sixes',
        width:90 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      }
    ]  
    const columns2 = [{  
      Header: 'Bowler',  
      accessor: 'Bowler',
      width:200,
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      
      
      },{  
      Header: 'Over',  
      accessor: 'Over',
      width:100,
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      
      },
      {  
        Header: 'M',  
        accessor: 'M',
        width:100,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
      },
      {  
        Header: 'Runs',  
        accessor: 'Runs',
        width:100 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      },
      {  
        Header: 'W',  
        accessor: 'W',
        width:100 ,
        Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div> 
      }
     
    ]  
    return(
      
                  <div>
                    <div>
                     
                      <div className="match_header">
                        <div className="stadium">
                          Sydney Cricket Ground, Sydney, Australia
                        </div>

                        <div className="match_time">
                          
                          7 August 2020 @ 13:30
                        </div>
                        
                        <div className="match_n_series">
                          <h2>India vs Australia</h2>
                          India tour of Australia T20I series 2020
                        </div>
                        
                        
                      </div>
                      <hr></hr>

                    <center>
                     <h3>SCORE CARD</h3>
                      </center>
                  
                      <br/><br/>
                     

                      <div  className="team_name">
                              <AppBar position="static" classes={{
                                        appbar_text: classes.appbar_text}}>
                                <Tabs  classes={{
                                        indicator: classes.indicator
                                    }}  variant="fullWidth" value={value} style={{fontSize:"20px"}}  onChange={this.handleChange}>
                                  <Tab  classes={{ selected: classes.selected }} style={{fontSize:"20px"}} label="AUSTRALIA"  />
                                  <Tab  classes={{ selected: classes.selected }} style={{fontSize:"20px"}} label="INDIA" />
                                </Tabs>
                              </AppBar>
                             
                              {value === 0 && <TabContainer><div className="current_score" ><h3>AUS 112/2 (Overs 8.3)</h3></div>
                                    <div className="table_div1">
                                  <ReactTable  
                                    columns={columns}  
                                    data={this.state.data1}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                  </div>
                                  <div className="table_div2">
                                  <ReactTable  
                                    columns={columns2}  
                                    data={this.state.data2}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                    </div> 
                                    </TabContainer>}
                                    {value === 1 && <TabContainer><div className="current_score"><h3>IND 240/8 (Overs 20)</h3></div>
                                    <div className="table_div1">
                                  <ReactTable  
                                    columns={columns}  
                                    data={this.state.data3}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                  </div>
                                  <div className="table_div2">
                                  <ReactTable  
                                    columns={columns2}  
                                    data={this.state.data4}
                                    minRows={0}
                                    PaginationComponent="none"
                                  /> 
                                    </div> 
                                    </TabContainer>}
                      </div>
                    </div>
                    <div className="back">
                    <Button variant="contained" color="primary" className={classes.button}  href="/scorer/ScoringScreen">
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

