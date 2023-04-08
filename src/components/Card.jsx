import {React, useState} from 'react'

const Card = (prop) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
      }
    return (
    <div className='mt-10 ml-20 mr-10 mb-10 lg:w-[25%] lg;h-[30%] md:w-[30%] shadow-xl shadow-cyan-500/50 rounded-lg pb-10'>
        <img src={prop.imgSrc} className='w-full '/>
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
                    onClick={handleClick}></div>
                    </div>
                </div>
        <div className='w-full'>
            <div></div>
            <h2 className='text-fair-blue text-2xl font-bold px-4'>{prop.skill}</h2>
            <div className='flex justify-between'>
            <h2 className='text-red font-bold text-2xl pl-4 pt-1'>From {prop.price}</h2>
            <button className="px-7 py-2 border border-blue-300 rounded-lg ml-4">HIRE</button>
            </div>
        </div>
    </div>
  )
}

export default Card

//image
// avatar | Admin User | 0 order in Queue | loveEmo and Save
//stars 