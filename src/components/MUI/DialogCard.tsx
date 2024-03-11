import React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import pizzaImage from '../../images/productImages/4meat-351x200-min.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, ButtonGroup, Divider } from '@mui/material';
import MiniSlider from './MiniSlider';

export default function DialogCard() {
  
    const theme = useTheme();
    
    return (
    <Card sx={{ display: 'flex', bgcolor:'white',width:'80%' }}>

<Box sx={{ display: 'flex', flexDirection: 'column', alignItems:"flex-start"}}>


          {/* <CardMedia
          
          component="img"
          sx={{width:"100%", rotate:"270deg",bgcolor:"green"}}
          image={pizzImage}
          
          alt="Pizza Image"
          /> */}

<img src={pizzaImage} alt=""  style={{width:"100%", height:"100%", rotate:"270deg",objectFit:"contain" }}
          />
</Box>

    <Box sx={{ display: 'flex', flexDirection: 'column' ,width:"70%"}}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" sx={{display:"flex",justifyContent:"space-between",alignItems:'center'}}>
        <span>PREMIUM 4 MEAT</span>
        <FavoriteIcon sx={{color:'lightgray'}}/>
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
        Steak, Pastirma, Meatballs, Pepperoni, Pizza Sauce, Mozzarella Cheese
        </Typography>




<div style={{width:"100%",padding:"0 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
  
  <Box
            sx={{
              display: 'flex',
              justifyContent:"flex-start",
              alignItems:"center",
            
            }}
          >
          <ButtonGroup variant="outlined" aria-label="Basic button group">
    <Button
    
    // disabled = {foodPacket.quantity < 2 ? true : false}
    
    sx={{
           backgroundColor: "#FD001C",
           border:"none",
           color:"white",
           ": hover": { backgroundColor: "#FD001C",border:"none" },
            ":disabled ":{
               backgroundColor: 'rgba(163,163,163,0.5)',
               color:"white" ,
               cursor:"not-allowed"
               
            }
         }}
         
         
        //  onClick={() => handleDecreaseQuanitity(foodPacket)}
         
         >–</Button>

    <Button variant="outlined"  
    
    sx={{
      color: "black",
      ":hover ": { border:"0.5px solid #c9c9c9" },
      border:"0.5px solid #c9c9c9",
      outline: "none",
    }}
    >

{/* {formatedQuantity ?? 0} */} 1

    </Button>
    <Button sx={{
           backgroundColor: "#FD001C",
           border:"none",
           marginLeft:"30px",
           color:"white",
           ": hover": { backgroundColor: "#FD001C",border:"none" },
         }}
         
         
        //  onClick={() => handleItemAdded(foodPacket)}
         
         >+</Button>
  </ButtonGroup>
  </Box>

  <Typography component="div" variant="caption" sx={{display:"flex",justifyContent:"center",alignItems:'center'}}>
        <span>340$</span>
        {/* <FavoriteIcon sx={{color:'lightgray'}}/> */}
        </Typography>


        <Button
              size={'small'}
              variant="contained"
              sx={{
                backgroundColor: "#FD001C",
                padding:"7px 10px",
                ": hover": { backgroundColor: "#FD001C" },
                " .MuiButtonBase-root":{
                }
              }}
            //   onClick={() => handleItemAdded(foodPacket)}
            >
              Add To Cart
            </Button>

  </div>
{/* <Divider/> */}
  <MiniSlider/>
<Divider/>
      </CardContent>
      {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton>
      </Box> */}
    </Box>
  
  </Card>
  )
}
