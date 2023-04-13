import {React, useEffect, useState} from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";

import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import { useAccount } from 'wagmi';
import useCreateGig from '../features/profile/hooks/useCreateGig';
import { toast } from 'react-toastify';

const CreateGig = (props) => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);

  const {address} =useAccount();

  const {mutate, isLoading, isError, isSuccess, error} = useCreateGig()


  const handleGigCreation = (e) =>{
    e.preventDefault()
    if(!address){
      toast.error("Connect your wallet address")
    }
    if(description === "" || price === "" || title === "" || file ===[]){
      toast.error("All fields need to be filled")
    }


    const service ={
      service_image: file,
      service_name: title,
      service_desc:description,
      address,

    }
  // console.log(file[0]);
    mutate(service)

    
  }
  
  useEffect(()=>{
if(isError){
  toast.error(error.response?.data?.error)


}
if(isSuccess){
  toast.success("Gig successfully created")
  props.dialogClose(false)
}
  },[isError, error, isSuccess])
  
    return (
    <div>
        <Dialog open={props.dialog} onClose={props.dialogClose}>
          <DialogTitle>Gig Information</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="dense">
            <TextField
              margin="dense"
              label="Title"
              type="text"
              fullWidth
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="my-3"
            />   
            <TextField
              margin="dense"
              label="Description"
              type="text"
              fullWidth
              rows={4}
              multiline
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="my-3"
            />
            <TextField
              margin="dense"
              label="price"
              type="number"
              fullWidth
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              className="my-3"
            />    
            <TextField
              type="file"
              variant="outlined"
              onChange={(e)=>setFile(e.target.files[0])}
            />    
            </FormControl>

            <DialogActions className="h-4/6">
              <Button type="submit" onClick={handleGigCreation}>
                {isLoading ? "submiting..." : "Submit"}
              </Button>
              <Button onClick={props.dialogClose}>Cancel</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default CreateGig