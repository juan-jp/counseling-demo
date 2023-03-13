import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { db } from '../firebase';


export default function Profile() {
  const auth = getAuth()
  const navigate = useNavigate();
  const [changeDetail, setChangeDetail] = useState(false);
  const [formData, setFormDate] = 
    useState({
      name: auth.currentUser.displayName, 
      email:auth.currentUser.email,
    }
  );
const {name, email} = formData

function onLogout(){
  auth.signOut();
  navigate('/');
}
function onChange(event){
  setFormDate((prevState)=>({
    ...prevState,
    [event.target.id]: event.target.value,
  }))
}
async function onSubmit(){
  try {
    if(auth.currentUser.displayName !== name){
      //update displayname
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    
    const docRef= doc(db, "users", auth.currentUser.uid)
    await updateDoc(docRef,{
      name,
    })
    }
    toast.success('이름 변경 성공')
  } catch (error) {
    toast.error("이름 변경에 실패했습니다")
  }
}
return (
    <>
    <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
      <h1 className='text-3xl text-center mt-6 font-bold'>내 정보</h1>
    <div className='w-full md:w-[50%] mt-6 px-3'>
      <form>
        <input 
        type="text" 
        id='name' 
        value={name} 
        disabled ={!changeDetail}
        onChange ={onChange}
        className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-blue-100 focus:bg-blue-100"}`}/>


        <input type="email" id='email' value={email} disabled className='mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out'/>

        <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
          <p className='flex items-center '>이름을 변경하시겠습니까?
          <span 
          onClick={() =>{
            changeDetail && onSubmit()
            setChangeDetail((prevState)=> !prevState)
            } } 
           className='text-blue-500 hover:text-blue-700 transition ease-in-out duration-200 ml-1 cursor-pointer'>{changeDetail ? "적용":"수정"} </span>
          </p>
          
          <p onClick={onLogout} className='text-teal-500 hover:text-teal-700 transition ease-in-out duration-200 cursor-pointer'>로그아웃</p>
        </div>
      </form>
    </div>
    
    </section>
    
    
    </>

  )
}
