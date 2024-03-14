import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
// import {  makeStyle } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { handleClose } from "../../redux/slices/products";
import DialogCard from "./DialogCard";

import '../MUI/Dialog.css'
// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiPaper-root": {
//     backgroundColor: "purple",
//     // maxWidth: '100%',
//     width: "45vw",
    
//     // backgroundColor:"yellow"
//   },
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
    
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
    
//   },
// }));

export default function MUIDialog(props: any) {
  const { id } = props;
  const storeState: any = useAppSelector((state) => state.products);
  const dispatch: any = useAppDispatch();

  return (
  
      <Dialog open={storeState.selected_item?.id === id ? true : false} >
        <h2 id="customized-dialog-title" >

          <CloseIcon   sx={{
              position: "absolute",
              right: 8,
              top: 5,
              cursor:"pointer"
            }}
            
            onClick={() => dispatch(handleClose())}
            />
            
          {/* <IconButton
            aria-label="close"
           
          >
          </IconButton> */}
        </h2>
        <DialogContent  sx={{padding:0, "& .MuiDialogContent-root": {
        paddingLeft:'0px',
        paddingRight:'0px'
        }}}
        
        >
         
          <DialogCard selectedItem={storeState.selected_item ?? {}}/>
        </DialogContent>
      </Dialog>



     )
  
}
