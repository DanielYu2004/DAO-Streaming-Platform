import React, { Component } from 'react';
import "./modVid.css"
import Thumbnail from "../feed/thumbnail"
import picture from "../../assets/thumbnail.jpg"

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';


const styles = {
    accept : {
        background : "#5f9650",
        margin : "5px",
        color : "white",
        "&:hover": {
            background: "#335c28"
        }
    },
    report : {
        background: "#a82f2f",
        margin : "5px",
        color : "white",
        "&:hover" : {
            background : "#701a1a"
        }
    },
}


class ModVid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : { 
                violence : false,
                nudity : false,
                dangerous : false,
                hateful : false,
                harassment : false,
                spam : false,
                other : false,
                privacy : false
            }
        }
    }

    onChange = (e) => {
        const field = e.target.name
        var data = this.state.data
        data[field] = !data[field]
        this.setState({data : data})
        console.log(this.state.data)
    }

    onSubmit = () => {
        console.log(this.state.data)

        //PUT POST REQUEST HERE
    }
    render() { 
        const { classes } = this.props; 

        return (
            <div className="indv-mod-vid-div">
                <Thumbnail image={picture}/>
                <div className="mod-vid-form-div">
                    <div className="mod-vid-form">
                        <div className="checkbox-container">
                            <div className="checkbox-div">
                                <Checkbox
                                name="violence"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.violence}
                                />
                                Violence
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="nudity"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.nudity}
                                />
                                Nudity
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="dangerous"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.dangerous}
                                />
                                Dangerous
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="hateful"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.hateful}
                                />
                                Hateful
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="harassment"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.harassment}
                                />
                                Harassment
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="spam"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.spam}
                                />
                                Spam
                            </div>
                            <div className="checkbox-div">
                                <Checkbox
                                name="privacy"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.privacy}
                                />
                                Privacy
                            </div>  
                            <div className="checkbox-div">
                                <Checkbox
                                name="privacy"
                                color="secondary"
                                onChange={this.onChange}
                                checked={this.state.privacy}
                                />
                                Other
                            </div>  
                        </div>
                        <div>
                            <Button variant="contained" classes={{root : classes.accept}} onClick={this.onSubmit}> not haram </Button>
                            <Button variant="contained" classes={{root : classes.report}} > haram </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withStyles(styles)(ModVid);
