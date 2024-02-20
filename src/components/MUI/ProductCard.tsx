import { Card as MUICard } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToCart,
  decreaseItemQuantity,
  removeFromCart,
} from "../../redux/slices/products";
import { Bounce, toast, Zoom } from "react-toastify";
import { store } from "../../redux/store";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";

import {
  errorNotification,
  notificationTypes,
  successNotification,
  warningNotification,
} from "../../utils/Notifications";
import { useEffect, useMemo, useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProductCard({
  key,
  indexNum,
  quantity,
  foodPacket,
  forCart,
}: any) {
  const dispatch = useAppDispatch();
  const storeState: any = useAppSelector((state) => state?.products);

  const [currentQuantity, setQuantity] = useState(0);
  const [itemPresent, setItemPresent] = useState(false);

  useEffect(() => {
    let cartProducts = JSON.parse(
      localStorage.getItem("cartProducts") as string
    );

    const isPresent = cartProducts.filter((i: any) => i.id === foodPacket.id);
    if (isPresent?.length > 0) {
      setItemPresent(true);
    }
    setQuantity(isPresent[0]?.quantity ?? 0);
    


    // }
  }, [storeState?.cartItems]);

  // console.log("PRODUCT QUANTITY::::",foodPacket.quantity);

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

  const handleItemAdded = (foodPacket: any) => {
    dispatch(addToCart(foodPacket));

    // this success/warning msg have some conditons so i moved it to store in  addToCart  go store and check it
  };

  const handleDecreaseQuanitity = (foodPacket: any) => {
    if (currentQuantity > 0) {
      
      dispatch(decreaseItemQuantity(foodPacket));
    } else if (foodPacket.quantity) {
      console.log("Hello......")
      dispatch(decreaseItemQuantity(foodPacket));
      removeFromCart(foodPacket);
    }
  };

  function handleItemRemoved(foodPacket: any) {
    dispatch(removeFromCart(foodPacket));

    errorNotify({
      msg: "Item removed successfully !",
      position: "bottom-right",
      time: 500,
      transitionName: Bounce,
    });
  }

  console.log("foodPacket", foodPacket);
  console.log("Current Quantity", currentQuantity);

  return (
    <MUICard sx={{ backgroundColor: "#F5F5DC" }} key={key}>
      <CardContent>
        {forCart ? (
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {foodPacket.title}

            <CloseIcon
              onClick={() => handleItemRemoved(foodPacket)}
              sx={{ cursor: "pointer" }}
            />
          </Typography>
        ) : (
          <Typography variant="h5" component="div">
            {foodPacket.title}
          </Typography>
        )}

        <Typography
          variant="body2"
          sx={{ width: "100%", textOverflow: "ellipsis" }}
        >
          {foodPacket.desc}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <>
          {((!itemPresent) || (currentQuantity < 1)) ? (
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#FD001C",
                ": hover": { backgroundColor: "#FD001C" },
              }}
              onClick={() => handleItemAdded(foodPacket)}
            >
              Add To Cart
            </Button>
          ) : (
            <ButtonGroup variant="contained" aria-label="Basic button group">
              <Button
                // disabled = {foodPacket.quantity < 2 ? true : false}

                sx={{
                  backgroundColor: "#FD001C",
                  border: "none",
                  ": hover": { backgroundColor: "#FD001C", border: "none" },
                }}
                onClick={() => handleDecreaseQuanitity(foodPacket)}
              >
                –
              </Button>

              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  border: "none",
                  ":hover ": { border: "none" },
                  background: "transparent",
                  outline: "none",
                }}
              >
                {currentQuantity}
              </Button>
              <Button
                sx={{
                  backgroundColor: "#FD001C",
                  border: "none",
                  ": hover": { backgroundColor: "#FD001C", border: "none" },
                }}
                onClick={() => handleItemAdded(foodPacket)}
              >
                +
              </Button>
            </ButtonGroup>
          )}
        </>

        <Typography variant="h6" component="div" sx={{ color: "#316FF6" }}>
          <strong>${foodPacket.price}</strong>
        </Typography>
      </CardActions>
    </MUICard>
  );
}
