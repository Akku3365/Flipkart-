import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import styledComponent from "styled-components";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { red } from "@mui/material/colors";
import { useLocation } from "react-router-dom";
const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

function Navbar(props) {
  //  for responsive navbar
  const [openDrawer, setOpenDrawer] = useState(false);

  const location = useLocation();
  const name = location.state && location.state.name;

  function handleOpenDrawer() {
    setOpenDrawer((prev) => !prev);
  }

  function list() {
    return (
      <Box onClick={handleOpenDrawer}>
        <List>
          <ListItem button>
            <CustomButtons />
          </ListItem>
        </List>
      </Box>
    );
  }

  return (
    <StyledNavbar style={{height: "55px", justifyContent: "center"}}>
      <Toolbar style={{ minHeight: "35px", display: "flex", justifyContent: "space-around",
        }}
      >
        <MenuButton aria-label="delete" color="inherit"onClick={handleOpenDrawer}>
                <MenuIcon />
        </MenuButton>

        <Drawer open={openDrawer} onClose={handleOpenDrawer}>
             {list()}
        </Drawer>

        <Component to="/" style={{marginLeft: 160, marginTop: 10}}>
          <img src={logoURL} alt="logo" style={{width: 75 }} />
          <h1>{name}</h1>
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </Subheading>
            <PlusImage src={subURL} alt="" />
            
          </Box>
        </Component>

        <Search />

        <CustomNavComponent>
          <CustomButtons />
        </CustomNavComponent>
      </Toolbar>
    </StyledNavbar>
  );
}

export default Navbar;

// Box serves as div wrapper
// Typography is a replacement of p tag

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const StyledNavbar = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)`
  /* margin-left: 12%; */
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styledComponent.img`
  width: 10px;
  height: 10px;
  margin-left: 4px
`;

const CustomNavComponent = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
