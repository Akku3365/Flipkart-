import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material/";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatAmount } from "../../constant/data";


function CustomButtons() {
  
  const { logout, loginWithRedirect, isAuthenticated} = useAuth0();
  console.log(isAuthenticated);
  const { totalQuantity, totalCartPrice } = useSelector((state) => state.cart);

// const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };  

  
  return (
    <Wrapper> 
        <LoginButton
          variant="contained"
          onClick={() => loginWithRedirect()}
          style={{ width: "110px", marginLeft: "20px" }}
        >
          Login
        </LoginButton>
        <LoginButton onClick={() => handleLogout()} style={{ height: "35px" }}>
             Logout
          </LoginButton>
      {/* {isLoading && <Typography>Loading...</Typography>} */}

      {/* {isAuthenticated && <Profile name={user.name} isLoading={isLoading} />} */}

      {/* <Typography style={{ width: "140px" }}>Become a Seller</Typography> */}

      <Typography>More</Typography>

      <Link
        to={ "/cart"}
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Container>
          <ShoppingCart />
          <Typography style={{ display: "flex", alignItems: "center", marginRight: "20px"}}>
            Cart
            <span
              style={{
                marginLeft: "0.6rem",
                display: "flex",
                gap: "0.6rem",
                borderRadius: "10px",
              }}
            >{totalQuantity}</span>
              {/* <span
                style={{
                  // backgroundColor: "#e6000e",
                  backgroundColor: "#143a78",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "50px",
                }}
              >
                
              </span> */}
              {/* <span
                style={{
                  backgroundColor: "#005a16",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "50px",
                }}
              >
                {/* {formatAmount(totalCartPrice * 80)} */}
              {/* </span>  */}
            {/* </span> */}
          </Typography>
        </Container>
      </Link>
      {/* <Typography onClick={handleLogout} style={{ border: "2px solid red",position: "relative", left: "80px"}}>
             Log Out
          </Typography> */}
    </Wrapper>
  );
}

export default CustomButtons;

// const Wrapper = styled(Box)`
//   display: flex;
//   align-items: center;
//   margin: 0 3% 0 auto;
//   & > button,
//   & > p,
//   & > div {
//     margin-right: 40px;
//   }
// `;

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background-color: #fff;
  padding: 5px 30px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  &:hover {
    background-color: #7eacf6;
    color: #fff;
  }
`;
