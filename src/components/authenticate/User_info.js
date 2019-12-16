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
import MultilineTextFields from '../../materials/TextArea/TextAria';



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
                                <InputSimple
                                    title="First name"
                                    description="username"
                                    Change={this.props.inputchange}
                                    name="firstname"
                                ></InputSimple>
                            </Grid>
                            <Grid item xl={6} md={6} sm={12} xs={12}>
                                <InputSimple
                                    title="Last name"
                                    description="username"
                                    Change={this.props.inputchange}
                                    name="lastname"
                                ></InputSimple>

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
                                <MultilineTextFields
                                    title="Address"
                                    description="adress"
                                    Change={this.props.inputchange}
                                    name="address"
                                ></MultilineTextFields>
                            </Grid>

                        </Grid>
                        <div className={css.upload}>
                        </div>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={0}

                        >
                            <Grid item xs={12}  >
                                <input
                                    ref="upload"
                                    type="file"
                                    style={{ display: "none" }}
                                    onChange={this.props.fileChange}
                                />
                                <Button className={css.actioncards} variant="contained"
                                    color="primary" href="#contained-buttons"
                                    onClick={() => {
                                        // console.log(this.refs.upload);
                                        this.refs.upload.click();

                                    }}
                                >

                                    {this.props.fileName}

                                </Button>


                            </Grid>

                        </Grid>


                    </CardContent>
                    <CardActions>
                        <Button
                            className={css.actioncards} variant="contained"
                            color="secondary" href="#contained-buttons"
                            onClick={this.props.submit}
                        >
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
