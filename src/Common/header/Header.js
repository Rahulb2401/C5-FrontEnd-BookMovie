import React, { Fragment, useState } from "react";
import Modal from "react-modal";
import "./Header.css";
import Logo from "../../assets/logo.svg";
import { Button} from "@material-ui/core";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../Login';
import Signup from "../SignUp";



Modal.setAppElement("#root");




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center'
    },
    button:{
        display:'flex',
        justifyContent:'center'
    }
});



export default function Header() {

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const [modalisOpen, setModal] = useState(false);

    return (
        <Fragment>
            <div className="header" >

                <img className="logo" src={Logo} alt="logo" ></img>

                <Button variant="contained" className="Button-btn" color="default" onClick={() => setModal(true)} > Login  </Button>
                <Button variant="contained" className="Button-btn" >LogOut </Button>
                <Button variant="contained" className="Button-btn" color="primary" >Book Show </Button>



                {/* Modal build */}

                < Modal
                    isOpen={modalisOpen}
                    onRequestClose={() => setModal(false)}
                    shouldCloseOnOverlayClick={true}
                    style={{
                        margin: '20px auto',
                        display:'flex',
                        width:300,
                        height:500,
                        justifyContent:'center'
                    }}

                >

                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="default"
                        centered

                    >
                        <Tab label="Login" />
                        <Tab label="Sign Up" />

                    </Tabs>

                    <TabPanel className={classes.root} value={value} index={0} dir={theme.direction}>

                        {/* <ValidatorForm>

                            <FormControl>

                                <InputLabel htmlFor="my-input">First Name</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                            <br></br>

                            <FormControl>
                                <InputLabel htmlFor="my-input">Last Name</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                            <br></br>
                            <br></br>

                            <Button type="submit" variant="contained" color="primary">Login</Button>
                        </ValidatorForm> */}
                        <Login></Login>



                    </TabPanel>



                    {/* Sign up form */}

                    <TabPanel className={classes.root} value={value} index={1} dir={theme.direction}>


                       <Signup></Signup>
                    </TabPanel>

                </Modal>



            </div >
        </Fragment >
    );
}