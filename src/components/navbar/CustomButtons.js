import { Box, Typography, styled } from "@mui/material";
import React,{useState, useHistory} from "react";
import { ShoppingCart } from "@mui/icons-material/";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import LoginPopup from "./LoginpopUp"
import { formatAmount } from "../../constant/data";
import AuthButton from "./AuthButton";

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


const CustomButtons = () => {
   
  const { totalQuantity, totalCartPrice } = useSelector((state) => state.cart);

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('userData') !== null);

  const [inpval, setInpval] = useState({
    email: '',
    password: '',
  });

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addData = (e) => {
    e.preventDefault();

    // Your existing logic here
    // ...

    // After successful login
    setIsLoggedIn(true);
    // history.push('/');
  };


  const handleLogout = () => {
    console.log("Logout Clicked");
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
  };  

  
  return (
    <Wrapper> 
     
     <AuthButton isLoggedIn={isLoggedIn} onLogout={handleLogout} />
               <Typography style={{ width: "140px" }}>Become a Seller</Typography>

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













