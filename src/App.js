import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import {createMuiTheme , MuiThemeProvider} from '@material-ui/core/styles'
import MatchSelection from './component/MatchSelection'
import PreMatch from './component/PreMatch'
import Header from './component/Header'
import ScoringScreen from './component/ScoringScreen'
import ScoreCard from './component/ScoreCard'


const theme = createMuiTheme({
  // palette: {
  //     primary: {
  //         main: '#00bcd4',
  //     },
  //     secondary: {
  //         main: '#a5d1e1',
  //     },
  //     text:{
  //       primary:'#00bcd4',
  //       secondary:'#212121'
  //     },
  //     spacing: 8,
  // },
});


class App extends React.Component{
 
  render(){
    return(
      <MuiThemeProvider theme={theme}>
        <Header />

        <Router>
          <Route exact path="/scorer/MatchSelection" component={MatchSelection} />
          <Route path="/scorer/PreMatch" component={PreMatch} />
          <Route path="/scorer/ScoringScreen" component={ScoringScreen} />
          <Route path="/scorer/ScoreCard" component={ScoreCard} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;