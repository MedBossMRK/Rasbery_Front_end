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



class Sign_up extends Component {

    /*FormChange = event => {
        console.log(event.target.value);
        this.props.testEvent("Bravo");
    }*/

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
                        title="Sign up"
                    />
                    <CardContent>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                            spacing={0}
                        >
                            <InputSimple name="username" Change={this.props.testEvent}
                                title="Username" description="username"
                            ></InputSimple>
                            <InputSimple name="email" title="Email"
                                description="email" Change={this.props.testEvent}
                            ></InputSimple>
                            <InputPassword name="password" title="Password"
                                Change={this.props.testEvent}
                            ></InputPassword>
                            <InputPassword name="cfpassword" title="Confirme your Password"
                                Change={this.props.testEvent}
                            ></InputPassword>

                        </Grid>

                    </CardContent>
                    <CardActions>
                        <Button className={css.actioncards} variant="contained"
                            color="secondary" href="#contained-buttons"
                            onClick={this.props.submit}
                        >
                            Submit
                        </Button>
                    </CardActions>
                    <CardActions>
                        <Button className={css.actioncards}
                            variant="contained"
                            color="primary"
                            href="#contained-buttons"
                            onClick={this.props.switch}
                        >
                            Switch to sign in
                        </Button>
                    </CardActions>


                </Card>
            </Grid >


        );
    }
}

export default Sign_up;
