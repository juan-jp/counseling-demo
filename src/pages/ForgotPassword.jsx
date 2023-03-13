import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  function onChange(event){
    setEmail(event.target.value);
    } 
  async function onSubmit(e){
    
    e.preventDefault()
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email) 
      toast.success("재설정 이메일을 보냈습니다")
    } catch (error) {
      toast.error("비밀번호를 찾을 수 없습니다")
    }
  }
  return (

    <section>
    <div>
      <h1 className='text-3xl text-center mt-6 font-bold'>Forgot Password</h1>
    </div>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto'>
      <div className ='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
        <img src="https://images.unsplash.com/photo-1579356687668-cbdd5a551c18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="sign-in image" 
        className='w-full rounded-2xl'
        />
      </div>
      <div className ='w-full md:w-[67%] lg:w-[40%] lg:ml-20'>
        <form onSubmit={onSubmit}>
          <input 
          type="email" 
          id='email' 
          value={email} 
          onChange={onChange} 
          placeholder="Email Address"
          className=' mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out' 
           />
          
          <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg'>
            <p className='mb-6'>
             Don't have an account?
            <Link to="/sign-up"
            className='text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out ml-1'
            >Register</Link>
            </p>
            <p>
              <Link to="/sign-in" className='text-green-500 hover:text-green-700 transition duration-200 ease-in-out '>Want to Sign in instead?</Link>
            </p>
          </div>
          <button type='submit' className='w-full bg-teal-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-teal-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-teal-800' >
          Send reset password
        </button>
        <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth/>
        </form>
       
      </div>
    </div>
  </section>
  )
}
