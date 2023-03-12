import React from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMathRoute(route){
        if(route === location.pathname){
            return true
        }
    };
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header  className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src='' 
                alt='logo'
                className='h-5 cursor-pointer'
                onClick ={()=> navigate("/")}>
                </img>
            </div>
            <div>
            <ul className='flex space-x-20'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/") && "text-black border-b-blue-400"}`}
                    onClick={()=> navigate('/')}
                    >Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/students") && "text-black border-b-blue-400"}`}
                    onClick={()=> navigate('/students')}
                    >Students</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-blue-400"}`}
                    onClick={()=> navigate('/sign-in')}
                    >Sign In</li>
                </ul>
            </div>
        </header>

    </div>
  )
}
