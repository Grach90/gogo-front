import * as React from "react";
import styles from "./navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const auth: boolean = false;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className={styles.navlinks}>
                Home
              </Link>
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ marginRight: 20 }}
              >
                <Link to="/search" className={styles.navlinks}>
                  <SearchIcon style={{ fontSize: 30 }} />
                  Искать
                </Link>
              </Typography>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/" className={styles.navlinks}>
                  <ControlPointIcon style={{ fontSize: 30 }} />
                  Опубликовать поездку
                </Link>
              </Typography>
            </div>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <AccountCircle style={{ fontSize: 45 }} />
              </IconButton>

              <Drawer
                anchor={"right"}
                open={state}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  {auth ? (
                    <List>
                      <ListItem button>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ձեր երթուղումները" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Նամակ" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Պրոֆիլ" />
                      </ListItem>
                      <ListItem button>
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Դուրս գալ" />
                      </ListItem>
                    </List>
                  ) : (
                    <List>
                      <Link to="/login">
                        <ListItem button>
                          <ListItemIcon>
                            <InboxIcon />
                          </ListItemIcon>
                          <ListItemText primary="Մուտք գործել" />
                        </ListItem>
                      </Link>
                      <Link to="/register">
                        <ListItem button>
                          <ListItemIcon>
                            <InboxIcon />
                          </ListItemIcon>
                          <ListItemText primary="Գրանցվել" />
                        </ListItem>
                      </Link>
                    </List>
                  )}
                  <Divider />
                </Box>
              </Drawer>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
