
import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface allUsers{
    _id:string;
    username: string;
    email:string;
    address:string;
    age: string;
    bio:string;
}

const Home = () => {
    const [getUser, setGetUser]= useState <allUsers[]>([]);
    const getMyUser= async()=>{
        const res= await axios.get('https://user-data-ci61.onrender.com/user/viewalluser');
        setGetUser(res.data.data)

    }
    useEffect(()=>{
        getMyUser(),([])
    })
    

  return (
    <div className='max-w-[1280px] mx-auto '>
        <h1 className='text-6xl font-bold text-center py-11 text-gray-800'>Subscribers</h1>
        <section  className='flex flex-wrap gap-7'>
            {getUser?.map((item:allUsers,i:number)=>(
                <main className='flex items-center  shadow-lg bg-white w-100  p-4 hover:transition-all hover:translate-2.5' key={i}>
                    <div className='bg-gray-800 text-white text-5xl p-7 rounded-full mr-3 '>
                    {item.username.charAt(0)}
                    </div>
                    <div className='w-80 '>
                    <h2> Name: {item.username}</h2>
                    <p >Email: {item.email}</p>
                    <p>Age: {item.age}</p>
                    <p> Adreess: {item.address}</p>
                    <p >Bio: {item.bio}</p>
                   
                </div>
                </main>
            ))}
            
            
            
            
           
        </section>
    </div>
  )
}

export default Home
