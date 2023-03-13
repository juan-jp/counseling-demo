import { getAuth } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate();
  const [formData, setFormDate] = 
    useState({
      name: auth.currentUser.displayName, 
      email:auth.currentUser.email,
    }
  );
const {name, email} = formData

function onLogout(){
  auth.signOut()
  navigate('/');
}
return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>내 정보</h1>
    <div className='w-full md:w-[50%] mt-6 px-3'>
      <form>
        <input type="text" id='name' value={name} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>


        <input type="email" id='email' value={email} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>

        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
          <p className='flex items-center '>이름을 변경하시겠습니까?
          <span className='text-blue-500 hover:text-blue-700 transition ease-in-out duration-200 ml-1 cursor-pointer' >변경</span>
          </p>
          
          <p onClick={onLogout} className='text-teal-500 hover:text-teal-700 transition ease-in-out duration-200 cursor-pointer'>로그아웃</p>
        </div>
      </form>
    </div>
    
    </section>
    
    
    </>

  )
}
