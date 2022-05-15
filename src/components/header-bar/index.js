import "./index.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import { MobileView, BrowserView } from "react-device-detect";
import { logo } from "common/common-imports";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Fade from "react-reveal/Fade";

function HeaderBar() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  const menuItems = ["Highlights", "About Us", "Contact Us"];

  return (
    <div className="header-bar-main">
      <div className="left-container">
        <Fade left>
          <img src={logo} className="img-logo" alt="logo" />
        </Fade>
      </div>
      <div className="right-container">
        <MobileView>
          <Button className="menu-button" onClick={() => setToggleDrawer(true)}>
            <MenuIcon />
          </Button>
        </MobileView>
        <BrowserView>
          <Fade right cascade>
            <div className="menu">
              {menuItems.map((text) => (
                <div className="item">
                  <a>{text}</a>
                </div>
              ))}
            </div>
          </Fade>
        </BrowserView>
      </div>

      <Drawer
        anchor={"right"}
        open={toggleDrawer}
        onClose={() => setToggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setToggleDrawer(false)}
          onKeyDown={() => setToggleDrawer(false)}
        >
          <List>
            {menuItems.map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
}

export default HeaderBar;
