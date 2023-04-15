import { AiOutlineTeam } from 'react-icons/ai'
import { FiHelpCircle } from 'react-icons/fi'
import { MdSentimentSatisfiedAlt, MdSentimentDissatisfied } from 'react-icons/md'

const HowItWorks = () => {
  return (
    <main className='w-[100%] bg-[#FFFFFF]'>
        <section className="w-[94%] mx-auto pb-10">
            <h2 className="text-[32px] font-bold pt-6"> How It Works</h2>

            <div className="flex gap-4 smDesktop:gap-6 mt-4 flex-wrap smDesktop:justify-between">
                <div className="w-[24%] smDesktop:w-[45%] mobile:w-[100%]">
                    <div className="flex items-center gap-2">
                        <AiOutlineTeam size={40} className='text-[#052C5B]'/>
                        <h2 className="text-[24px] font-medium"> Choose Freelancer</h2>
                    </div>
                    <p className="text-[14px] mt-2 leading-5">No job is too big or too small. We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</p>
                </div>
                <div className="w-[24%] smDesktop:w-[45%] mobile:w-[100%]">
                    <div className="flex items-center gap-2">
                        <MdSentimentSatisfiedAlt size={40} className='text-[#052C5B]'/>
                        <h2 className="text-[24px] font-medium"> Satisfied</h2>
                    </div>
                    <p className="text-[14px] mt-2 leading-5">Satisfied with jobs been done by the freelancer, Accept the submission to enable agent to release fund. Fund is released when you are satisfied. </p>
                </div>
                
                <div className="w-[24%] smDesktop:w-[45%] mobile:w-[100%]">
                    <div className="flex items-center gap-2">
                        <MdSentimentDissatisfied size={40} className='text-[#052C5B]'/>
                        <h2 className="text-[24px] font-medium">Not Satisfied</h2>
                    </div>
                    <p className="text-[14px] mt-2 leading-5">Not Satisfied with jobs been done by the freelancer,  Reject the submission and the freelancer will be notified to get the job re-done. </p>
                </div>
                <div className="w-[24%] smDesktop:w-[45%] mobile:w-[100%]">
                    <div className="flex items-center gap-2">
                        <FiHelpCircle size={40} className='text-[#052C5B]'/>
                        <h2 className="text-[24px] font-medium">We’re here to help</h2>
                    </div>
                    <p className="text-[14px] mt-2 leading-5">Our talented team of freelancers can help you get any of your task done and weare here to make sure you are satisfied. Do not worry your funds are safe.</p>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default HowItWorks