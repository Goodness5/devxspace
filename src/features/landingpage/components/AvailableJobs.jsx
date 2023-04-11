/** @format */

import { React, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AvailableJobs = (prop) => {

  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mt-10 mb-10 w-[23%] rounded-lg pb-[20px] bg-[#EFF2F9]">
    
      <div className="w-full">
    
        <h2 className="text-fair-blue text-[16px] leading-[18px] mt-[20px] font-bold px-4">Are you available for Hire</h2>
        <p className="text-fair-blue text-[14px] leading-[18px] mt-[4px] px-4">Looking for a web3 Developer to build an amazing nft market place for my team</p>
        <div className="flex justify-between">
        <h2 className="text-[#132C8D] font-bold text-[16px] pl-4 pt-1 ">
            offer {prop.price}
          </h2>

          <button
            className="px-7 py-2 mt-[12px] text-[14px] border border-blue-300 rounded-lg mr-4 bg-[#132C8D] hover:bg-[#052C5B] text-white"
            onClick={handleClickOpen}
          >
            Learn more
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

export default AvailableJobs;
