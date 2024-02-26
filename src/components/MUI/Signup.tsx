import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link as MUILink } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast, Zoom } from "react-toastify";
import {
  errorNotification,
  notificationTypes,
  successNotification,
  warningNotification,
} from "../../utils/Notifications";
import { Decrypt, Encrypt } from "../../utils/Incryption";
import { getDataToLocalStorage, saveDataToLocalStorage } from "../../utils/localstorage";
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();

  // all Regex Patters
  const namesRegex = /^(?! )(?!\s+$)[A-Za-z\s]+$/; // x2
  const userNameRegex = /^(?! )(?!\s+$)[a-z0-9\s]+$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{8,}$/;
  const cityRegex =
    /^(karachi|lahore|islamabad|peshawar|rawalpindi|faisalabad|multan|gujranwala)$/;

  const [dataReady, setDataReady] = React.useState(false);

  const [userInfo, setUserInfo] = React.useState({
    fNameData: "",
    lNameData: "",
    uNameData: "",
    emailData: "",
    passwordData: "",
    cityData: "",
    dateData: "",
  });

  const [state, setState] = React.useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),

    {
      // Input Fields
      fName: "",
      lName: "",
      uName: "",
      email: "",
      password: "",
      city: "",
      date: "2012-07-19",

      // Input Fields Error
      fNameError: false,
      lNameError: false,
      uNameError: false,
      emailError: false,
      passwordError: false,
      cityError: false,

      // Checks
      fNameCheck: false,
      lNameCheck: false,
      uNameCheck: false,
      emailCheck: false,
      passwordCheck: false,
      cityCheck: false,
    }
  );

 

  const errorNotify = ({
    msg,
    position,
    time,
    transitionName,
  }: notificationTypes) =>
    errorNotification({
      msg: msg,
      position: position,
      time: time,
      transitionName: transitionName,
    });
  const successNotify = ({
    msg,
    position,
    time,
    transitionName,
  }: notificationTypes) =>
    successNotification({
      msg: msg,
      position: position,
      time: time,
      transitionName: transitionName,
    });

  const warningNotify = ({
    msg,
    position,
    time,
    transitionName,
  }: notificationTypes) =>
    warningNotification({
      msg: msg,
      position: position,
      time: time,
      transitionName: transitionName,
    });




  React.useEffect(() => {
    let userInfoBox =  getDataToLocalStorage("userInfoBox") ?? []

    if (userInfoBox === null) {
      saveDataToLocalStorage("userInfoBox",[]);
    } else if (dataReady) {
      let dataPacket:any = [...userInfoBox]
      dataPacket.push(userInfo);

saveDataToLocalStorage("userInfoBox",dataPacket);

      setDataReady(false);
    }

    if (state.fNameCheck) {
      if (state?.fName.match(namesRegex)) {
        setState({ fNameError: false });
      } else {
        setState({ fNameError: true });
      }
    }

    if (state.lNameCheck) {
      if (state?.lName.match(namesRegex)) {
        setState({ lNameError: false });
      } else {
        setState({ lNameError: true });
      }
    }

    if (state.uNameCheck) {
      if (state?.uName.match(userNameRegex)) {
        setState({ uNameError: false });
      } else {
        setState({ uNameError: true });
      }
    }

    if (state.emailCheck) {
      if (state?.email.match(emailRegex)) {
        setState({ emailError: false });
      } else {
        setState({ emailError: true });
      }
    }

    if (state.passwordCheck) {
      console.log(state.password);
      if (state?.password.match(passwordRegex)) {
        setState({ passwordError: false });
      } else {
        setState({ passwordError: true });
      }
    }

    if (state.cityCheck) {
      if (state?.city.toLowerCase().match(cityRegex)) {
        setState({ cityError: false });
      } else {
        setState({ cityError: true });
      }
    }
  }, [
    state.fName,
    state.lName,
    state.uName,
    state.email,
    state.password,
    state.city,
    dataReady,
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      state?.fName &&
      state?.lName &&
      state?.uName &&
      state?.email &&
      state?.password &&
      state?.city &&
      !state.fNameError &&
      !state.lNameError &&
      !state.uNameError &&
      !state.emailError &&
      !state.passwordError &&
      !state.passwordError &&
      !state.cityError
    ) {
      if (state?.email && state?.password && state.uName) {

        let userInfoBox:any =  getDataToLocalStorage("userInfoBox") ?? [];


        const isEmailExsist:any = userInfoBox?.find(
          (userPacket: any) => userPacket.emailData === state.email
        );
        const isUserNameExsist:any = userInfoBox?.find(
          (userPacket: any) => userPacket.uNameData === state.uName
        );
        


if(!isUserNameExsist){

  if (!isEmailExsist) {
    

      setUserInfo((prevState) => ({
        ...prevState,
        fNameData: state?.fName,
        lNameData: state?.lName,
        uNameData: state?.uName,
        emailData: state?.email,
        passwordData: state?.password,
        cityData: state?.city,
        dateData: state?.date,
      }));

      setDataReady(true);

      setState({
        fName: "",
        lName: "",
        uName: "",
        email: "",
        password: "",
        city: "",
        date: "2012-07-19",

        fNameCheck: false,
        lNameCheck: false,
        uNameCheck: false,
        emailCheck: false,
        passwordCheck: false,
        cityCheck: false,
      });

      successNotify({
        msg: "Account created successfully !",
        position: "top-right",
        time: 1100,
        transitionName: Bounce,
      });

      setTimeout(() => {
        navigate("/login");
      }, 2200);
    
 
  } else {
    warningNotify({
      msg: "This email already exsist!",
      position: "top-right",
      time: 1200,
      transitionName: Zoom,
    });
  }




}else{
  errorNotify({
    msg: "This username already taken!",
    position: "top-right",
    time: 2000,
    transitionName: Bounce,
  });
}

      }
    } else {
      errorNotify({
        msg: "Please fill proper form!",
        position: "top-right",
        time: 2000,
        transitionName: Bounce,
      });
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "green" }}>
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={state?.fName ?? ""}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  error={state?.fNameError ? true : false}
                  label="First Name"
                  helperText={ state?.fNameError ? "only characters allowed" :  ""}
                  autoFocus
                  onChange={(e) => {
                    setState({ fName: e?.target?.value });
                    setState({ fNameCheck: true });
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={state?.lName ?? ""}
                  required
                  fullWidth
                  id="lastName"
                  error={state?.lNameError ? true : false}
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  helperText={ state?.lNameError ? "only characters allowed" :  ""}
                  onChange={(e) => {
                    setState({ lName: e?.target?.value });
                    setState({ lNameCheck: true });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={state?.uName ?? ""}
                  required
                  fullWidth
                  id="username"
                  error={state?.uNameError ? true : false}
                  label="User Name"
                  name="username"
                  autoComplete="username"
                   helperText={ state?.uNameError ? "username must be lowercase & numbers" :  ""}
                  onChange={(e) => {
                    setState({ uName: e?.target?.value });
                    setState({ uNameCheck: true });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={state?.email ?? ""}
                  required
                  fullWidth
                  id="email"
                  error={state?.emailError ? true : false}
                  label="Email"
                  name="email"
                  autoComplete="email"
                  helperText={ state?.emailError ? "incorrect email pattern" :  ""}
                  onChange={(e) => {
                    setState({ email: e?.target?.value });
                    setState({ emailCheck: true });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={state?.password ?? ""}
                  required
                  fullWidth
                  name="password"
                  error={state?.passwordError ? true : false}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  helperText={ state?.passwordError ? "minimum 8 characters allowed" :  ""}
                  onChange={(e) => {
                    setState({ password: e?.target?.value });
                    setState({ passwordCheck: true });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  value={state?.city ?? ""}
                  name="city"
                  required
                  fullWidth
                  id="city"
                  error={state?.cityError ? true : false}
                  label="City"
                  helperText={ state?.cityError ? "invalid city" :  ""}
                  onChange={(e) => {
                    setState({ city: e?.target?.value });
                    setState({ cityCheck: true });
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
                <label 
                
                style={{
                  backgroundColor:"white",
                  position:"absolute",
                  zIndex:2,
                  top:"7px",
                  left:"26px",
                  fontSize:"1.3vh",
                  color:"gray"

              }}
                
                
                >Birth Date</label>
                <input
                  type="date"
                  value={state?.date}
                  min="1960-01-01"
                  max={`${new Date().getFullYear()-4}-12-31`}
                  style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    borderRadius: "5px",
                    position:"relative",
                    border: state?.dateError
                      ? "1px solid red"
                      : "1px solid #bcbaba",
                  }}
                  onChange={(e) => {
                    setState({ date: e?.target?.value });
                    setState({ dateCheck: true });
                  }}
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "green",
                ": hover": {
                  backgroundColor: "green",
                },
              }}
            >
              Create account
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"}>
                  <MUILink variant="body2">
                    Already have an account? Login
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
