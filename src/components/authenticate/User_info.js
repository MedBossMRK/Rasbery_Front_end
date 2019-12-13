import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputSimple from '../../materials/inputs/Simple_input'
import InputPassword from '../../materials/inputs/Password_Input'
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import css from '../../css/Globale.css'
import TextField from '@material-ui/core/TextField';



class User_info extends Component {

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
                        title="User Info"
                    />
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={0}

                        >
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <InputSimple title="First name" description="username" ></InputSimple>
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <InputSimple title="Last name" description="username" ></InputSimple>

                            </Grid>


                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={0}

                        >
                            <Grid item xs={12}  >
                                <InputSimple title="First name" description="adress" ></InputSimple>
                            </Grid>



                        </Grid>


                    </CardContent>
                    <CardActions>
                        <Button className={css.actioncards} variant="contained" color="secondary" href="#contained-buttons">
                            Submit
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button className={css.actioncards} variant="contained" color="primary" href="#contained-buttons">
                            Switch to sign up
                        </Button>
                    </CardActions>


                </Card>
            </Grid >


        );
    }
}

export default User_info;
