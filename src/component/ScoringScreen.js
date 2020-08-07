import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container, Grid, Typography  } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {green,yellow,blue,pink} from "@material-ui/core/colors";




const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "white",
    color: "black",
  },
  body: {
    fontSize : 14,
  },
}))(TableCell);

const styles = theme => ({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: pink[500],
        },
    },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    width: 500,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
 undoRoot:{
    backgroundColor: green[500],
    color : "white",
    "&:hover": {
        backgroundColor: green[700]
      }
 },
 endRoot:{
    backgroundColor: yellow[700],
    color : "black",
    "&:hover": {
        backgroundColor: yellow[900]
      }
 },
  input: {
    display: 'none',
  },
});



class ScoringScreen extends React.Component {
  constructor(props){
    super(props)
    this.state =  {
        striker_batsman : 'Ganguly',
        non_striker_batsman : 'Tendulkar',
        current_bowler : 'Smith',
        batting_team : 'India',
        bowling_team : 'Australia',
        batting_team_score : JSON.parse(localStorage.getItem('data')).batting_team_score,
        batting_team_wickets : JSON.parse(localStorage.getItem('data')).batting_team_wickets,
        total_overs : JSON.parse(localStorage.getItem('data')).total_overs,
        balls_per_over : 6,
        striker : {
          runs : JSON.parse(localStorage.getItem('data')).striker.runs ,
          balls : JSON.parse(localStorage.getItem('data')).striker.balls,
          strike_rate : JSON.parse(localStorage.getItem('data')).striker.strike_rate,
          fours : JSON.parse(localStorage.getItem('data')).striker.fours,
          sixes : JSON.parse(localStorage.getItem('data')).striker.sixes
        },
        non_striker : {
          runs : JSON.parse(localStorage.getItem('data')).non_striker.runs,
          balls : JSON.parse(localStorage.getItem('data')).non_striker.balls,
          strike_rate : JSON.parse(localStorage.getItem('data')).non_striker.strike_rate,
          fours : JSON.parse(localStorage.getItem('data')).non_striker.fours,
          sixes : JSON.parse(localStorage.getItem('data')).non_striker.sixes
        },
        bowler :{
          balls : 0,//JSON.parse(localStorage.getItem('data')).bowler.balls,
          maiden_count : JSON.parse(localStorage.getItem('data')).bowler.maiden_count,
          overs : JSON.parse(localStorage.getItem('data')).bowler.overs,
          maidens : JSON.parse(localStorage.getItem('data')).bowler.maiden_count,
          runs : JSON.parse(localStorage.getItem('data')).bowler.runs,
          wickets : JSON.parse(localStorage.getItem('data')).bowler.wickets
        },
    }
  
    this.increaseScoreBy0 = this.increaseScoreBy0.bind(this);
    this.increaseScoreBy1 = this.increaseScoreBy1.bind(this);
    this.increaseScoreBy2 = this.increaseScoreBy2.bind(this);
    this.increaseScoreBy3 = this.increaseScoreBy3.bind(this);
    this.increaseScoreBy4 = this.increaseScoreBy4.bind(this);
    this.increaseScoreBy5 = this.increaseScoreBy5.bind(this);
    this.increaseScoreBy6 = this.increaseScoreBy6.bind(this);
    this.handleMaiden = this.handleMaiden.bind(this);
    this.handleExtra = this.handleExtra.bind(this);
    this.handleWicket = this.handleWicket.bind(this);
  }

  handleWicket(){
    this.setState({
      batting_team_wickets : this.state.batting_team_wickets +1,
      balls_per_over : this.state.balls_per_over-1,
      bowler : {
        wickets : this.state.bowler.wickets +1,
        runs : this.state.bowler.runs,
        maidens :this.state.bowler.maidens,
        overs : this.state.bowler.overs,
        balls : this.state.bowler.balls+1,
        maiden_count : this.state.bowler.maiden_count
      }
    })
    if(this.state.balls_per_over === 1){
      this.setState({
        balls_per_over : 6,
        total_overs : this.state.total_overs +1,
        bowler : {
          overs : this.state.bowler.overs + 1,
           runs : this.state.bowler.runs ,
           balls : 0,
           wickets : this.state.bowler.wickets,
           maidens :this.state.bowler.maidens,
           maiden_count : 0
        }
      })
    }
  }

  handleMaiden(){
    if(this.state.balls_per_over === 1){
      if(this.state.bowler.maiden_count >= 5){
        this.setState({
          bowler : {
            maiden_count : 0,
            maidens : this.state.bowler.maidens +1,
            runs : this.state.bowler.runs,
            overs : this.state.bowler.overs +1,
            wickets : this.state.bowler.wickets,
            balls : 0,
          }
        })
      }
    }
  }

  handleExtra(){
    this.setState({
      balls_per_over : this.state.balls_per_over +1
    });
    localStorage.setItem('data',JSON.stringify(this.state))
    return this.handleScore;
  }

  increaseScoreBy0(){
    this.setState({
        balls_per_over : this.state.balls_per_over -1,
        striker : {
          runs : this.state.striker.runs ,
          fours : this.state.striker.fours,
          sixes : this.state.striker.sixes,
          balls : this.state.striker.balls +1,
          strike_rate : ((this.state.striker.runs * 100)/(this.state.striker.balls)).toFixed(2)
        },
        bowler : {
          balls : this.state.bowler.balls +1,
          maiden_count : this.state.bowler.maiden_count +1,
          runs : this.state.bowler.runs,
          overs : this.state.bowler.overs,
          maidens : this.state.bowler.maidens,
          wickets : this.state.bowler.wickets,
        }
      });
      if(this.state.balls_per_over === 1){
        this.setState({
          balls_per_over : 6,
          total_overs : this.state.total_overs +1,
          bowler : {
            overs : this.state.bowler.overs + 1,
             runs : this.state.bowler.runs ,
             balls : 0,
             wickets : this.state.bowler.wickets,
             maidens :this.state.bowler.maidens,
             maiden_count : 0
          }
        })
      }
      localStorage.setItem('data',JSON.stringify(this.state));
      localStorage.getItem('data')
      this.handleMaiden();
    }

  increaseScoreBy1(){
    this.setState({
       batting_team_score : this.state.batting_team_score +1,
       balls_per_over : this.state.balls_per_over -1,
       striker : {
        runs : this.state.striker.runs +1, 
        balls : this.state.striker.balls +1,
        strike_rate : ((this.state.striker.runs * 100)/(this.state.striker.balls)).toFixed(2),
        fours : this.state.striker.fours,
        sixes : this.state.striker.sixes,
       },
       
       bowler : {
         runs : this.state.bowler.runs +1,
         balls : this.state.bowler.balls +1,
         maiden_count : this.state.bowler.maiden_count,
         overs : this.state.bowler.overs,
         wickets : this.state.bowler.wickets,
         maidens :this.state.bowler.maidens,
       }
      }); 
      if(this.state.balls_per_over === 1){
        this.setState({
          balls_per_over : 6,
          total_overs : this.state.total_overs +1,
          bowler : {
            overs : this.state.bowler.overs + 1,
             runs : this.state.bowler.runs+1 ,
             balls : 0,
             wickets : this.state.bowler.wickets,
             maidens :this.state.bowler.maidens,
             maiden_count : 0
          }
        })
      }
     
    localStorage.setItem('data',JSON.stringify(this.state));
    localStorage.getItem('data')
    var old_striker = this.state.striker_batsman;
    var old_non_striker = this.state.non_striker_batsman;
    var old_striker_runs = this.state.striker.runs;
    var old_striker_balls = this.state.striker.balls;
    var old_striker_fours = this.state.striker.fours;
    var old_striker_sixes = this.state.striker.sixes;
    var old_non_striker_runs = this.state.non_striker.runs;
    var old_non_striker_balls = this.state.non_striker.balls;
    var old_non_striker_fours = this.state.non_striker.fours;
    var old_non_striker_sixes = this.state.non_striker.sixes;
    
    this.setState({
      striker_batsman: old_non_striker,
      striker: {
        runs: this.state.non_striker.runs ,
        balls: old_non_striker_balls ,
        fours: old_non_striker_fours,
        sixes: old_non_striker_sixes,
        strike_rate : ((old_non_striker_runs*100)/(old_non_striker_balls)).toFixed(2)
      } })
      this.setState({
        non_striker_batsman: old_striker,
        non_striker: {
        runs: old_striker_runs +1,
        balls: old_striker_balls +1,
        fours: old_striker_fours,
        sixes: old_striker_sixes,
       strike_rate : ((old_striker_runs*100)/(old_striker_balls)).toFixed(2)
      }
    })
    localStorage.setItem('data',JSON.stringify(this.state));    
    }

  increaseScoreBy2(){
    this.setState({
      batting_team_score : this.state.batting_team_score +2,
      balls_per_over : this.state.balls_per_over -1,
      striker : {
       runs : this.state.striker.runs +2,
       balls : this.state.striker.balls +1,
       strike_rate : ((this.state.striker.runs * 100)/(this.state.striker.balls)).toFixed(2),
       fours : this.state.striker.fours,
       sixes : this.state.striker.sixes,
      },
      bowler : {
        runs : this.state.bowler.runs +2,
        balls : this.state.bowler.balls +1,
        wickets : this.state.bowler.wickets,
        maidens :this.state.bowler.maidens,
        overs : this.state.bowler.overs,
        maiden_count : this.state.bowler.maiden_count
      }
     });
     if(this.state.balls_per_over === 1){
      this.setState({
        balls_per_over : 6,
        total_overs : this.state.total_overs +1,
        bowler : {
          overs : this.state.bowler.overs + 1,
           runs : this.state.bowler.runs +2 ,
           balls : 0,
           wickets : this.state.bowler.wickets,
           maidens :this.state.bowler.maidens,
           maiden_count : 0
          }
      })
    }
     localStorage.setItem('data',JSON.stringify(this.state));
     localStorage.getItem('data')
   }

   increaseScoreBy3(){
    this.setState({
       batting_team_score : this.state.batting_team_score +3,
       balls_per_over : this.state.balls_per_over -1,
       striker : {
        runs : this.state.striker.runs +3, 
        balls : this.state.striker.balls +1,
        strike_rate : ((this.state.striker.runs * 100)/(this.state.striker.balls)).toFixed(2),
        fours : this.state.striker.fours,
        sixes : this.state.striker.sixes,
       },
       
       bowler : {
         runs : this.state.bowler.runs +3,
         balls : this.state.bowler.balls +1,
         maiden_count : this.state.bowler.maiden_count,
         overs : this.state.bowler.overs,
         wickets : this.state.bowler.wickets,
         maidens :this.state.bowler.maidens,
       }
      }); 
      if(this.state.balls_per_over === 1){
        this.setState({
          balls_per_over : 6,
          total_overs : this.state.total_overs +1,
          bowler : {
            overs : this.state.bowler.overs + 1,
             runs : this.state.bowler.runs +3 ,
             balls : 0,
             wickets : this.state.bowler.wickets,
             maidens :this.state.bowler.maidens,
             maiden_count : 0
          }
        })
      }
     
      localStorage.setItem('data',JSON.stringify(this.state));
      localStorage.getItem('data')
    var old_striker = this.state.striker_batsman;
    var old_non_striker = this.state.non_striker_batsman;
    var old_striker_runs = this.state.striker.runs;
    var old_striker_balls = this.state.striker.balls;
    var old_striker_fours = this.state.striker.fours;
    var old_striker_sixes = this.state.striker.sixes;
    var old_non_striker_runs = this.state.non_striker.runs;
    var old_non_striker_balls = this.state.non_striker.balls;
    var old_non_striker_fours = this.state.non_striker.fours;
    var old_non_striker_sixes = this.state.non_striker.sixes;
    
    this.setState({
      striker_batsman: old_non_striker,
      striker: {
        runs: this.state.non_striker.runs ,
        balls: old_non_striker_balls ,
        fours: old_non_striker_fours,
        sixes: old_non_striker_sixes,
        strike_rate : ((old_striker_runs*100)/(old_striker_balls)).toFixed(2)
      } })
      this.setState({
        non_striker_batsman: old_striker,
        non_striker: {
        runs: old_striker_runs +3,
        balls: old_striker_balls +1,
        fours: old_striker_fours,
        sixes: old_striker_sixes,
       strike_rate : ((old_non_striker_runs*100)/(old_non_striker_balls)).toFixed(2)
      }
    })
    localStorage.setItem('data',JSON.stringify(this.state));    
    }


increaseScoreBy4(){
  this.setState({
    batting_team_score : this.state.batting_team_score +4,
    balls_per_over : this.state.balls_per_over -1,
    striker : {
     runs : this.state.striker.runs +4,
     balls : this.state.striker.balls +1,
     strike_rate : ((this.state.striker.runs * 100)/(this.state.striker.balls)).toFixed(2),
     sixes : this.state.striker.sixes,
     fours : this.state.striker.fours +1
    },
    bowler : {
      runs : this.state.bowler.runs +4,
      balls : this.state.bowler.balls +1,
      wickets : this.state.bowler.wickets,
      maidens :this.state.bowler.maidens,
      overs : this.state.bowler.overs,
      maiden_count : this.state.bowler.maiden_count

    }
   });
   if(this.state.balls_per_over === 1){
    this.setState({
      balls_per_over : 6,
      total_overs : this.state.total_overs +1,
      bowler : {
        overs : this.state.bowler.overs + 1,
         runs : this.state.bowler.runs +4 ,
         balls : 0,
         wickets : this.state.bowler.wickets,
         maidens :this.state.bowler.maidens,
         maiden_count : 0
      }
    })
  }
   localStorage.setItem('data',JSON.stringify(this.state));
   localStorage.getItem('data')
 }

increaseScoreBy5(){
    this.setState({
       batting_team_score : this.state.batting_team_score +5,
       balls_per_over : this.state.balls_per_over -1,
       striker : {
        runs : this.state.striker.runs +5, 
        balls : this.state.striker.balls +1,
        strike_rate : ((this.state.striker.runs * 100)/(this.state.striker.balls)).toFixed(2),
        fours : this.state.striker.fours,
        sixes : this.state.striker.sixes,
       },
       
       bowler : {
         runs : this.state.bowler.runs +5,
         balls : this.state.bowler.balls +1,
         maiden_count : this.state.bowler.maiden_count,
         overs : this.state.bowler.overs,
         wickets : this.state.bowler.wickets,
         maidens :this.state.bowler.maidens,
       }
      }); 
      if(this.state.balls_per_over === 1){
        this.setState({
          balls_per_over : 6,
          total_overs : this.state.total_overs +1,
          bowler : {
            overs : this.state.bowler.overs + 1,
             runs : this.state.bowler.runs + 5 ,
             balls : 0,
             wickets : this.state.bowler.wickets,
             maidens :this.state.bowler.maidens,
             maiden_count : 0
          }
        })
      }
     
      localStorage.setItem('data',JSON.stringify(this.state));
      localStorage.getItem('data')
    var old_striker = this.state.striker_batsman;
    var old_non_striker = this.state.non_striker_batsman;
    var old_striker_runs = this.state.striker.runs;
    var old_striker_balls = this.state.striker.balls;
    var old_striker_fours = this.state.striker.fours;
    var old_striker_sixes = this.state.striker.sixes;
    var old_non_striker_runs = this.state.non_striker.runs;
    var old_non_striker_balls = this.state.non_striker.balls;
    var old_non_striker_fours = this.state.non_striker.fours;
    var old_non_striker_sixes = this.state.non_striker.sixes;
    
    this.setState({
      striker_batsman: old_non_striker,
      striker: {
        runs: this.state.non_striker.runs ,
        balls: old_non_striker_balls ,
        fours: old_non_striker_fours,
        sixes: old_non_striker_sixes,
        strike_rate : ((old_striker_runs*100)/(old_striker_balls)).toFixed(2)
      } })
      this.setState({
        non_striker_batsman: old_striker,
        non_striker: {
        runs: old_striker_runs +5,
        balls: old_striker_balls +1,
        fours: old_striker_fours,
        sixes: old_striker_sixes,
       strike_rate : ((old_non_striker_runs*100)/(old_non_striker_balls)).toFixed(2)
      }
    })
    localStorage.setItem('data',JSON.stringify(this.state));    
    }

    increaseScoreBy6(){
      this.setState({
        batting_team_score : this.state.batting_team_score +6,
        balls_per_over : this.state.balls_per_over -1,
        striker : {
         runs : this.state.striker.runs +6,
         balls : this.state.striker.balls +1,
         strike_rate : ((this.state.striker.runs * 100)/(this.state.striker.balls)).toFixed(2),
         sixes : this.state.striker.sixes +1,
         fours : this.state.striker.fours
        },
        bowler : {
          runs : this.state.bowler.runs +6,
          balls : this.state.bowler.balls +1,
          wickets : this.state.bowler.wickets,
          maidens :this.state.bowler.maidens,
          overs : this.state.bowler.overs,
          maiden_count : this.state.bowler.maiden_count
        }
       });
       if(this.state.balls_per_over === 1){
        this.setState({
          balls_per_over : 6,
          total_overs : this.state.total_overs +1,
          bowler : {
            overs : this.state.bowler.overs + 1,
             runs : this.state.bowler.runs +6 ,
             balls : 0,
             wickets : this.state.bowler.wickets,
             maidens :this.state.bowler.maidens,
             maiden_count : 0

          }
        })
      }
       localStorage.setItem('data',JSON.stringify(this.state));
       localStorage.getItem('data')
     }
    


   render(){
    const { classes } = this.props;
    return (
      <Container>
        <br></br>
        <Grid align = "center">
        <Typography align = "center">
               {this.state.batting_team} {this.state.batting_team_score}/{this.state.batting_team_wickets} ({this.state.total_overs} Overs)
              /{this.state.bowling_team} 182/9</Typography>
        <Button variant="contained" color="primary" className={classes.button} href="/scorer/Scorecard">Scorecard</Button>
        </Grid>
        <br></br> 
        <br></br>
        <br></br>
       
        <Grid container spacing = {10}>
        <Grid item>
        <Typography align = "center">{this.state.batting_team}-Batting</Typography>
            <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell align="right">R</CustomTableCell>
                    <CustomTableCell align="right">B</CustomTableCell>
                    <CustomTableCell align="right">S/R</CustomTableCell>
                    <CustomTableCell align="right">4s</CustomTableCell>
                    <CustomTableCell align="right">6s</CustomTableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow className={classes.row} >
                    <CustomTableCell component="th" scope="row">{this.state.striker_batsman} *
                    </CustomTableCell>
                    <CustomTableCell align="right">{this.state.striker.runs}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.striker.balls}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.striker.strike_rate}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.striker.fours}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.striker.sixes}</CustomTableCell>
                    </TableRow>
                    <TableRow className={classes.row} >
                    <CustomTableCell component="th" scope="row">{this.state.non_striker_batsman}
                    </CustomTableCell>
                    <CustomTableCell align="right">{this.state.non_striker.runs}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.non_striker.balls}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.non_striker.strike_rate}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.non_striker.fours}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.non_striker.sixes}</CustomTableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </Paper>
            </Grid>

            <Grid item>
            <Typography align = "center">{this.state.bowling_team}-Bowling</Typography>
            <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <CustomTableCell>Name</CustomTableCell>
                    <CustomTableCell align="right">Overs</CustomTableCell>
                    <CustomTableCell align="right">M</CustomTableCell>
                    <CustomTableCell align="right">Runs</CustomTableCell>
                    <CustomTableCell align="right">W</CustomTableCell>
                </TableRow>
                </TableHead>
                <CustomTableCell component="th" scope="row">{this.state.current_bowler}
                    </CustomTableCell>
                    <CustomTableCell align="right">{this.state.bowler.overs}.{this.state.bowler.balls}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.bowler.maidens}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.bowler.runs}</CustomTableCell>
                    <CustomTableCell align="right">{this.state.bowler.wickets}</CustomTableCell>
                
            </Table>
            </Paper>
            <br></br>
            <Typography align = "left">This Over : 6 | 4 | 0 | W</Typography>
            </Grid>
            </Grid>
           
            <br></br>
            <br></br> 
            <br></br>
            <br></br>
            <br></br>
            

            <Grid container spacing = {10}>
            <Grid item align = "left">
            <Paper>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.increaseScoreBy0}>0</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.increaseScoreBy1}>1</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.increaseScoreBy2}>2</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.increaseScoreBy3}>3</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.increaseScoreBy4}>4</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.increaseScoreBy5}>5</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.increaseScoreBy6}>6</Button>   
            <br></br>

                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleExtra}>WIDE</Button>
                <Button variant="contained" color="primary" className={classes.button}>NO BALL</Button>
                <Button variant="contained" color="primary" className={classes.button}>LEG BYES</Button>
                <Button variant="contained" color="primary" className={classes.button}>BYES</Button>
                <Button variant="contained" color="primary" className={classes.button}>NO BALL+LEG BYES</Button>
                <Button variant="contained" color="primary" className={classes.button}>NO BALL+BYES</Button>

            <br></br>
                <Button variant="contained" color="secondary" className={classes.button}>CAUGHT</Button>
                <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleWicket}>BOWLED</Button>
                <Button variant="contained" color="secondary" className={classes.button}>LBW</Button>
                <Button variant="contained" color="secondary" className={classes.button}>RUN OUT</Button>
                <Button variant="contained" color="secondary" className={classes.button}>STUMPED</Button>
                <Button variant="contained" color="secondary" className={classes.button}>HIT WICKET</Button>
            <br></br>
                <Button variant="contained" color="secondary" className={classes.button}>RETIRED</Button>
                </Paper>
                </Grid> 


                <Grid item align = "center">
              
                <Button variant="contained" size="medium" color="primary" className={classes.margin, classes.undoRoot}>UNDO</Button>
                <br></br>
                <br></br>
                <Button variant="contained" size="medium" color="primary" className={classes.margin,classes.endRoot}>START INNINGS</Button>
                <br></br>
                <br></br>
                <Button variant="contained" size="medium" color="primary" className={classes.margin,classes.endRoot}>END INNINGS</Button>
                <br></br>
                <br></br>
                <Button variant="contained" size="medium" color="primary" className={classes.margin,classes.endRoot}>END MATCH</Button>
            
                </Grid> 
                
                </Grid> 

            </Container>
  );
          }
}

ScoringScreen.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScoringScreen);
