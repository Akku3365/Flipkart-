import { Box, styled, Typography } from "@mui/material";
import React from "react";
// import Login from "./Login";
import { navData } from "../../constant/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  overflow: "hidden",

  [theme.breakpoints.down("lg")]: {
    margin: "5px 12px",
  },
  [theme.breakpoints.down("md")]: {
    overflow: "overlay",
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
`;

function Header() {
  return (
    <Component>
      {navData.map((curr) => {
        const { url, text } = curr;
        return (
          <Container key={text}>
            <img src={url} alt={text} style={{ width: 70 }} />
            <Text>{text}</Text>
          </Container>
        );
      })}
    </Component>
  );
}

export default Header;
