import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider, Container } from '@material-ui/core';
//import MatchSelectionService from "../service/MatchSelectionService"
import Clock from './Clock';
import axios from 'axios'


const useStyles = theme => ({
  root: {
    width: 400,
    height:'auto',
    marginLeft:100,
    marginTop:20,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  typo:{
    variant:'h4',
    color:'textSecondary',
    align:'center',
  }

});

class MatchSelection extends React.Component{

    constructor(props){
      super(props);
      this.state={
        fixtures:[]
      };
    }

    componentDidMount(){
      axios.get("http://localhost:8080/cricket-tournament/fixtures")
          .then(response => response.data)
          .then((data) => {
            this.setState({fixtures:data});
          });
    }

  render(){
    const {classes} = this.props;
    return (
      <Container>
        
        <Typography variant="h5" color="primary" align="center" style={{marginTop:20}}>Welcome Scorer! Happy Scoring! </Typography>
        <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:80}} >Live Matches</Typography>
              <Card className = {classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" color="primary" align="center">Pakistan vs West Indies</Typography>
              <Divider />
              <Typography variant="body1" align="center" color="textSecondary">2ns T20 at Kensington Oval,Barbados scheduled on 06-08-2020 05:00:00 pm</Typography>
              </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" href="/scorer/prematch">Pre-match Screen</Button>
              <Button variant="contained" color="primary" href="/scorer/ScoringScreen">Scoring Screen</Button>
            </CardActions>
            </Card>
         
        <Typography variant="h5" align="left" style={{marginTop:20,marginLeft:80}} >Upcoming Matches</Typography>
        
        
        <Grid container spacing={6} direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item >
          {this.state.fixtures.map((fixture) => (
            <Card className={classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" align="center" color="primary">{fixture.team1} vs {fixture.team2}</Typography>
              <Divider />
              <Typography variant="body1" align="center" color="textSecondary">{fixture.description} at {fixture.venue} scheduled on {fixture.fixture_date} {fixture.fixture_time}</Typography>
              </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/prematch" disabled>Pre-match Screen</Button>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/ScoringScreen"disabled>Scoring Screen</Button>
            </CardActions>
            </Card>
           ))}
          </Grid>
          </Grid>
        </Container>
       
        
    );
  }
}


export default withStyles(useStyles)(MatchSelection);