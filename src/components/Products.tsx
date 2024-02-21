import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ProductCard from "./MUI/ProductCard";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { Typography } from "@mui/material";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Products({ foodsArray, forCart }: any) {
  const storeState: any = useAppSelector((state) => state.products);
  const food: any = foodsArray;
  const params = useParams();


  return (

<Box sx={{ flexGrow: 1 }}>

        <Grid container spacing={2} sx={{padding:"0 20px"}}>

          {food?.map((item: any, index: number) => (
<>
  
<Grid item xl={3} lg={3} md={4} sm={6} xs={12}>

              <ProductCard
                key={storeState?.productData}
                indexNum={index}
                foodPacket={item}
                quantity={item.quantity}
                forCart={forCart}
                />
            </Grid>



                </>
          ))}
        </Grid>
     
    </Box>
  );
}
