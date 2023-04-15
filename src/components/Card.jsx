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
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useContractRead } from 'wagmi';


const Card = (prop) => {
  const {address} = useAccount('')
  const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('')
    const [jobDetails, setJobDetails] = useState('')
    const [deadline, setDeadline] = useState(0)
    
    const {mutate, isLoading, isError, error, isSuccess} = useHireDev()

      const handleProceed = () =>{
        const poolID = parseInt((data.logs[0].data.slice(-64)),16);
        const hireMe ={
          buyer_address:address,
          title,
          description:jobDetails,
          time_frame:deadline,
          price:price,
          developer_address:prop.address,
          task_id:poolID
        }; 
        (mutate(hireMe))
        setOpen(false);
        console.log(parseInt((data.logs[0].data.slice(-64)),16));
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

    <div className='w-[23%] lgDesktop:w-[30.5%] smDesktop:w-[29.78%] smDesk:w-[47%] tabletAir:w-[46%] tablet:w-[45.7%] mobile:w-[100%] h-[450px] rounded-lg pb-10 bg-white'>

        <img src={prop.imgSrc} className='w-full h-[60%] rounded-t-lg object-cover'/>
                <div className='flex justify-between w-full'>
                        <div className='flex w-[90%] mx-auto mt-4 items-center'>
                            <div>
                             <img src={prop.avatar} className='w-10 h-10 rounded-full '/>
                            </div>
                            <div className=' ml-4'>
                            <h4 className='font-bold text-[14px] capitalize text-fair-blue'>{prop.username}</h4>
                            <p className='text-fair-blue'>{prop.order}</p>
                            </div>
                        </div>
                    {/* <div className='flex pr-3'>
                    <div className={"heart" + (isActive ? " is-active" : "")}
                    onClick={handleLike}></div>
                    </div> */}
                </div>
        <div className='w-[90%] mx-auto'>
            <h2 className='text-fair-blue text-[18px] capitalize mt-2 font-bold px-4'>{prop.skill}</h2>
            <p className=' text-[14px] font-normal mx-auto text-left mt-4 break-words leading-4'>{prop.description.slice(0,100)}</p>
          
            <div className='flex justify-end'>
            {/* <h2 className='text-red font-bold text-2xl pl-4 pt-1'>From {prop.price}</h2> */}

            <button className="px-7 py-2 border border-blue-300 rounded-lg mr-4 mt-4 bg-regal-blue text-white" onClick={handleClickOpen} >HIRE</button>
            </div>
        </div>
    
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Task Details</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Specify the nature of the task, be as detailed as possible. Payment won't be made until offer is accepted
          </DialogContentText>
          <TextField autoFocus margin="dense" label="Title" type="text" fullWidth inputProps={{ maxLength: 30 }} value={title} onChange={(e) =>setTitle(e.target.value)}/>
          <TextField autoFocus margin="dense" label="Description" type="text" fullWidth  value={jobDetails} rows={4} multiline inputProps={{ maxLength: 300 }} onChange={(e) =>setJobDetails(e.target.value)}/>
          <TextField autoFocus margin="dense" label="Price(ETH/DXC)" type="text" fullWidth  value={price} onChange={(e) =>setPrice(e.target.value)}/>
          <TextField autoFocus margin="dense" label="Deadline" type="number" fullWidth  value={deadline}  InputProps={{ inputProps: { min: 1 } }} onChange={(e) =>setDeadline(e.target.value)}/>
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleProceed}>{isLoading ? "processing" : "Proceed"}</Button>
        </DialogActions>
      </Dialog>
    </div>

     {/* {openPay && <Paywithdialog handlePayWith={handlePay} handlePaywithClose={handlepayClose} 
        titleProp={title} priceProp={price} jobDetailsProp={jobDetails} deadlineProp={deadline} 
        address={prop.address}
     />} */}

    </div>



  )
}

export default Card
