import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap cursor-pointer'>
            <span className='text-slate-500'>Find</span>
            <span className='text-red-500'>Home</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search Home' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600'/>
        </form>
        <ul className='flex gap-6 '>
            <Link to='/' className='hover:scale-125'>
            <li className='hidden sm:inline text-slate-700 cursor-pointer hover:text-red-500 hover:duration-300 hover:scale-125 '>HOME</li>
            </Link>
            <li className='hidden sm:inline text-slate-700 cursor-pointer hover:text-red-500 hover:duration-300 hover:scale-125 '>BUY</li>
            <li className='hidden sm:inline text-slate-700 cursor-pointer hover:text-red-500 hover:duration-300 hover:scale-125 '>SELL</li>
            <Link to='/about' className='hover:scale-125'>
            <li className='hidden sm:inline text-slate-700 cursor-pointer hover:text-red-500 hover:duration-300 hover:scale-125 '>ABOUT</li>
            </Link>
            <li className='hidden sm:inline text-slate-700 cursor-pointer hover:text-red-500 hover:duration-300 hover:scale-125 '>CONTACT</li>

            <Link to='/profile'>
            {currentUser ? ( <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" /> ) : (<li className=' text-slate-700 cursor-pointer hover:text-red-500 hover:duration-300 hover:scale-125 '>SIGN IN</li>)}
            
            </Link>

        </ul>
        </div>
    </header>
  )
}
