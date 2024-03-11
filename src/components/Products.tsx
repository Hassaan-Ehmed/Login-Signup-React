import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductCard from "./MUI/ProductCard";
import { useLocation, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

export default function Products({ foodsArray, forCart }: any) {
  const storeState: any = useAppSelector((state) => state.products);
  const food: any = foodsArray; // main array
  const params = useParams();
  const location  = useLocation()
  const categories: string[] = []; // Array to store unique categories

  // Extract unique categories from the food array
  food.forEach((item: any) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:"#F5F5DC"}}>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          {/* Category heading */}

        {location.pathname === "/" && (


<div 
style={{
  width:"100%",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
   margin: "50px 0 10px 0",
 

   
   }}>
         <Typography
          variant="h4"
          component="div"
          sx={{
            width:"fit-content",
            fontSize:"2.2vw",
            textAlign: "center",
            backgroundColor: "#FFAC00",
            padding: "10px 50px",
            boxShadow: "0px 20px 26px -17px black",
            borderRadius:"10px"
          }}
        >
          {category}
        </Typography>
        </div>

        )} 
          {/* Grid container for items of current category */}
          <Grid container spacing={2} sx={{ padding: "0 20px" }}>
            {food
              .filter((item: any) => item.category === category)
              .map((item: any, index: number) => (
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12} key={index}>
                  {/* Product card for each item */}
                  <ProductCard
                    key={storeState?.productData} // not sure if this is correct
                    indexNum={index}
                    foodPacket={item}
                    quantity={item.quantity}
                    forCart={forCart}
                  />
                </Grid>
              ))}
          </Grid>
        </div>
      ))}
    </Box>
  );
}
