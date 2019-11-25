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



class Sign_up extends Component {

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
                            <InputSimple title="Username" description="username" ></InputSimple>
                            <InputSimple title="Email" description="email" ></InputSimple>
                            <InputPassword title="Password"></InputPassword>
                            <InputPassword title="Confirme your Password"></InputPassword>

                        </Grid>

                    </CardContent>
                    <CardActions>

                    </CardActions>

                </Card>
            </Grid >


        );
    }
}

export default Sign_up;
