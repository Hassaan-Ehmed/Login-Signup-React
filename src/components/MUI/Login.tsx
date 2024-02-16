import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link as MUILink} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createInputFiles } from 'typescript';
import { Link, useNavigate } from 'react-router-dom';
import VpnKeyIcon from '@mui/icons-material/VpnKey';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function LogIn() {

const navigate = useNavigate();

    
    const [state,setState] = React.useReducer((state:any,newState:any)=>(
        {...state,...newState} ),
    
        {
            
             // Input Fields
            email:"",
            password:"",
           
 
      }
    )
    
   


      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
if((state?.email && state?.password) )
    {
    

      if(((!state.emailError) && (!state.passwordError))){
    
     let userInfoBox = JSON.parse(localStorage.getItem("userInfoBox" ||"[]") as string);
    
    const user = userInfoBox.find((userPacket: any) => userPacket.emailData === state.email);

    if (user) {
  
      if (user.passwordData === state?.password) {

        let token = user.fNameData+"#123$^*#";
        
      localStorage.setItem("userToken",JSON.stringify(token));
      
      navigate(`/user/${user.fNameData.toLowerCase()}-${user.lNameData.toLowerCase()}`)
      
      } else {
        alert("Incorrect Password!");
      }
    } else {
      alert("This user doesn't exist!");
    }
  } else {
    alert("Icorrect Credentials!");
  }

    }else {
      alert("Please fill in both email and password fields!");
    }
    
  }
      // if((state?.email && !state.emailError && state.email.match(emailRegex)) || (state?.password && !state.passwordError && state.password.match(passwordRegex))){
      // }
    
        // userInfoBox?.map((userPacket:any)=>{
    
        //   if(userPacket.emailData === state?.email){
          
        //     if(userPacket?.passwordData === state?.password){

        //       console.log(`Welcome ${state.userPacket?.fNameData} ${state.userPacket?.lNameData}`);
 
        //     }else  if (state?.password && !state.passwordError){
        //       console.log("Incorrect Password !");
           
        //     }
          
          
        //   }else {
        //     console.log("this User don't Exsist!");
          
        //   }
        
        
        // })
    
      
  
    
    
      // if(dataReady){
          
    
      //   setDataReady(false)
        
      // }
    
    
    
    //   const handleDate=(e: React.ChangeEvent<HTMLFormElement>)=>{
    
    // console.log(e.target.value);
    
    //   }
//   const handleDate=(e: React.ChangeEvent<HTMLFormElement>)=>{

// console.log(e.target.value);

//   }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
          <VpnKeyIcon/>

          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
             
              <Grid item xs={12}>
                <TextField
                 autoFocus
                 value={state?.email ?? "---"}
                  required
                  fullWidth
                  id="email"
                  error={state?.emailError ? true : false}
                  label={state?.emailError ?  "incorrect email pattern" : "Email"}
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {setState({email : e?.target?.value}); setState({emailCheck:true})}}
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                   value={state?.password ?? "---"}
                   required
                   fullWidth
                   name="password"
                   error={state?.passwordError ? true : false}
                   label={state?.passwordError ?  "minimum 8 characters" : "Password"}
                   type="password"
                   id="password"
                   autoComplete="new-password"
                   
                   onChange={(e) => {setState({password : e?.target?.value}); setState({passwordCheck:true})}}
                  
                />
              </Grid>



            </Grid>



            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:"orange", ": hover":{
                backgroundColor:"orange"
              }}}
            >
              Log in
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={'/signup'}>
                
                <MUILink  variant="body2" >
                  You don't have an account? Sign up
                </MUILink>
                
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
          
      </Container>
    </ThemeProvider>
  );
}
