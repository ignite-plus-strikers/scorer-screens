import React,{useState} from 'react';
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
        this.state = {
            runs : 0
    }
    this.runsData=this.runsData.bind(this);
  }

  runsData(x){
      console.log(this.runs)
      this.runs = this.runs + x;
      //this.setState({runs : temp_runs+x})
     //return temp_runs+x;
     console.log(this.runs)
    
  }

   render(){
    const { classes } = this.props;
    //const [fruit,setFruit] = useState('');
    return (
      <Container>
        <br></br>
        <Grid align = "center">
        <Typography align = "center">India 112/1 (12 Overs)/Sri Lanka 182/9</Typography>
        <Button variant="contained" color="primary" className={classes.button} href="/scorer/Scorecard">Scorecard</Button>
        </Grid>
        <br></br> 
        <br></br>
        <br></br>
       
        <Grid container spacing = {10}>
        <Grid item>
        <Typography align = "center">India-Batting</Typography>
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
                    <CustomTableCell component="th" scope="row">Name
                    </CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">100</CustomTableCell>
                    <CustomTableCell align="right">9</CustomTableCell>
                    </TableRow>
                    <TableRow className={classes.row} >
                    <CustomTableCell component="th" scope="row">Name
                    </CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">100</CustomTableCell>
                    <CustomTableCell align="right">100</CustomTableCell>
                    </TableRow>
                </TableBody>
            </Table>
            </Paper>
            </Grid>

            <Grid item>
            <Typography align = "center">Sri Lanka-Bowling</Typography>
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
                <CustomTableCell component="th" scope="row">Name
                    </CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">89</CustomTableCell>
                    <CustomTableCell align="right">100</CustomTableCell>
                
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
                <Button variant="contained" color="primary" className={classes.button} onClick={this.runsData(0)}>0</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.runsData(1)}>1</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.runsData(2)}>2</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.runsData(3)}>3</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.runsData(4)}>4</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.runsData(5)}>5</Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={this.runsData(6)}>6</Button>   
            <br></br>

                <Button variant="contained" color="primary" className={classes.button}>WIDE</Button>
                <Button variant="contained" color="primary" className={classes.button}>NO BALL</Button>
                <Button variant="contained" color="primary" className={classes.button}>LEG BYES</Button>
                <Button variant="contained" color="primary" className={classes.button}>BYES</Button>
                <Button variant="contained" color="primary" className={classes.button}>NO BALL+LEG BYES</Button>
                <Button variant="contained" color="primary" className={classes.button}>NO BALL+BYES</Button>

            <br></br>
                <Button variant="contained" color="secondary" className={classes.button}>CAUGHT</Button>
                <Button variant="contained" color="secondary" className={classes.button}>BOWLED</Button>
                <Button variant="contained" color="secondary" className={classes.button}>LBW</Button>
                <Button variant="contained" color="secondary" className={classes.button}>RUN OUT</Button>
                <Button variant="contained" color="secondary" className={classes.button}>STUMPED</Button>
                <Button variant="contained" color="secondary" className={classes.button}>HIT WICKET</Button>
            <br></br>
                <Button variant="contained" color="secondary" className={classes.button}>RETIRED</Button>
                </Paper>
                </Grid> 


                <Grid item align = "center">
            
                <Button variant="contained" size="large" color="primary" className={classes.margin, classes.undoRoot}>UNDO</Button>
                <br></br>
                <br></br>
                <Button variant="contained" size="large" color="primary" className={classes.margin,classes.endRoot}>END INNINGS</Button>
                <br></br>
                <br></br>
                <Button variant="contained" size="large" color="primary" className={classes.margin,classes.endRoot}>END MATCH</Button>
            
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
