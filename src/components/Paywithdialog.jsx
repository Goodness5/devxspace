import {React, useEffect, useState} from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import useHireDev from '../features/services/hooks/useHireDev';
import { toast } from 'react-toastify';
import escrowAbi from "../utils/escrowAbi.json";
import { ethers } from 'ethers';

const Paywithdialog = (props) => {
    const {address} = useAccount('')
    const {mutate, isLoading, isError, error, isSuccess} = useHireDev()
    const [isActive, setIsActive] = useState(false);
    const [hirePrice, setHirePrice] = useState(0);
    const [recipient, setRecepient] = useState('');

    const { config: depositByETHConfig} = usePrepareContractWrite({
        mode: 'recklesslyUnprepared',
        address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
        abi: escrowAbi,
        functionName:'depositByETH',
        overrides: {
            from: address,
            value: ethers.utils.parseEther(String(props.priceProp)),
        },
        args: [props.address, "0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C"],
      })    
    const { data:payEthdata, isLoading : payETHisLoad, isSuccess:payEthisSucc, write } = useContractWrite(depositByETHConfig)
    
    // const {data: rewardWaitData, isLoading: rewardWaitLoading} = useWaitForTransaction({
    //     hash: payEthdata?.hash,
    //     onSuccess(data) {
    //       console.log(data);
    //     },
    //     onError(error) {
    //       console.log(error);
    //     },
    //   })

    const { config} = usePrepareContractWrite({
        address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
        abi: escrowAbi,
        functionName:'deposit',
        args: ["0x101E72De70FffA3155A1eF90B78E78C670899a1a",recipient, "0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C", ethers.utils.parseEther(String(hirePrice))],
      })    
    const { data:payToken, isLoading : payTokenisLoad, isSuccess:payTKisSucc, write:deposit} = useContractWrite(config)

    
      async function handleETHClick(e){   
        e.preventDefault();
       try {   
            if(!address){
              toast.error("Connect your wallet")
            }else if(props.titleProp === "" || props.priceProp === "" || props.jobDetailsProp ==="" || props.deadlineProp === ""){
              toast.error("All fields required")
            }
                const hireMe ={
                  buyer_address:address,
                  title:props.titleProp,
                  description:props.jobDetailsProp,
                  time_frame:props.deadlineProp,
                  price:props.priceProp,
                  developer_address:props.address,
                }
                
                setHirePrice(hireMe.price);
                setRecepient(hireMe.developer_address);
                
            
                    
                write();
               
                payEthisSucc ? mutate(hireMe) : null;
       } catch (error) {
            console.log(error);
       }
    }



  const handleTokenClick = (e) =>{
    e.preventDefault();

    try {
        if(!address){
          toast.error("Connect your wallet")
        }else if(props.titleProp === "" || props.priceProp === "" || props.jobDetailsProp ==="" || props.deadlineProp === ""){
          toast.error("All fields required")
        }
            const hireMe ={
              buyer_address:address,
              title:props.titleProp,
              description:props.jobDetailsProp,
              time_frame:props.deadlineProp,
              price:props.priceProp,
              developer_address:props.address,
            }
            
            setHirePrice(hireMe.price);
            setRecepient(hireMe.developer_address);
            deposit()
            payTKisSucc ? mutate(hireMe) : null 
        
    } catch (error) {
        console.log(error);
    }

}

    useEffect(()=>{
        if(isError){
          toast.error(error?.response?.data?.error)
        }
        if(isSuccess){
          toast.success("Developer Hired")
          setIsActive(!isActive);
        }
      },[isError, error])
    return (
    <div>
         <Dialog
          open={props.handlePayWith}
          onClose={props.handlePaywithClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Pay to Escrow</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Select payment Option
            </DialogContentText>
          </DialogContent>
          <DialogActions className="h-4/6">
            <Button
              onClick={handleETHClick}
              color="primary"
              className="w-64 h-64 bg-blue-500 text-black font-bold text-2xl rounded-lg focus:outline-none hover:bg-blue-700 mx-2 bg-[#052C5B]"
            >
              Pay With ETH
            </Button>
            <Button
              onClick={handleTokenClick}
              color="primary"
              autoFocus
              className="w-64 h-64 bg-blue-500 text-black font-bold text-2xl rounded-lg focus:outline-none hover:bg-blue-700 mx-2 bg-[#052C5B]"
            >
              Pay With DXC
            </Button>
          </DialogActions>
        </Dialog>
    </div>
  )
}

export default Paywithdialog
