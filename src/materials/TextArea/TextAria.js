import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        // marginBottom: "20px"
    },
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function MultilineTextFields(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = event => {
        setValue(event.target.value);
    };
    let icon = <PersonPinCircleIcon />;

    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-start"  >
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
                        <TextField
                            id="standard-textarea"
                            label="Multiline Placeholder"
                            placeholder="Placeholder"
                            multiline
                            name={props.name}

                        />

                    </FormControl>

                </Grid>
            </Grid>
        </div >

    );
}
