import "./App.css";
import Home from "./components/home/Home";
import { Box } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import RootLayout from "./components/sharedlayout/RootLayout";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/Checkout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/cart/cart-slice";
import LoginMain from "./components/navbar/LoginMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <DetailView />,
      },
      {
        path: "/loginmain",
        element: <LoginMain/>
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

let firstTime = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("cart"));
    if (storeData) {
      dispatch(cartActions.setWholeCart(storeData));
    }
  }, [dispatch]);

  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, dispatch]);

  return (
    <div>
      <Box style={{ marginTop: 54 }}>
        <RouterProvider router={router} />
      </Box>
    </div>
  );
}

export default App;
// https://mui.com/material-ui/getting-started/templates/checkout/
