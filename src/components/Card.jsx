import {React, useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paywithdialog from './Paywithdialog';
import useHireDev from '../features/services/hooks/useHireDev';

const Card = (prop) => {
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [jobDetails, setJobDetails] = useState('')
    const [deadline, setDeadline] = useState(0)
    const [openPay, setPay] = useState(false);
    const {mutate, isLoading, isError, error, isSuccess} = useHireDev()

      const handlePay = () =>{
        setPay(true);
      }
      const handlepayClose = () =>{
        setPay(false);
      }

      const handleClickOpen = () => {
        setOpen(true);
      }; 
      const handleClose = () => {
        setOpen(false);
      };


      const handleLike = () =>{
        setIsActive(!isActive);
      }
    return (

    <div className='mt-10  mb-10 lg:mx-8 lg:w-[30%] xl:w-[20%] md:w-[30%] shadow-xl shadow-cyan-400/50 rounded-lg pb-10 bg-white'>

        <img src={prop.imgSrc} className='w-full h-3/5 rounded-t-lg'/>
                <div className='flex justify-between w-full'>
                        <div className='flex w-full'>
                            <div>
                            <img src={prop.avatar} className='w-10 rounded-full mt-5 pl-3'/>
                            </div>
                            <div className='mt-4 ml-4'>
                            <h4 className='font-bold text-1xl text-fair-blue'>{prop.username}</h4>
                            <p className='text-fair-blue'>{prop.order}</p>
                            </div>
                        </div>
                    <div className='flex pr-3'>
                    <div className={"heart" + (isActive ? " is-active" : "")}
                    onClick={handleLike}></div>
                    </div>
                </div>
        <div className='w-full'>
            <div></div>
            <h2 className='text-fair-blue text-2xl font-bold px-4'>{prop.skill}</h2>
            <p className='text-fair-blue text-2xl font-bold px-4'>{prop.description}</p>
            <div className='flex justify-end'>
            {/* <h2 className='text-red font-bold text-2xl pl-4 pt-1'>From {prop.price}</h2> */}

            <button className="px-7 py-2 border border-blue-300 rounded-lg mr-4 bg-regal-blue text-white" onClick={handleClickOpen} >HIRE</button>
            </div>
        </div>
    
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Specify the nature of the task, be as detailed as possible. Payment won't be made until offer is accepted
          </DialogContentText>
          <TextField autoFocus margin="dense" id="name" label="Title" type="text" fullWidth variant="standard" value={title} onChange={(e) =>setTitle(e.target.value)}/>
          <TextField autoFocus margin="dense" id="name" label="Description" type="text" fullWidth variant="standard" value={jobDetails} onChange={(e) =>setJobDetails(e.target.value)}/>
          <TextField autoFocus margin="dense" id="name" label="Price" type="text" fullWidth variant="standard" value={price} onChange={(e) =>setPrice(e.target.value)}/>
          <TextField autoFocus margin="dense" id="name" label="Deadline" type="number" fullWidth variant="standard" value={deadline} onChange={(e) =>setDeadline(e.target.value)}/>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePay}>{isLoading ? "processing" : "Proceed"}</Button>
        </DialogActions>
      </Dialog>
    </div>

     {openPay && <Paywithdialog handlePayWith={handlePay} handlePaywithClose={handlepayClose} 
        titleProp={title} priceProp={price} jobDetailsProp={jobDetails} deadlineProp={deadline} 
        address={prop.address}
     />}

    </div>



  )
}

export default Card
