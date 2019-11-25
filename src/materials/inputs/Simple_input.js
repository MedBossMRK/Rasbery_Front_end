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


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        // marginBottom: "20px"
    },
    input: {
        visibility: "hidden"
    }

}));

export default function InputWithIcon(props) {
    const classes = useStyles();
    let icon = <AccountCircle />;
    if (props.description == "email") {
        icon = <EmailIcon />;
    }

    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    {icon}
                </Grid>
                <Grid item>
                    <FormControl>
                        <InputLabel htmlFor="standard-adornment-password">{props.title}</InputLabel>
                        <Input
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
        </div>

    );


}