import {React, useState} from 'react'

const Card = (prop) => {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
      }
    return (
    <div className='mt-10 ml-20 mr-20 mb-10 w-1/5'>
        <img src={prop.imgSrc} className='w-full'/>
                <div className='flex justify-between w-full'>
                        <div className='flex w-full'>
                            <div>
                            <img src={prop.avatar} className='w-10 rounded-full mt-5'/>
                            </div>
                            <div className='mt-4 ml-4'>
                            <h4 className='font-bold text-1xl'>{prop.username}</h4>
                            <p>{prop.order}</p>
                            </div>
                        </div>
                    <div className='flex'>
                    <div className={"heart" + (isActive ? " is-active" : "")}
                    onClick={handleClick}></div>
                    </div>
                </div>
        <div className='w-full'>
            <h2 className='text-fair-blue text-2xl font-bold'>{prop.skill}</h2>
            <h2 className='text-red font-bold text-1xl'>From {prop.price}</h2>
        </div>
    </div>
  )
}

export default Card

//image
// avatar | Admin User | 0 order in Queue | loveEmo and Save
//stars 