import axios from 'axios'
import React, { useEffect, useState } from 'react'

//step 1: define data types 
interface iUser{
  id: number
  name: string
  username:string
  email: string
}

const About = () => {

//step 2 functional components
  const[user,setUser]=useState<iUser[]>([])
  const[loading,setLoading]=useState<boolean>(true)

  //step 3 fetch Api

  const fetchUsers= async()=>{
    try{
      const res= await axios.get("https://jsonplaceholder.typicode.com/users")
      setUser(res.data)
    }
    catch(error){
      console.error("failed", error)
    }
    finally{
      setLoading(false)
    }
   
    
  }
  useEffect(()=>{
    fetchUsers(),([])
  })
  const getInitials = (name: string): string => {
  return name
    .split(" ")              // split full name by space
    .map((n) => n[0])        // take first letter of each word
    .join("")                // combine into a string
    .toUpperCase();          // make it uppercase
};

  return (
    <div className='max-w-[1280px] mx-auto'>
      <h1 className='text-3xl font-bold text-center py-11 text-gray-800'> All Users</h1>
      <div className=' flex justify-center items-center'>
           <button onClick={fetchUsers} disabled={loading} className='bg-gray-800 hover:bg-gray-700 text-white font-semibold px-6 py-4'>{loading? "a min pls...":"Fetch all users"}

      </button>
      </div>
     
      <section className='flex flex-wrap gap-7 my-6 max-md:flex-col items-center justify-center'>

        {user?.map((item:iUser,i:number)=>(
            <main className='flex items-center bg-black text-white p-5 w-100'  key={i}>
              <div className='bg-pink-500 rounded-full mr-4 text-purple-900 p-6 text-2xl'>{getInitials(item.name)}</div>
              <div className='w-80'>
                <h1>name : {item.name}</h1>
                <p className=''>username : {item.username}</p>
                <h1>email : {item.email}</h1>
              </div>

            </main>
        ))}

      </section>
     
    </div>
  )
}

export default About
