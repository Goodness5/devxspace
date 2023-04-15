/** @format */

import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Featured = (prop) => {

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className=" w-[22.54%] lgDesktop:w-[30.19%] smDesktop:w-[47%] smDesk:w-[46%] tablet:w-[45.9%] rounded-lg pb-10 bg-[#EFF2F9] mobile:w-[100%] ">
      <img src={prop.imgSrc} className="w-full h-3/5 rounded-t-lg" />
      <div className="flex justify-between w-[90%] mx-auto items-center">
        <div className="flex items-center">
          <div>
            <img src={prop.avatar} className="w-10 rounded-[100%] mt-5 h-10" />
          </div>
          <div className="mt-4 ml-4">
            <h4 className="font-bold text-[16px] text-fair-blue">
              {prop.username}
            </h4>
           
          </div>
        </div>
       
      </div>
      <div className="w-[90%] mx-auto">
        
        <h2 className="text-fair-blue text-[16px] leading-[18px] font-bold px- mt-2 ">{prop.skill}</h2>
        <div className="flex justify-end mt-4">
          <button
            className="px-7 py-2 text-[14px] border border-blue-300 rounded-lg mr-4 bg-[#132C8D] hover:bg-[#052C5B] text-white"
            onClick={handleClickOpen}
          >
            HIRE
          </button>
        </div>
      </div>

      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Task Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Specify the nature of the task, be as detailed as possible.
              Payment won't be made until offer is accepted
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Details"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Proceed</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Featured;
