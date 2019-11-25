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
//import css from '../../css/Globale.css'


function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}


class Sign_in extends Component {

    render() {
        return (

            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <Card className="Card" >
                    <CardHeader
                        title="Sign in"
                    />
                    <CardContent>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <InputSimple title="Username" description="username" ></InputSimple>
                            <InputPassword title="Password"></InputPassword>
                            <h1 > Test css</h1>

                        </Grid>

                    </CardContent>
                    <CardActions >
                        <Fab variant="extended" color="primary" aria-label="add"  >
                            <NavigationIcon />
                            Extended
                        </Fab>

                    </CardActions>
                    <CardActions >
                        <Link href="#" >
                            Forget password
                         </Link>
                    </CardActions>


                </Card>
            </Grid >


        );
    }
}

export default Sign_in;
