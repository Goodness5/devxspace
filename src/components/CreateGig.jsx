import {React, useState} from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";

const CreateGig = (props) => {
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [title, setTitle] = useState();

  const handleDescriptionChange = (e) =>{
    setDescription(e.target.value);
  }
  const handlePriceChange = (e) =>{
    setPrice(e.target.value)
  }
  const handleFileInput = (e) => {
    console.log(e.target.value);
  }
  
  const handleTitle = (e) =>{
    setTitle(e.target.value)
  }
  const handleGigCreation = (e) =>{
    console.log(description, price);
    props.dialogClose(false)
  }
  
  
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
              onChange={handleTitle}
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
              onChange={handleDescriptionChange}
              className="my-3"
            />
            <TextField
              margin="dense"
              label="price"
              type="number"
              fullWidth
              value={price}
              onChange={handlePriceChange}
              className="my-3"
            />    
            <TextField
              type="file"
              variant="outlined"
              onChange={handleFileInput}
            />    
            </FormControl>

            <DialogActions className="h-4/6">
              <Button type="submit" onClick={handleGigCreation}>
                Submit
              </Button>
              <Button onClick={props.dialogClose}>Cancel</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
    </div>
  )
}

export default CreateGig