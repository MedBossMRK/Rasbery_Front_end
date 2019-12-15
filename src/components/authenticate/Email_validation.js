import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SvgIcon from '@material-ui/core/SvgIcon';
import LockIcon from '@material-ui/icons/Lock';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputSimple from '../../materials/inputs/Simple_input'
import InputPassword from '../../materials/inputs/Password_Input'
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import css from '../../css/Globale.css'
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import color from '@material-ui/core/colors/amber';
import ValidationAccepteUi from '../../materials/Loading/Validation_Accepte'
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';



class EmailValidation extends Component {


    render() {
        const theme = createMuiTheme({
            palette: {
                primary: purple,
                secondary: {
                    main: '#f44336',
                },
            },
        });
        return (

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Card className="Card" >
                    <CardHeader
                        title="validate your email"
                    />
                    <CardContent>
                        {/*
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <InputSimple title="Your email here" description="email" ></InputSimple>

                        </Grid>
                        */}
                    </CardContent>
                    <CardActions  >
                        {(this.props.type == "before" ?
                            <div className={css.center} onClick={() => {
                                setTimeout(() => {
                                    this.props.sendEmail();
                                }, 1000);
                            }} >
                                <ValidationAccepteUi />
                            </div> :
                            <div className={css.center}>
                                <CircularProgress color="secondary" />
                            </div>

                        )}

                    </CardActions>
                </Card>
            </Grid >


        );
    }
}

export default EmailValidation;
