import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider, Container } from '@material-ui/core';


const useStyles = makeStyles({
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

function MatchSelection() {
  var tempDate = new Date();
  var date = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
  const currDate = date;
    const classes = useStyles();
    return (
      <Container>
        <Typography variant="subtitle1" align="right" color="textPrimary" style={{marginTop:10}}>{currDate}</Typography>
        <Typography variant="h5" color="textSecondary" align="center" style={{marginTop:20}}>Welcome Scorer Sanjay! Happy Scoring! </Typography>
        <Typography variant="h5" color="textSecondary" align="left" style={{marginTop:20,marginLeft:80}} >Live Matches</Typography>
            <Card className={classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" align="center">India vs England</Typography>
              <Divider />
              <Typography variant="body1" align="center" color="textSecondary">Chinnaswamy Stadium, Bangalore,India 10 July 2020 @ 13:30 </Typography>
              </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/prematch">Pre-match Screen</Button>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/ScoringScreen">Scoring Screen</Button>
            </CardActions>
            </Card>
         

        <Typography variant="h5" color="textSecondary" align="left" style={{marginTop:20,marginLeft:80}} >Upcoming Matches</Typography>
        <Grid container spacing={6} direction="row" justify="flex-start" alignItems="flex-start">
          <Grid item >
            <Card className={classes.root} variant="outlined">
              <CardContent>
              <Typography variant="h5" align="center">India vs England</Typography>
              <Divider />
              <Typography variant="body1" align="center" color="textSecondary">Chinnaswamy Stadium, Bangalore,India 13 July 2020 @ 13:30</Typography>
              </CardContent>
            <Divider />
            <CardActions>
              <Button variant="contained" color="primary" href="/scorer/MatchSelection/prematch" disabled>Pre-match Screen</Button>
              <Button variant="contained" color="primary" href="/scorer/ScoringScreen">Scoring Screen</Button>
            </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography variant="h5" align="center">India vs England</Typography>
                <Divider />
                <Typography variant="body1" align="center" color="textSecondary">Chinnaswamy Stadium, Bangalore,India 13 July 2020 @ 13:30</Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button variant="contained" color="primary" href="/scorer/MatchSelection/prematch">Pre-match Screen</Button>
                <Button variant="contained" color="primary" href="/scorer/MatchSelection/ScoringScreen" disabled>Scoring Screen</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        </Container>
    );
}
 export default MatchSelection;