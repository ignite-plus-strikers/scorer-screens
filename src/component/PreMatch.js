import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import Autocomplete from "@material-ui/lab/Autocomplete";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from '@material-ui/core/FormControl';
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import RefereeDataService from '../service/RefereeDataService';
import TeamDataService from '../service/TeamDataService';
import UmpireDataService from '../service/UmpireDataService';



const toss = [
  {
    value: "batting",
    label: "batting"
  },
  {
    value: "fielding",
    label: "fielding"
  },
  
];
const captain1 = [
  
];
const captain2 = [
  
];
const wicket1 = [
  
];
const wicket2 = [
  
];
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  
  margin: {
    margin: theme.spacing.unit
  },
  
  list: {
    width: "100%",
    maxWidth: "300px",
    position: "fixed"
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  stem: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "1000px"
  },
  formControl: {
    margin: theme.spacing.unit * 2
  },
  button: {
    margin: theme.spacing.unit * 3
  },
  checked: {},
 
});

/*const umpire1 = [
  { title: "Aleem Dar" },
  { title: "Ranjan Madugalle" },
  { title: "Kumar Dharmasena" }
];
const umpire2 = [
  { title: "Aleem Dar" },
  { title: "Ranjan Madugalle" },
  { title: "Kumar Dharmasena" }
];
const umpire3 = [
  { title: "Aleem Dar" },
  { title: "Ranjan Madugalle" },
  { title: "Kumar Dharmasena" }
];
*/

class OutlinedInputAdornments extends React.Component {
  constructor(props) {
    super(props)
  this.state = {
    map: new Map(),
      player: "",
    selectedValue: 'a',
    selectedValue: 'b',
    toss: "",
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
    checkedG: false,
    checkedH: false,
    checkedI: false,
    checkedJ: false,
    checkedK: false,
    checkedL: false,
    checkedM: false,
    checkedN: false,
    checkedO: false,
    list:[],
    
    app: new Map(),
    team:[],
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
    checked5: false,
    checked6: false,
    checked7: false,
    checked8: false,
    checked9: false,
    checked10: false,
    checked11: false,
    checked12: false,
    checked13: false,

    umpires: [],
    first_name: "",
    middle_name: "",
    last_name: "",
    referees: [],
    first_name:"",
    middle_name:"",
    last_name:"",
    teamplayers: [],
    teamid: "3307b103-3c70-410a-ada9-c248dafa8157",
    player_first_name: "",
    player_last_name: "",
    player_initials: "",
    captain1: "",
    wicket1: "",
    captain2: "",
    wicket2: "",
  };
  this.refreshReferees = this.refreshReferees.bind(this)
  this.refreshUmpires = this.refreshUmpires.bind(this)
  this.refreshTeamPlayers = this.refreshTeamPlayers.bind(this)

  }
  getChckeboxValue(event) {
    const value = event.target.value;
}
handleChange = (prop,name)=> event => {
 console.log(this.state.map)
  this.state.map.set(name,event.target.checked )

 this.setState({ [prop]: event.target.checked});

 var play=this.state.map.keys()

 var tempLList= ""
 for(var ele of play) 
 {
   if(this.state.map.get(ele))
   {
   // tempLList.push(ele)
   tempLList=tempLList+ele+"\n\n"
   
   }
 }

 this.setState({player:tempLList})
}
 
handleChange1 = (prop,name)=> event => {
  console.log(this.state.app)
   this.state.app.set(name,event.target.checked )
 
  this.setState({ [prop]: event.target.checked});
 
  var play=this.state.app.keys()
 
  var tempLList= ""
  for(var ele of play) 
  {
    if(this.state.app.get(ele))
    {
    // tempLList.push(ele)
    tempLList=tempLList+ele+"\n\n"
    
    }
  }
 
  this.setState({team:tempLList})
 }
 
 /* handleChange = prop => event => {
    var isChecked = event.target.checked;
    //var player = this.state.player
    
    if (isChecked == true) {
        this.state.player.push(prop)
    }
    else {
        for(var i = this.state.player.length - 1; i >= 0; i--) {
            if(this.state.player[i] === prop) {
                this.state.player.splice(i, 1);
            }
        }
    }
   
    console.log(this.state.player)
 // this.setState({ [prop]: event.target.value });
    //this.setState({ selectedValue: event.target.value });
    
  }; */
  handleSubmit = () => {};
 /* function getValue() {
    var checks = document.getElementsByClassName('checks');
    var str = '';
    for(i=0;i<11;i++) {
      if(checks[i].checkedA === true) {
        str += checks[i].value+ "";
      }
    }
    alert(str);
  } */

  componentDidMount() { 
    this.refreshReferees();
    this.refreshUmpires();
    this.refreshTeamPlayers();
  }
  refreshReferees() {
    RefereeDataService.retrieveAllReferees()
        .then(
            response => {
                console.log(response);
                this.setState({ referees: response.data })
            }
        )
  }
  refreshUmpires() {
    UmpireDataService.retrieveAllUmpires()
        .then(
            response => {
                console.log(response);
                this.setState({ umpires: response.data })
            }
        )
}
refreshTeamPlayers() {
  
  TeamDataService.retrieveAllTeamPlayers(this.state.teamid)
      .then(
          response => {
              
              this.setState({ teamplayers: response.data })
              console.log(this.state.teamplayers)
            }

      )
}


  render() {
    const { classes } = this.props;
    var player = this.state.player;
    const { checkedA, checkedB,checkedC,checkedD,checkedE,checkedF,checkedG,checkedH,checkedI,checkedJ,checkedK,checkedL,checkedM,checkedN,checkedO} = this.state;
    const { checked1, checked2,checked3,checked4,checked5,checked6,checked7,checked8,checked9,checked10,checked11,checked12,checked13} = this.state;
    const error = [checkedA, checkedB,checkedC,checkedD,checkedE,checkedF,checkedG,checkedH,checkedI,checkedJ,checkedK,checkedL,checkedM,checkedN,checkedO,checked1, checked2,checked3,checked4,checked5,checked6,checked7,checked8,checked9,checked10,checked11,checked12,checked13].filter(v => v).length !== 22;
    
    
    return (
      <div className={classes.root}> 
      <Grid container spacing={2} >
      <Grid item xs={4}
            
          >
            <br />

            <Paper
            
              elevation={3}
              style={{
                width: "400px",
                height: "1300px",
                paddingLeft: "2%",
                paddingRight: "0%",
                paddingTop: "4%"
              }}
            >
              <FormLabel
                component="legend"
                className={classes.margin}
              >
                Toss:
              </FormLabel>
             
              <FormControlLabel
             //value={this.state.selectedValue}
            onChange={this.handleChange}
            value={this.state.selectedValue}
            control={<Radio color="primary" />}
            label="Pakistan"
            labelPlacement="start"
          />
          <FormControlLabel
           // value={this.state.selectedValue}
            onChange={this.handleChange}
            control={<Radio color="primary" />}
            label="West Indies"
            labelPlacement="start"
          />
          
               <br />
              <br />
              <br />
              <br />
              <br />
              <label>Toss Decision:</label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                value={this.state.toss}
                onChange={this.handleChange("toss")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select toss decision--
                    </InputAdornment>
                  )
                }}
              >
                {toss.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <label>Match Officials</label>
              
              <br />
              <br />
              <label>On Field Umpire 1:</label>
              <Autocomplete
                className={classes.margin}
                options={this.state.umpires}
                getOptionLabel={option => option.first_name + " "+ option.middle_name +" "+ option.last_name}
                style={{ width: 300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="--Type to Search Umpire 1--"
                    variant="outlined"
                  />
                )}
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <label>On Field Umpire 2:</label>
              <Autocomplete
                className={classes.margin}
                options={this.state.umpires}
                getOptionLabel={option => option.first_name + " "+ option.middle_name +" "+ option.last_name}
                style={{ width:300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="--Type to Search Umpire 2--"
                    variant="outlined"
                  />
                )}
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <label>Third Umpire:</label>
              <Autocomplete
                className={classes.margin}
                options={this.state.umpires}
                getOptionLabel={option => option.first_name + " "+ option.middle_name +" "+ option.last_name}
                style={{ width: 300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="--Type to Search Third Umpire--"
                    variant="outlined"
                  />
                )}
              />
              <br />
              <br />
              <br />
              <br />
              <br />
              <label>Match Refree:</label>
              <Autocomplete
                className={classes.margin}
                options={this.state.referees}
                getOptionLabel={option => option.first_name + " "+ option.middle_name +" "+ option.last_name}
                style={{ width: 300 }}
                renderInput={params => (
                  <TextField
                    {...params}
                    label="--Type to Search Referee--"
                    variant="outlined"
                  />
                )}
              />
             
            </Paper>
          </Grid>
          
                      <Grid item xs={4}
            
          >
            <br />
            <Paper
             elevation={3}
              style={{
                width: "400px",
                height: "1300px",
                paddingLeft: "2%",
                paddingRight: "1%",
                paddingTop: "4%"
              }}
            >
              <center>
                <h3>Pakistan</h3>
              </center>
              <br />

             
              

              <Grid container spacing={9}>

              <Grid item xs={6}>
              <h3>SQUAD</h3>
              <br />
              <FormControl required error={error} component="fieldset" className={classes.formControl}>
        
              <FormGroup column>
                <FormLabel component="legend">B1</FormLabel>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedA}
                      onChange={this.handleChange("checkedA","Ahmed Shehzad")}
                      value="checkedA"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Ahmed Shehzad"
                />
                 <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedB}
                      onChange={this.handleChange("checkedB","Asif Ali")}
                      value="checkedB"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Asif Ali"
                />
                 <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedC}
                      onChange={this.handleChange("checkedC","Babar Azam")}
                      value="checkedC"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Babar Azam"
                />
                
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={this.state.checkedD}
                      onChange={this.handleChange("checkedD","FaheemAshraf")}
                      value="checkedD"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Faheem Ashraf"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                     checked={this.state.checkedE}
                      onChange={this.handleChange("checkedE","FakharZaman")}
                      value="checkedE"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Fakhar Zaman"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedF}
                      onChange={this.handleChange("checkedF","HasanAli")}
                      value="checkedF"
                      color="primary"
//class="checks"
                    />
                  }
                  label="Hasan Ali"
                />
                <Divider />
                <br />
              </FormGroup>
              <FormGroup column>
                <FormLabel component="legend">B2</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={this.state.checkedG}
                      onChange={this.handleChange("checkedG","HussainTalat")}
                      value="checkedG"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Hussain Talat"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedH}
                      onChange={this.handleChange("checkedH","MohammadAmir")}
                      value="checkedH"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Mohammad Amir"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedI}
                      onChange={this.handleChange("checkedI","MohmamadNawar")}
                      value="checkedI"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Mohammad Nawar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={this.state.checkedJ}
                      onChange={this.handleChange("checkedJ","RahatAli")}
                      value="checkedJ"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Rahat Ali"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                     checked={this.state.checkedK}
                      onChange={this.handleChange("checkedK","SarfrazAhmed")}
                      value="checkedK"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Sarfraz Ahmed"
                />

                <Divider />
                <br />
              </FormGroup>
              <FormGroup column>
                <FormLabel component="legend">B3</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                     checked={this.state.checkedL}
                      onChange={this.handleChange("checkedL","ShadabKhan")}
                      value="checkedL"
                      color="primary"
                  //    class="checks"
                    />
                  }
                  label="Shadab Khan"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                     checked={this.state.checkedM}
                      onChange={this.handleChange("checkedM","ShaheenAfridi")}
                      value="checkedM"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Shaheen Afridi"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    checked={this.state.checkedN}
                      onChange={this.handleChange("checkedN","ShoaibMalik")}
                      value="checkedC"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Shoaib Malik"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checkedO}
                      onChange={this.handleChange("checkedO","UsmanKhan")}
                      value="checkedO"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Usman Khan"
                />

                <Divider />
              </FormGroup>
              </FormControl>

              </Grid>
              
              <Grid item xs={2}>
              <h3>Playing 11</h3>
              <TextareaAutosize aria-label="minimum height" rowsMin={45} type="text" id="selectedtext"   value={this.state.player} />
            
              </Grid>
              </Grid>
              <br />
             
              <label>Captin:</label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                onChange={this.handleChange("captain1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Captin--
                    </InputAdornment>
                  )
                }}
              >
                { 
                this.state.teamplayers.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                  } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                    {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <label>Wicket Keeper:</label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                
                onChange={this.handleChange("wicket1")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Wicket Keeper--
                    </InputAdornment>
                  )
                }}
              >
               {  this.state.teamplayers.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                  {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                </MenuItem>
                ))}
              </TextField>
              
              <br />
              <br />
              <br />
            </Paper>
          </Grid>
          <Grid item xs={4}
          >
            <br />
            <Paper
             elevation={3}
              style={{
                width: "400px",
                height: "1300px",
                paddingLeft: "2%",
                paddingRight: "1%",
                paddingTop: "4%"
              }}
            >
              <center>
                <h3>West Indies</h3>
              </center>
              <br />
              
              <Grid container spacing={9}>
                <Grid item xs={6}>
                <h3>SQUAD</h3>
                <br />
                <FormControl required error={error} component="fieldset" className={classes.formControl}>
                <FormGroup column>
                <FormLabel component="legend">B1</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked1}
                      onChange={this.handleChange1("checked1","Andre Fletcher")}
                      value="checked1"
                      color="primary"
                    />
                  }
                  label="Andre Fletcher"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked2}
                      onChange={this.handleChange1("checked2","Andre MeCarthy")}
                      value="checked2"
                      color="primary"
                    />
                  }
                  label="AndreMeCarthy"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked3}
                      onChange={this.handleChange1("checked3","Chadwick Walton")}
                      value="checked3"
                      color="primary"
                    />
                  }
                  label="Chadwick Walton"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked4}
                      onChange={this.handleChange1("checked4","Denesh Ramdin")}
                      value="checked4"
                      color="primary"
                    />
                  }
                  label="Denesh Ramdin"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked5}
                      onChange={this.handleChange1("checked5","Jason Mohammad")}
                      value="checked5"
                      color="primary"
                    />
                  }
                  label="Jason Mohammad"
                />

                <Divider />
                <br />
              </FormGroup>
              <FormGroup column>
                <FormLabel component="legend">B2</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked6}
                      onChange={this.handleChange1("checked6","Keerno Paul")}
                      value="checked6"
                      color="primary"
                    />
                  }
                  label="Keerno Paul"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked7}
                      onChange={this.handleChange1("checked7","Kesrick Williams")}
                      value="checked7"
                      color="primary"
                    />
                  }
                  label="Kesrick Williams"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked8}
                      onChange={this.handleChange1("checked8","Marlon Samuels")}
                      value="checked8"
                      color="primary"
                    />
                  }
                  label="Marlon Samuels"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked9}
                      onChange={this.handleChange1("checked9","Odean Smith")}
                      value="checked9"
                      color="primary"
                    />
                  }
                  label="Odean Smith"
                />

                <Divider />
                <br />
              </FormGroup>
              <FormGroup column>
                <FormLabel component="legend">B3</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked10}
                      onChange={this.handleChange1("checked10","Rayad Emrit")}
                      value="checked10"
                      color="primary"
                    />
                  }
                  label="Rayad Emrit"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked11}
                      onChange={this.handleChange1("checked11","Samual Badree")}
                      value="checked11"
                      color="primary"
                    />
                  }
                  label="Samual Badree"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked12}
                      onChange={this.handleChange1("checked12","Veerasamy Permaul")}
                      value="checked12"
                      color="primary"
                    />
                  }
                  label="Veerasamy Permaul"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.checked13}
                      onChange={this.handleChange1("checked13","Rovman Powell")}
                      value="checked13"
                      color="primary"
                    />
                  }
                  label="Rovman Powell"
                />

                <Divider />
              </FormGroup>
              </FormControl>
        
              </Grid>
              
              <Grid item xs={4}>
              <h3>Playing 11</h3>
              <TextareaAutosize aria-label="minimum height" rowsMin={45} type="text" id="selectedtext"  value={this.state.team}/>
              </Grid>
              </Grid>
              <br />
              <label>Captin:</label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                onChange={this.handleChange("captain2")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Captin--
                    </InputAdornment>
                  )
                }}
              >
                {this.state.teamplayers.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                  {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <label>Wicket Keeper:</label>
              <br />
              <br />
              <TextField
                style={{ width: 300 }}
                select
                id="outlined-simple-start-adornment"
                className={classes.margin, classes.textField}
                variant="outlined"
                label="With Select"
                onChange={this.handleChange("wicket2")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      --Select Wicket Keeper--
                    </InputAdornment>
                  )
                }}
              >
                {this.state.teamplayers.map(option => (
                  <MenuItem key={option.player_first_name + " "+option.player_last_name +" "+option.player_initials
                } value={option.player_first_name + " "+option.player_last_name +" "+option.player_initials }>
                  {option.player_first_name + " "+option.player_last_name +" "+option.player_initials}
                </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <br />
              <center>
              <Button
                variant="contained"
                style={{ width: "150px" }}
                className={classes.button}
                href=" /scorer/MatchSelection"
              >
                Back
              </Button>
              <Button
                variant="contained"
                style={{ width: "150px" }}
                className={classes.button}
                href="/scorer/ScoringScreen"
              >
                Submit
              </Button>
              </center>
              <br />
              <br /> <br />
              <br />
            </Paper>
                </Grid>
    </Grid>
  </div>
          
        
    );
  }
}

OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OutlinedInputAdornments);
