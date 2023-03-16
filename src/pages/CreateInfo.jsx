import React, { useState } from 'react'


export default function CreateInfo() {
  const selectList = ["7학년","8학년","9학년", "10학년", "11학년", "12학년"];
  
  const [formData, setFormData] = useState({
    type:"국내",
    Selected:'',
    
  }, [{name:"", age:""}]);
  const {type, Selected} =formData;
  
  function onChange(e){
    
    console.log(e.target.value)
  }
  
  return (
   <main  className="w-full px-2 mx-auto pl-6 pr-6">
    <h1 className="text-3xl text-center mt-6 font-bold  ">학교생활세부사항기록부</h1>
    <form>
      <div className='flex'>
      <div className='w-1/2 '>
        
        <div className='flex'>
          <p className='mr-3 text-lg font-semibold'>이름</p>
          <input type="text" /> 
        </div>
        <div className='flex mt-6'>
        <p className='mr-3 text-lg font-semibold'>학년</p>
        <select onChange={onChange} id="Selected" value={Selected} className="rounded">
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        </div>
        재적사항
        졸업년도
        </div>
        <div>
            <img src="" alt="sss" />
        </div>
      </div>
      <p className='text-lg font-semibold mt-6'>해외/국내</p>
      <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`mr-3 px-7 py-3 font-medium text-md shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full `}
          >
            국내
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={onChange}
            className={`ml-3 px-7 py-3 font-medium text-md shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full `}>
            해외

          </button>
        </div>
        {/* {formData.map((input, index) => {
          return (
            <div key={index}>
              <input name="name" value={input.name} />
              <input name="age" value={input.name} onChange={onChange} />


            </div>
          )

        })} */}

    </form>
   </main>
  )
}
