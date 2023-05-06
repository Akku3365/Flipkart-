import { Typography, Box, styled } from "@mui/material";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useAuth0 } from "@auth0/auth0-react";

function Profile({ name }) {
  const [open, setOpen] = React.useState(false);
  const { logout } = useAuth0();

  function logoutHandler() {
    logout();
  }

  function handleClick(e) {
    setOpen(e.currentTarget);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <NameWrapper
        onClick={handleClick}
        style={{ width: "130px", textAlign: "center", marginLeft: "20px"}}
      >
        <Typography style={{border: "2px solid black"}}>{name}</Typography>
      </NameWrapper>

      <Menu
        id="basic-menu"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>
          <PowerSettingsNewIcon
            style={{ margin: "0 auto" }}
            onClick={logoutHandler}
            color="primary"
          />
        </MenuItem>
      </Menu>
    </>
  );
}

export default Profile;

const NameWrapper = styled(Box)`
  &:hover {
    cursor: pointer;
  }
`;
