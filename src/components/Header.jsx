import {useState, useEffect} from "react"
import { useLocation , useNavigate} from 'react-router-dom'
import {getAuth, onAuthStateChanged} from "firebase/auth"
export default function Header() {
    const [pageState, setPageState] = useState("Sign in")

    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=> {
            if(user){
                setPageState("Profile");
            }else{
                setPageState("Sign in");
            }
        })
    }, [auth])
    function pathMatchRoute(route){
        if(route === location.pathname){
            return true;
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
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-black border-b-[3px] border-b-transparent $ ${
                pathMatchRoute("/") && " text-black border-b-blue-500"
              }`}
                    onClick={()=> navigate('/')}
                    >Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-black border-b-[3px] border-b-transparent $ ${
                pathMatchRoute("/students") && " text-black border-b-blue-500"
              }`}
                    onClick={()=> navigate('/students')}
                    >Students</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-black border-b-[3px] border-b-transparent $ ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && " text-black border-b-blue-500"
              }`}
                    onClick={()=> navigate('/profile')}
                    >{pageState}</li>
                </ul>
            </div>
        </header>

    </div>
  )
}
