import {React, useEffect, useState} from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useAccount, useContractWrite, usePrepareContractWrite, useWaitForTransaction, useContractRead } from 'wagmi';
import useHireDev from '../features/services/hooks/useHireDev';
import { toast } from 'react-toastify';
import escrowAbi from "../utils/escrowAbi.json";
import token_abi from "../utils/token_abi.json";
import { ethers } from 'ethers';
import ClipLoader from "react-spinners/ClipLoader";
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import Web3 from "web3";

const Paywithdialog = (props) => {
    const {address} = useAccount('')
    const {mutate, isLoading, isError, error, isSuccess} = useHireDev()
    const [isActive, setIsActive] = useState(false);
    const [hirePrice, setHirePrice] = useState(0);
    const [recipient, setRecepient] = useState('');
    const [allowance, setAllowance] = useState(0);

    //For ETH payment
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
    const { data:payEthdata, isLoading : payETHisLoad, isSuccess:payEthisSucc, write:depositByETH } = useContractWrite(depositByETHConfig)
    
    async function handleETHClick(e){   
        e.preventDefault();
       try {   
            if(!address){
              toast.error("Connect your wallet")
            }else if(props.titleProp === "" || props.priceProp === "" || props.jobDetailsProp ==="" || props.deadlineProp === ""){
              toast.error("All fields required")
            }                         
              depositByETH()              
       } catch (error) {
            console.log(error);
       }
    }
    const {data: payEthWaitData, isLoading: payEthdataWaitLoading, isSuccess : ispayEthdataSuccess} = useWaitForTransaction({
      hash: payEthdata?.hash,
      onSuccess(data) {
        const poolID = parseInt((data.logs[0].data.slice(-64)),16);
        const hireMe ={
          buyer_address:address,
          title:props.titleProp,
          description:props.jobDetailsProp,
          time_frame:props.deadlineProp,
          price:props.priceProp,
          developer_address:props.address,
          task_id:poolID
        }; 
        (mutate(hireMe))
        console.log(parseInt((data.logs[0].data.slice(-64)),16));
      },
      onError(error) {
        console.log(error);
      },
    })
  
    //For Token Approval
    const { data: allowData , isError: allowError, isLoading : allowIsLoading } = useContractRead({
      address: '0x101E72De70FffA3155A1eF90B78E78C670899a1a',
      abi: token_abi,
      functionName: 'allowance',
      args: [address, '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65']
    })
    
    const { config: writeApproveConfig } = usePrepareContractWrite({
      address: '0x101E72De70FffA3155A1eF90B78E78C670899a1a',
      abi: token_abi,
      functionName: 'approve',
      args: ['0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65', ethers.utils.parseEther(String(props.priceProp))]
    })
    const { data:approveData, isLoading: approveIsLoading, isSuccess: approveIsSuccess, write: approve } = useContractWrite(writeApproveConfig);

    const {data: approveWaitData, isLoading: approveWaitLoading, isSuccess : isapproveSuccess} = useWaitForTransaction({
      hash: approveData?.hash,
      onSuccess(data) {
        console.log(data);
      },
      onError(error) {
        console.log(error);
      },
    })
    
    //For token Payment
    const { config : depositTokenConfig} = usePrepareContractWrite({
      mode: 'recklesslyUnprepared',  
      address: '0x75c5C6E08C2Cd06C7fB6a484a1d7C8d6901d4B65',
      abi: escrowAbi,
      functionName:'deposit',
      args: ["0x101E72De70FffA3155A1eF90B78E78C670899a1a", props.address, "0x2e767b4A3416Ef16458355EFAcec7d3228Cec08C", ethers.utils.parseEther(String(props.priceProp))],
      })    
    const { data:payToken, isLoading : payTokenisLoad, isSuccess:payTKisSucc, write:deposit} = useContractWrite(depositTokenConfig)

  
    
    
    
    
    const handleTokenClick = async (e) =>{
    e.preventDefault();
    try {
      if(!address){
            toast.error("Connect your wallet")
          }else if(props.titleProp === "" || props.priceProp === "" || props.jobDetailsProp ==="" || props.deadlineProp === ""){
            toast.error("All fields required")
          }
              const hireMe = {
                buyer_address:address,
                title:props.titleProp,
                description:props.jobDetailsProp,
                time_frame:props.deadlineProp,
                price:props.priceProp,
                developer_address:props.address,
              }
              if(allowance >= ethers.utils.parseEther(String(props.priceProp))){
                deposit();
              }else if (allowance < ethers.utils.parseEther(String(props.priceProp))){
                approve();
              }
              //  mutate(hireMe)
              
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
        if(allowData){
          setAllowance(Number(allowData));
        }
      },[isError, error, allowData])
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
              {(allowance >= ethers.utils.parseEther(String(props.priceProp))) || approveIsLoading ? "Pay With DXC" : "Approve DXC"}
            </Button>
          </DialogActions>

          {/* {!isapproveSuccess && <ClipLoader
        loading={!isapproveSuccess}
        aria-label="Loading Spinner"
        data-testid="loader"
      />} */}
        </Dialog>
    </div>
  )
}

export default Paywithdialog

