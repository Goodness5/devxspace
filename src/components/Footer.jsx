import { FaMapMarker, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaArrowRight} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-100 bottom-0  w-full overflow-clip">
            <div className='bg-[#052c5b] flex flex-col m-auto justify-between p-6 text-center'>
            <h3 className='text-white font-semibold p-4'>Subscribe Now!</h3>
            <p className='text-white p-2'>get the latest news and updates from devxspace</p>
            <form action="" className='m-auto w-full items-center'>
                <div className='rounded-lg m-auto w-full h-12'>
                <input type="email" name="" id="" placeholder='example@devxspace.com' className='p-3 w-2/4 text-start rounded-l-lg'/>
                <button type="submit" className='w-12 bg-[#132c8d] rounded-r-lg hover:bg-[#] h-12 mt-1'>
                    <FaArrowRight className='text-light-blue ml-4' />
                </button>
                </div>
                    
                
            </form>
        </div>
      <div className="container mx-auto ml-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="col-span-2 sm:col-span-1 pr-5">
          <h3 className="text-black font-semibold mb-3">Contact Us</h3>
          <ul className="text-black flex flex-wrap">
            <li className="mr-4 mb-2">
              <a href="Javascript:void(0)" className="flex items-center">
                <FaMapMarker className="inline-block mr-2" /> Lagos Nigeria
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="Javascript:void(0)" className="flex items-center">
                <FaPhone className="inline-block mr-2" /> +2347080739071
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="Javascript:void(0)" className="flex items-center">
                <FaEnvelope className="inline-block mr-2" /> info@devxspace.com
              </a>
            </li>
            <div className="so mt-3 flex">
              <a href="Javascript:void(0)" className="text-blue-900 mr-3">
                <FaFacebookF className='mt-2' />
              </a>
              <a href="Javascript:void(0)" className="text-blue-700 p-2 mr-3">
                <FaTwitter />
              </a>
              <a href="Javascript:void(0)" className="text-blue-900 p-2 mr-3">
                <FaLinkedin />
              </a>
              <a href="Javascript:void(0)" className="text-red-700 p-2 mr-3">
                <FaInstagram />
              </a>
              <a href="Javascript:void(0)" className="text-red-700 p-2">
                <FaYoutube />
              </a>
            </div>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-black font-semibold mb-3">Useful Links</h3>
          <ul className="text-black">
            <li>
              <a href=''>Withdraw</a>
            </li>
            <li>
              <a href=''>Wallet</a>
            </li>
            <li>
              <a href=''>Hire</a>
            </li>
            <li>
              <a href=''>Search</a>
            </li>
          </ul>
        </div>
      </div>
        <div className="col-span-1 bottom-0 mb-0 flex p-0  bg-white m-auto justify-center">
          &copy;@devxspace 2023 All rights reserved
        </div>
    </div>
  )
}

export default Footer;
