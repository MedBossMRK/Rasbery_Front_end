import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            // onClick={props.ItemSelected}
            onKeyDown={toggleDrawer(side, false)}
        >

            {props.isActive ?
                <List>
                    <ListItem button key="Home" >
                        <ListItemIcon > <HomeIcon /></ListItemIcon>
                        <ListItemText onClick={(event) => {
                            props.ItemSelected(event, 'Home');
                        }}
                            primary={"Home"} />
                    </ListItem>
                    <ListItem button key="Connect" >
                        <ListItemIcon > <SettingsInputAntennaIcon /></ListItemIcon>
                        <ListItemText onClick={(event) => {
                            props.ItemSelected(event, 'Connect');
                        }}
                            primary={"Connect"} />
                    </ListItem>
                    <ListItem button key="Users" >
                        <ListItemIcon > <GroupIcon /></ListItemIcon>
                        <ListItemText onClick={(event) => {
                            props.ItemSelected(event, 'Users');
                        }}
                            primary={"Users"} />
                    </ListItem>
                    <ListItem button key="SendInvitation" >
                        <ListItemIcon > <EmailIcon /></ListItemIcon>
                        <ListItemText onClick={(event) => {
                            props.ItemSelected(event, 'SendInvitation');
                        }}
                            primary={"SendInvitation"} />
                    </ListItem>
                    <ListItem button key="Operations" >
                        <ListItemIcon > <WorkIcon /></ListItemIcon>
                        <ListItemText onClick={(event) => {
                            props.ItemSelected(event, 'Operations');
                        }}
                            primary={"Operations"} />
                    </ListItem>
                </List>
                :

                < List >
                    <ListItem button key="Home" >
                        <ListItemIcon > <HomeIcon /></ListItemIcon>
                        <ListItemText onClick={(event) => {
                            props.ItemSelected(event, 'Home');
                        }}
                            primary={"Home"} />
                    </ListItem>
                </List>
            }




            <Divider />



            {
                props.isActive ?
                    <List>
                        {
                            props.status == 1 ?
                                <ListItem button key="ValidateEmail" >
                                    <ListItemIcon > <AssignmentTurnedInIcon /></ListItemIcon>
                                    <ListItemText onClick={(event) => {
                                        props.ItemSelected(event, 'ValidateEmail');
                                    }}
                                        primary={"ValidateEmail"} />
                                </ListItem>
                                :
                                <div></div>

                        }
                        {
                            props.status == 2 ?
                                <ListItem button key="Profile" >
                                    <ListItemIcon > <AccountCircleIcon /></ListItemIcon>
                                    <ListItemText onClick={(event) => {
                                        props.ItemSelected(event, 'Profile');
                                    }}
                                        primary={"Profile"} />
                                </ListItem>
                                :
                                <div></div>

                        }
                        <ListItem button key="Log Out" >
                            <ListItemIcon > <ExitToAppIcon /></ListItemIcon>
                            <ListItemText onClick={(event) => {
                                props.ItemSelected(event, 'Log Out');
                            }}
                                primary={"Log Out"} />
                        </ListItem>

                    </List>
                    :
                    <List>
                        <ListItem button key="Sign In" >
                            <ListItemIcon > <VpnKeyIcon /></ListItemIcon>
                            <ListItemText onClick={(event) => {
                                props.ItemSelected(event, 'Sign In');
                            }}
                                primary={"Sign In"} />
                        </ListItem>
                        <ListItem button key="Sign Up" >
                            <ListItemIcon > <MenuBookIcon /></ListItemIcon>
                            <ListItemText onClick={(event) => {
                                props.ItemSelected(event, 'Sign Up');
                            }}
                                primary={"Sign Up"} />
                        </ListItem>
                    </List>
            }
        </div >

    );

    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            { /* <Button onClick={toggleDrawer('left', true)}>Open Left</Button>
            <Button onClick={toggleDrawer('right', true)}>Open Right</Button>
            <Button onClick={toggleDrawer('top', true)}>Open Top</Button>
            <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>*/}
            <Drawer onClick={props.DrawerClick} open={props.ToggleKey} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
                {fullList('top')}
            </Drawer>
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {fullList('bottom')}
            </Drawer>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer>
        </div>
    );
}
