import React, { useEffect, useState } from "react";
// import UpdateProfileCard from '../features/profile/component/updateprofile';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { useAccount } from 'wagmi'
import { toast } from "react-toastify";
import useCreateProfile from "../features/profile/hooks/useCreateProfile";

const Update = (props) => {
  const { address } = useAccount()
  const [open, setOpen] = useState(false);
  const [freelanceFormOpen, setfreelanceFormOpen] = useState(false);
  const [buyerFormOpen, setBuyerFormOpen] = useState(false);

  const [userName, setUserName] = useState("");

  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  const [files, setFiles] = useState([]);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
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

  const {mutate, isLoading, isError, isSuccess, error} = useCreateProfile()
  const handleFreeLanceSubmit = (e) => {
    e.preventDefault();
    if(!address  ){
      toast.error("Connect wallet address")
      
    }
    if(userName === "" || about === "" || skills ===""){
      toast.error("All fields Required")
    }
    const people={
      username:userName,
      avatar:files[0],
      address,
      skills,
      about:about
    }

    mutate(people)
   
    
  };

  const handleBuyerSubmit = (e) => {
    e.preventDefault();
    if(!address  ){
      toast.error("Connect wallet address")
      
    }
    if(userName === "" || about === ""){
      toast.error("All fields Required")
    }
    const people={
      username:userName,
      avatar:files[0],
      address,
      about:about
    }
mutate(people)
    
  };
  useEffect(()=>{
    if(isError){
      toast.error(error.response.message)
    }
    if(isSuccess){
      toast.success("Profile Created")
      handleFreelanceClose(false);
      handleBuyerClose(false);
    }
  },[isError, isSuccess, error])

  return (
    <div>
        <Dialog
          open={props.dialog}
          onClose={props.dialogClose}
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
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) =>setAbout(e.target.value) }
              className="my-3"
            />
            <FormControl fullWidth margin="dense">
            <TextField
              margin="dense"
              label="Skill"
              type="text"
              value={skills}
              onChange={(e) =>setSkills(e.target.value)}
              className="my-3"
            />
            </FormControl>

            <FormControl fullWidth margin="dense">
            <TextField
              type="file"
              variant="outlined"
              onChange={(e)=>setFiles(e.target.files)}
            />
            </FormControl>

            <DialogActions className="h-4/6">
              <Button type="submit" onClick={handleFreeLanceSubmit}>
               {isLoading ? "submiting..." : "Submit"}
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
              onChange={()=>setUserName(e.target.value)}
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
              onChange={()=>setAbout(e.target.value)}
              className="my-3"
            />
             <FormControl fullWidth margin="dense">
            <TextField
              type="file"
              variant="outlined"
              onChange={(e)=>setFiles(e.target.files)}
            />
            </FormControl>
            <DialogActions className="h-4/6">
              <Button onClick={handleBuyerSubmit}>
                {isLoading ? "submiting..." :"Submit"}
              </Button>
              <Button onClick={handleBuyerClose}>Cancel</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    </div> 
  );
};

export default Update;