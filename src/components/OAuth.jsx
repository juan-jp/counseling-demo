
import {FcGoogle} from "react-icons/fc"
export default function OAuth() {
  return (
    <button
    className='flex items-center justify-center w-full bg-slate-300 text-black px-7 py-3 uppercase text-sm  font-medium hover:bg-slate-500 active:bg-slate-600 shadow-md hover:shadow-lg active:shadow-xl transition duration-150 ease-in-out rounded'
    ><FcGoogle 
    className='text-2xl bg-white rounded-full mr-2'/>Continue with Google</button>
  )
}
