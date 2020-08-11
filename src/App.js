import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import {createMuiTheme , MuiThemeProvider} from '@material-ui/core/styles'
import MatchSelection from './component/MatchSelection'
import PreMatch from './component/PreMatch'
import Header from './component/Header'
import ScoringScreen from './component/ScoringScreen'

import Clock from './component/Clock'
import {green,yellow,blue,pink} from "@material-ui/core/colors";
import ScoreCard from './component/ScoreCard';
//import Footer from './component/Footer';


const theme = createMuiTheme({
 palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: pink[500],
        },
    },
      text:{
        primary:blue[500],
        secondary:'#212121'
      },
      spacing: 8,
  },
);


class App extends Component{
 
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Header />
        <div style={{marginLeft:1350,marginTop:10}}><Clock /></div>
        <Router>
      
          <Route exact path="/scorer/MatchSelection" component={MatchSelection} />
          <Route path="/scorer/PreMatch/:id" component={PreMatch} />
          <Route path="/scorer/ScoringScreen/:id" component={ScoringScreen} />
          <Route path="/scorer/ScoreCard/:id" component={ScoreCard} />
        </Router>
        
      </MuiThemeProvider>
    );
  }
}

export default App;