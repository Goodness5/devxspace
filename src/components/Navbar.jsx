import React, { useState } from "react";
import Connect from "./Connect";
import Link from "next/link";
// import UpdateProfileCard from '../features/profile/component/updateprofile';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [freelanceFormOpen, setfreelanceFormOpen] = useState(false);
  const [buyerFormOpen, setBuyerFormOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOptionOne = () => {
    handleBuyerOpen();
    setOpen(false);
  };
  const handleOptionTwo = () => {
    handleFreelanceOpen();
    setOpen(false);
  };
  const handleFreelanceOpen = () => {
    setfreelanceFormOpen(true);
  };
  const handleFreelanceClose = () => {
    setfreelanceFormOpen(false);
  };
  const handleBuyerOpen = () => {
    setBuyerFormOpen(true);
  };
  const handleBuyerClose = () => {
    setBuyerFormOpen(false);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleAboutChange = (event) => {
    setAbout(event.target.value);
  };
  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };
  const handleFreeLanceSubmit = () => {
    console.log({
      firstName,
      lastName,
      userName,
      skillLevel,
      about,
      skills,
    });
    handleFreelanceClose(false);
  };

  const handleBuyerSubmit = () => {
    console.log({
      firstName,
      lastName,
      userName,
      about,
    });
    handleBuyerClose(false);
  };

  return (
    <div>
      <div className='bg-blue-50 flex flex-row justify-end'>
        <div className=' ml-40 flex'>  
                
          <Link href='/' className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1">
          Home
        </Link>

        <Link href='/profile' className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1">
          Dashboard
        </Link>

        <Link href='/Search' className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1">
          <span className="mr-2">find jobs</span>
        </Link>
        <Link
          href="/Search"
          className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1"
        >
          <span className="mr-2">Hire</span>
        </Link>

        <div
          className="flex items-center shadow-2xl shadow-regal-blue rounded-lg cursor-pointer p-2 mx-1"
          onClick={handleClickOpen}
        >
          <span className="mr-2">Create profile</span>
        </div>

        <div className="ml-auto mr-10 flex items-center">
          <Connect />
        </div>
        <Connect />
      </div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Create Profile</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Create a profile to get started as a hirer or a freelancer
            </DialogContentText>
          </DialogContent>
          <DialogActions className="h-4/6">
            <Button
              onClick={handleOptionOne}
              color="primary"
              className="w-64 h-64 bg-blue-500 text-black font-bold text-2xl rounded-lg focus:outline-none hover:bg-blue-700 mx-2 bg-[#052C5B]"
            >
              Buyer
            </Button>
            <Button
              onClick={handleOptionTwo}
              color="primary"
              autoFocus
              className="w-64 h-64 bg-blue-500 text-black font-bold text-2xl rounded-lg focus:outline-none hover:bg-blue-700 mx-2 bg-[#052C5B]"
            >
              Freelancer
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog open={freelanceFormOpen} onClose={handleClose}>
          <DialogTitle>Personal Information</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              value={userName}
              onChange={handleUserNameChange}
              className="my-3"
            />
            <TextField
              margin="dense"
              label="About Yourself"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={about}
              onChange={handleAboutChange}
              className="my-3"
            />
            <FormControl fullWidth margin="dense">
            <TextField
              margin="dense"
              label="Skill"
              type="text"
              value={skills}
              onChange={handleSkillsChange}
              className="my-3"
            />
            </FormControl>

            <FormControl fullWidth margin="dense">
            <TextField
              type="file"
              variant="outlined"
              // onChange={handleFreelanerFileInput}
            />
            </FormControl>

            <DialogActions className="h-4/6">
              <Button type="submit" onClick={handleFreeLanceSubmit}>
                Submit
              </Button>
              <Button onClick={handleFreelanceClose}>Cancel</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <Dialog open={buyerFormOpen} onClose={handleClose}>
          <DialogTitle>Personal Information</DialogTitle>
          <DialogContent>
          
            <TextField
              margin="dense"
              label="Username"
              type="text"
              fullWidth
              value={userName}
              onChange={handleUserNameChange}
              className="my-3"
            />
            <TextField
              margin="dense"
              label="About Yourself"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={about}
              onChange={handleAboutChange}
              className="my-3"
            />
             <FormControl fullWidth margin="dense">
            <TextField
              type="file"
              variant="outlined"
              // onChange={handleBuyerFileInput}
            />
            </FormControl>
            <DialogActions className="h-4/6">
              <Button type="submit" onClick={handleBuyerSubmit}>
                Submit
              </Button>
              <Button onClick={handleBuyerClose}>Cancel</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default Navbar;
