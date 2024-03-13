import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { red } from '@mui/material/colors';

const toppings = {

    standard :[

        "Meatballs",
        "Miyo",
        "Pepporani",
        "Sauce",
        "Fries",
        "Steak",
    ],
    
    extra :[
        
        "Meats",
    
        "Mangal",
    
        "Beef ",
    
        "Chicken Breast",
    
        "Beef Meat",
    
        "Tuna Fish",
    
        "Chicken",
    
        "Sauces",
    
        "Mayonnaise",
    
        "BBQ Sauce",
    
        "Vegetables",
    
        "Roasted B",
    
        "Pepper Flakes",
    
        "Jalapeno",
    
        "Peppers",
    
        "Mushrooms",
    
        "Olives",
    
        "Sweetcorn",
    
        "Tomatoes",
    
        "Pineapple",
    
        "Onions",
    
        "Herbs",
    
        "Sesame",
    
        "Oregano",
    
    
      ]
    
    }


function createData(toppings:any) {
  return {
    target: toppings
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{display:"flex", justifyContent:"space-between",alignItems:"center",cursor:"pointer"}}    onClick={() => setOpen(!open)}>
          <p style={{color:"#585858",fontWeight:"bold",alignSelf:"flex-end"}}>{row.target[0] === "Meats" ? 'EXTRA' : 'STANDARD'} TOPPINGS</p>
          <IconButton
            aria-label="expand row"
            size="small"
         

          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>

        
        </TableCell>
      
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
      
              <Table size="small" aria-label="purchases">
               
                <Grid container columnSpacing={2} rowSpacing={2}>
                  {row?.target?.map((topping:any) => (
                    
                      <Grid item xl={4} sx={{display:"flex",alignItems:"center"}}>
                        <TableCell align="right" sx={{width:"30%"}}>
                        
              
                        <FormControlLabel control={<Checkbox defaultChecked  sx={{
                              color: red[700],
                              '&.Mui-checked': {
                                     color: red[700],
                                                   },
                                 }}/>} label={topping} />
                      
                      </TableCell></Grid>
                    
                    
                  ))}
                </Grid>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(toppings.standard),
  createData(toppings.extra),

 
];

export default function MUIAccordion() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
{/*  */}
        <TableBody>
          {rows.map((row,indexNum) => (
            <Row key={indexNum}  row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}