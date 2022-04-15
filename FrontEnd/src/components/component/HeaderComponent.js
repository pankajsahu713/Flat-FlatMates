import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AuthenticationService from '../../service/AuthenticationService';
import { AppBar, Grid, Typography } from "@mui/material";
import { createTheme , ThemeProvider} from '@mui/material/styles';
import logo from "../images/flatandflatmates.png";
// import './Header.css';
import { grey } from '@mui/material/colors';
import styled from "styled-components";
import  Button , { ButtonProps } from "@mui/material/Button";
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { useGithubBtnStyles } from '@mui-treasury/styles/button/github';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import { ContactSupport } from "@mui/icons-material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";

function HeaderComponent() {
 
  const loggedIn = AuthenticationService.isUserLoggedIn();
  
const theme = createTheme({
  palette: {
    primary: {
      main:  grey[500],
      contrastText: '#fff',
    },
    secondary: {
      main: grey[50],
      contrastText: '#000',
    },
  },
});

const classes = createTheme({
  box: {
    height: 100,
    display: "flex",
    border: "1px solid black",
    padding: 8
  },
  centerBox: {
    justifyContent: "center",
    alignItems: "center"
  },
  customizeToolbar: {
    minHeight: 30
  }


})

const NavUnlisted = styled.ul`
   text-decoration: none;
 `;

const linkStyle = {
   margin: "1rem",
   textDecoration: "none",
   color: 'white'
 };
  
  const styles = useGradientBtnStyles();
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 1 });

  return (
    

    <ThemeProvider theme={theme}>
      {console.log('loggedIn', loggedIn)}
    <AppBar color="primary" position="static" sx={{height:'60px'}}>
      <Toolbar disableGutters>
        <Typography variant="h3">
          <img src={logo} style={{height:"50px" , width : "200px"}}/>
        {/* <FaHouzz  className='logo'/> */}
        </Typography>
      
      <div class="container-fluid">

      <Box  component="div" m={1}  className={`${classes.centerBox} ${classes.box}`}>
      
      <NavUnlisted>
      <Stack  direction="row" spacing={10} >
         <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<HomeIcon/>} ><Link to="/" style={linkStyle}>Home</Link> </Button>
       
        {loggedIn && ( 
        <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<SearchIcon />}> <Link to="/search" style={linkStyle}>Search</Link> </Button>)}
        <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<InfoIcon />}> <Link to="/aboutUs" style={linkStyle}>AboutUs</Link> </Button>
        <Button variant="outlined" color="secondary" style={{ height: 40 }} size="large" startIcon={<ContactSupport />}> <Link to="/contact" style={linkStyle}>ContactUs</Link> </Button>
        
        <div className={gutterStyles.parent}>
       {!loggedIn && (<Stack direction="row" spacing={10}>
          <Button classes={styles} size="large" style={{ height: 40}}>
            <Link to="/signup" style={linkStyle}>Register</Link>
          </Button>
          <Button classes={styles} size="large" style={{ height: 40 }}>
            <Link to="/login" style={linkStyle}>Login</Link>
          </Button>
        </Stack> )}

        { loggedIn && (<Button classes={styles} size="large" style={{ height: 40 }} onClick={AuthenticationService.removeUserDetails}>
            <Link to="/logout" style={linkStyle}>Logout</Link>
          </Button>)}
      </div> 
      </Stack>
      </NavUnlisted>
     </Box>
      
    </div>
    </Toolbar>
    </AppBar>
    </ThemeProvider>
 
   );
}
export default withRouter(HeaderComponent);
