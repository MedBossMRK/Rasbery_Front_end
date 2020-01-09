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





class Operation extends Component {


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
                        title="Open the key"
                    />
                    <CardActions >
                        {
                            this.props.keyWait ?
                                <h1>wait ....</h1>
                                :
                                this.props.operation ?
                                    <Button className={css.actioncards}
                                        variant="contained"
                                        color="secondary"
                                        href="#contained-buttons"
                                        onClick={this.props.submit}
                                    >
                                        turn off
                                </Button>
                                    :
                                    <Button className={css.actioncards}
                                        variant="contained"
                                        color="secondary"
                                        href="#contained-buttons"
                                        onClick={this.props.submit}
                                    >
                                        turn on
                                </Button>
                        }




                    </CardActions>



                </Card>
            </Grid >


        );
    }
}

export default Operation;
