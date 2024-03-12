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





function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number,
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [

      {check : <FormControlLabel control={<Checkbox sx={{
        color: red[700],
        '&.Mui-checked': {
          color: red[700],
        },
      }} />} label="Meatballs" />},


    {check : <FormControlLabel control={<Checkbox  sx={{
        color: red[700],
        '&.Mui-checked': {
          color: red[700],
        },
      }}/>} label="Steak" />},
    
    {check : <FormControlLabel control={<Checkbox  sx={{
        color: red[700],
        '&.Mui-checked': {
          color: red[700],
        },
      }}/>} label="Pepporini" />},
    
    {check : <FormControlLabel control={<Checkbox  sx={{
        color: red[700],
        '&.Mui-checked': {
          color: red[700],
        },
      }}/>} label="Sause" />},
    
    {check :  <FormControlLabel control={<Checkbox  sx={{
        color: red[700],
        '&.Mui-checked': {
          color: red[700],
        },
      }}/>} label="Fries" />},
    
    {check : <FormControlLabel control={<Checkbox  sx={{
        color: red[700],
        '&.Mui-checked': {
          color: red[700],
        },
      }}/>} label="Miyo" />},
      
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{display:"flex", justifyContent:"flex-start",alignItems:"center"}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}

          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <p style={{color:"#585858",fontWeight:"bold",alignSelf:"flex-end"}}>STANDARD TOPPINGS</p>
        </TableCell>
        {/* <TableCell component="th" scope="row">
          {row.name}
        </TableCell> */}
        {/* <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
      
              <Table size="small" aria-label="purchases">
               
                <Grid container columnSpacing={2} rowSpacing={2}>
                  {row.history.map((historyRow:any) => (
                    // <TableRow key={historyRow.date ?? 0}>
                    //   <TableCell component="th" scope="row">
                      
                      <Grid item xl={4}><TableCell align="right" sx={{width:"30%",}}>{historyRow.check}</TableCell></Grid>
                    //   </TableCell>
                    //   {/* <TableCell>{historyRow.customerId}</TableCell>  */}
    
                    
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
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
 
];

export default function MUIAccordion() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        {/* <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}