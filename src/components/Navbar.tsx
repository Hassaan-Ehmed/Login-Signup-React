import MenuIcon from "@mui/icons-material/Menu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import LogoutIcon from "@mui/icons-material/Logout";
import { Bounce, toast } from "react-toastify";
import { notificationTypes, successNotification } from "../utils/Notifications";
import { RootState } from "../redux/store";

function Navbar({ cartCount }: any) {
  const storeState = useAppSelector((state:any) => state?.products);


  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [fullName, setFullName] = React.useState<string>("");

  const navPacket = [
    { navName: "All Foods", navLink: `/` },
    { navName: "Pizza", navLink: "/pizza" },
    { navName: "Burger", navLink: "/burger" },
    { navName: "Icecream", navLink: "/icecream" },
  ];

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

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userToken");

    successNotify({
      msg: "Logout Successfully!",
      position: "bottom-right",
      time: 650,
      transitionName: Bounce,
    });

    setTimeout(() => {
      navigate("/login");
    }, 1600);
  };

  return (
    <>
      
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#004225",
              position: "sticky",
              top: 0,
              zIndex: 99999,
            }}
          >
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Link
                  to={`/`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <RestaurantIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                </Link>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="#app-bar-with-responsive-menu"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  <Link
                    to={`/`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Foods
                  </Link>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {navPacket.map((packet: any, i: number) => (
                      <MenuItem
                        key={packet.navName}
                        onClick={handleCloseNavMenu}
                      >
                        <Link to={packet.navLink} style={{listStyleType:"none"}}>
                          <Typography
                            textAlign="center"
                            sx={{ textDecoration:"none",color: "black",borderBottom:"white" }}
                          >
                            {packet.navName}
                          </Typography>
                        </Link>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {navPacket.map((packet: any, i: number) => (
                    <Button
                      key={packet.navName}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <Link
                        to={packet.navLink}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Typography
                          style={{ textDecoration: "none" }}
                          textAlign="center"
                        >
                          {packet.navName}
                        </Typography>
                      </Link>
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Cart Page">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Link
                        to={"/add-to-cart"}
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Badge
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          badgeContent={
                            <span
                              style={{
                                color: "black",
                                backgroundColor: "#FFAC00",
                                fontSize: "0.8vw",
                                padding: "2px",
                                borderRadius: "10%",
                              }}
                            >
                              {cartCount >= 100 ? "99+" : cartCount }
                            </span>
                          }
                        >
                          <ShoppingCartIcon
                            sx={{ color: "white", fontSize: "2vw" }}
                          />
                        </Badge>
                      </Link>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box sx={{ flexGrow: 0, margin: "0 -3px 0 30px" }}>
                  <Tooltip title="Log Out">
                    <IconButton onClick={handleLogOut} sx={{ p: 0 }}>
                      <LogoutIcon sx={{ color: "white", fontSize: "2vw" }} />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>


        <Outlet />
    </>
  );
}
export default Navbar;
