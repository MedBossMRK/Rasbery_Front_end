import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import EmailIcon from '@material-ui/icons/Email';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        // marginBottom: "20px"
    },
    input: {
        visibility: "hidden"
    },
    fullwidth: {
        width: "100%"
    },
    color: {
        backgroundColor: "red",
        //width: "90%"
    },
    color1: {
        backgroundColor: "yellow",
        // width: "10%"
    }

}));

export default function InputWithIcon(props) {
    const classes = useStyles();
    let icon = <AccountCircle />;
    if (props.description == "email") {
        icon = <EmailIcon />;
    } else if (props.description == "adress") {
        icon = <PersonPinCircleIcon />;
    }

    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-start" >
                <Grid xs={1}
                    item
                // className={classes.color1}
                >
                    {icon}
                </Grid>
                <Grid xs={11}
                    item
                //className={classes.color}
                >
                    <FormControl fullWidth={true} onChange={props.Change} >
                        <InputLabel htmlFor="standard-adornment-password">{props.title}</InputLabel>
                        <Input
                            name={props.name}
                            id="standard-adornment-password"
                            type={'text'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton className={classes.input}
                                        aria-label="toggle password visibility"

                                    >
                                        {< Visibility />}
                                    </IconButton>
                                </InputAdornment>

                            }
                        />

                    </FormControl>

                </Grid>
            </Grid>
        </div >

    );


}