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
      player: [],
    selectedValue: 'a',
    selectedValue: 'b',
    toss: "",
    AhmadShehzad: false,
    AsifAli: false,
    BabarAzam: false,
    FaheemAshraf: false,
    FakharZaman: false,
    HasanAli: false,
    HussainTalat: false,
    MohammadAmir: false,
    MohmamadNawar: false,
    RahatAli: false,
    SarfrazAhmed: false,
    ShadabKhan: false,
    ShaheenAfridi: false,
    ShoaibMalik: false,
    UsmanKhan: false,
    
    AndreFletcher: true,
    AndreMcCarthy: false,
    ChadwickWalton: false,
    DeneshRamdin: false,
    JasonMohammad: false,
    KeernoPaul: false,
    KesrickWilliams: false,
    MarlonSamuels: false,
    OdeanSmith: false,
    RayadEmrit: false,
    RavmanPowell: false,
    SmualBadree: false,
    VeerasamyPermaul: false,
    top100Films:"",
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
  handleChange = prop => event => {
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
    
  };
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
    const { AhmadShehzad,AsifAli,BabarAzam,FaheemAshraf,FakharZaman,HasanAli, HussainTalat,MohammadAmir,MohmamadNawar,RahatAli,SarfrazAhmed,ShadadKhan,ShaheenAfridi,ShoaibMalik, UsmanKhan} = this.state;
    const error = [AhmadShehzad,AsifAli,BabarAzam,FaheemAshraf,FakharZaman,HasanAli, HussainTalat,MohammadAmir,MohmamadNawar,RahatAli,SarfrazAhmed,ShadadKhan,ShaheenAfridi,ShoaibMalik, UsmanKhan].filter(v => v).length !== 11;
    var player = this.state.player;
    var abc = ["kavya", "asha", "meera"];
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
                     
                      onChange={this.handleChange("AhmedShehzad")}
                      value="Ahmed Shehzad"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Ahmed Shehzad"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange("AsifAli")}
                      value="Asif Ali"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Asif Ali"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      
                      onChange={this.handleChange("BabarAzam")}
                      value="Babar Azam"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Babar Azam"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                     
                      onChange={this.handleChange("FaheemAshraf")}
                      value="Faheem Ashraf"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Faheem Ashraf"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                     // checked={this.state.FakharZaman}
                      onChange={this.handleChange("FakharZaman")}
                      value="Fakhar Zaman"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Fakhar Zaman"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                     // checked={this.state.HasanAli}
                      onChange={this.handleChange("HasanAli")}
                      value="Hasan Ali"
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
                    //  checked={this.state.HussainTalat}
                      onChange={this.handleChange("HussainTalat")}
                      value="Hussain Talat"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Hussain Talat"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    //  checked={this.state.MohammadAmir}
                      onChange={this.handleChange("MohammadAmir")}
                      value="Mohammad Amir"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Mohammad Amir"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    //  checked={this.state.MohmamadNawar}
                      onChange={this.handleChange("MohmamadNawar")}
                      value="Mohmamad Nawar"
                      color="primary"
                    //  class="checks"
                    />
                  }
                  label="Mohammad Nawar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    //  checked={this.state.RahatAli}
                      onChange={this.handleChange("RahatAli")}
                      value="Rahat Ali"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Rahat Ali"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    //  checked={this.state.SarfrazAhmed}
                      onChange={this.handleChange("SarfrazAhmed")}
                      value="Sarfraz Ahmed"
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
                     // checked={this.state.ShadabKhan}
                      onChange={this.handleChange("ShadabKhan")}
                      value="Shadab Khan"
                      color="primary"
                  //    class="checks"
                    />
                  }
                  label="Shadab Khan"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    //  checked={this.state.ShaheenAfridi}
                      onChange={this.handleChange("ShaheenAfridi")}
                      value="checkedB"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Shaheen Afridi"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                    //  checked={this.state.ShoaibMalik}
                      onChange={this.handleChange("ShoaibMalik")}
                      value="Shoaib Malik"
                      color="primary"
                     // class="checks"
                    />
                  }
                  label="Shoaib Malik"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                     // checked={this.state.checkedO}
                      onChange={this.handleChange("UsmanKhan")}
                      value="UsmanKhan"
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
              <TextareaAutosize aria-label="empty textarea"  value={abc.join("\n")}/>
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

              <FormGroup column>
                <FormLabel component="legend">B1</FormLabel>
                <FormControlLabel
                  control={
                    <Checkbox
                   //   checked={this.state.AndreFletcher}
                      onChange={this.handleChange("AndreFletcher")}
                      value="Andre Fletcher"
                      color="primary"
                    />
                  }
                  label="Andre Fletcher"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                   //   checked={this.state.AndreMcCarthy}
                      onChange={this.handleChange("AndreMcCarthy")}
                      value="Andre McCarthy"
                      color="primary"
                    />
                  }
                  label="AndreMeCarthy"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                   //   checked={this.state.ChadwickWalton}
                      onChange={this.handleChange("ChadwickWalton")}
                      value="Chadwick Walton"
                      color="primary"
                    />
                  }
                  label="Chadwick Walton"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                   //   checked={this.state.DeneshRamdin}
                      onChange={this.handleChange("DeneshRamdin")}
                      value="Denesh Ramdin"
                      color="primary"
                    />
                  }
                  label="Denesh Ramdin"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                  //    checked={this.state.JasonMohammad}
                      onChange={this.handleChange("JasonMohammad")}
                      value="Jason Mohammad"
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
                  //    checked={this.state.KeernoPaul}
                      onChange={this.handleChange("KeernoPaul")}
                      value="Keerno Paul"
                      color="primary"
                    />
                  }
                  label="Keerno Paul"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                  //    checked={this.state.KesrickWilliams}
                      onChange={this.handleChange("KesrickWilliams")}
                      value="Kesrick Williams"
                      color="primary"
                    />
                  }
                  label="Kesrick Williams"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                  //    checked={this.state.MarlonSamuels}
                      onChange={this.handleChange("MarlonSamuels")}
                      value="Marlon Samuels"
                      color="primary"
                    />
                  }
                  label="Marlon Samuels"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                  //    checked={this.state.OdeanSmith}
                      onChange={this.handleChange("OdeanSmith")}
                      value="Odean Smith"
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
                  //    checked={this.state.RayadEmrit}
                      onChange={this.handleChange("RayadEmrit")}
                      value="Rayad Emrit"
                      color="primary"
                    />
                  }
                  label="Rayad Emrit"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                  //    checked={this.state.SamualBadree}
                      onChange={this.handleChange("SamualBadree")}
                      value="Samual Badree"
                      color="primary"
                    />
                  }
                  label="Samual Badree"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                  //    checked={this.state.VeerasamyPermaul}
                      onChange={this.handleChange("Veerasamy Permaul")}
                      value="Veerasamy Permaul"
                      color="primary"
                    />
                  }
                  label="Veerasamy Permaul"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                  //    checked={this.state.RovmanPowell}
                      onChange={this.handleChange("RovmanPowell")}
                      value="Rovman Powell"
                      color="primary"
                    />
                  }
                  label="Rovman Powell"
                />

                <Divider />
              </FormGroup>
                         
              </Grid>
              <Grid item xs={4}>
              <h3>Playing 11</h3>
              <TextareaAutosize aria-label="minimum height" rowsMin={45} type="text" id="selectedtext" />
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
