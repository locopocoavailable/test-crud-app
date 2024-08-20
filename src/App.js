import { useRef, useState } from 'react';
import './index.css'
import useGetUser from './utils/useGetUser';
import useAddUser from './utils/useAddUser';
import useDeleteUser from './utils/useDeleteUser';
import useUpdateUser from './utils/useUpdateUser';

function App() {
  const [isPopup,setIsPopup] = useState(null)
  const users = useGetUser()
  const addUser = useAddUser
  const deleteUser = useDeleteUser
  const editUser = useUpdateUser

  const name = useRef(null)
  const age = useRef(null)
  const nickname1 = useRef(null)
  const nickname2 = useRef(null)
  const nickname3 = useRef(null)
  const apikey = useRef(null)

  const editName = useRef(null)
  const editAge = useRef(null)
  const editNickname1 = useRef(null)
  const editNickname2 = useRef(null)
  const editNickname3 = useRef(null)
  const editApiKey = useRef(null)

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    console.log(name.current.value)
    console.log(age.current.value)
    console.log(nickname1.current.value)
    console.log(nickname2.current.value)
    console.log(nickname3.current.value)

    if(process.env.REACT_APP_API_KEY === apikey.current.value){
      
    addUser(name.current.value,age.current.value,[nickname1.current.value,nickname2.current.value,nickname3.current.value])
    }else{
      alert("Please enter correct API KEY");
    }

  }

  const handleDeleteBtn = (id)=>{
    deleteUser(id)
  }

  const handleEditUserBtn = (id)=>{
    console.log("process.env.REACT_APP_API_KEY")
    console.log(typeof process.env.REACT_APP_API_KEY)
    if(process.env.REACT_APP_API_KEY === editApiKey.current.value){
      editUser(id,editName.current.value,editAge.current.value,[editNickname1.current.value,editNickname2.current.value,editNickname3.current.value])
  
      
    }else{
      alert("Please enter correct API KEY");
    }
}

  

  return (
    <div className='w-screen'>
      <form className='flex flex-col max-w-[450px] mx-auto' onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Name</label>
        <input ref={name}  className='bg-gray-400 ' id='name' type='text' required/>
        <label htmlFor='age'>Age</label>
        <input ref={age} className='bg-gray-400 ' id='age' type='number' required/>
        <label htmlFor='nickname1'>Nick Name 1</label>
        <input ref={nickname1} className='bg-gray-400 ' id='nickname1' type='text' required/> 
        <label htmlFor='nickname2'>Nick Name 2</label>
        <input ref={nickname2} className='bg-gray-400 ' id='nickname2' type='text' required/>
         <label htmlFor='nickname3'>Nick Name 3</label>
        <input ref={nickname3} className='bg-gray-400 ' id='nickname3' type='text' required/>
        <label htmlFor='apikey'>API KEY</label>
        <input ref={apikey} className='bg-gray-400 ' id='apikey' type='text' required/>
        <button className='bg-green-300 my-2' >Add User</button>
      </form>

      <div onClick={()=>{setIsPopup(null)}} className={`bg-[#25252599] absolute top-0 left-0 right-0 bottom-0 ${isPopup? 'absolute' : "hidden"}`}></div>

      <form onSubmit={(e)=>{
        e.preventDefault()
        handleEditUserBtn(isPopup)
        setIsPopup(null)
      }} className={`flex flex-col max-w-[450px] bg-white top-[10%] p-12 rounded-sm left-[50%] shadow-2xl -translate-x-1/2 mx-auto ${isPopup? "absolute" : "hidden"}`}>
      <p onClick={()=>{setIsPopup(null)}} className='cursor-pointer rotate-45 text-3xl absolute top-1 right-1 '>+</p>
        <label htmlFor='editName'>Name</label>
        <input ref={editName}  className='bg-gray-400 ' id='editName' type='text' required/>
        <label htmlFor='editAge'>Age</label>
        <input ref={editAge} className='bg-gray-400 ' id='editAge' type='number' required/>
        <label htmlFor='editNickname1'>Nick Name 1</label>
        <input ref={editNickname1} className='bg-gray-400 ' id='editNickname1' type='text' required/> 
        <label htmlFor='editNickname2'>Nick Name 2</label>
        <input ref={editNickname2} className='bg-gray-400 ' id='editNickname2' type='text' required/>
         <label htmlFor='editNickname3'>Nick Name 3</label>
        <input ref={editNickname3} className='bg-gray-400 ' id='editNickname3' type='text' required/>
        <input ref={editApiKey} className='bg-gray-400 ' id='editApiKey' type='text' required/>
        <button className='bg-green-300 my-2' >Add User</button>
        <button type='submit' className='bg-green-300 my-2' >Edit User</button>
      </form>

      {users.map((user)=>{
        return (
        <>
          <div key={user.id}>
            <h1 >{`Name: ${user.name} -- Age: ${user.age} -- Nick Names: ${user.nickNames.join(', ')}`}</h1> 
            <button className='bg-red-600' onClick={()=>handleDeleteBtn(user.id)}> delete user</button>
            <button className='bg-green-400' onClick={()=>{setIsPopup(user.id)}}>Edit</button>
          </div>

          
        </>
          // handleEditBtn(id,newName, NewAge,newNickNames)
        )
      })}
    </div>
  )
  
    
  
}

export default App;
