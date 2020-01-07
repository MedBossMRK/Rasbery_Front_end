import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

import css from '../../css/Globale.css'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: '3px',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function SimpleExpansionPanel(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={0}
                    >
                        <Grid item xl={6} md={6} sm={6} xs={6}>
                            <Avatar alt="Remy Sharp"
                                src={props.imageUrl} />
                        </Grid>
                        <Grid item xl={6} md={6} sm={6} xs={6}>
                            <Typography className={classes.heading}>{props.username}</Typography>
                        </Grid>


                    </Grid>

                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <Grid item xl={12} md={12} sm={12} xs={12}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={css.actioncards}
                                    startIcon={<DeleteIcon />}
                                    name={props.username}
                                    onClick={() => {
                                        props.deleteuser(props.username);
                                    }}
                                >
                                    Delete
                                 </Button>
                            </Grid>

                        </Grid>

                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
