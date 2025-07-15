
import React from 'react'
interface allUsers{
    _id:string;
    username: string;
    email:string;
    address:string;
    age: string;
    bio:string;
}

const Home = () => {

  return (
    <div >
        <h1>Subscribers</h1>
        <section>
            <div>
                A
            </div>
            <div>
                name:joy okoduwa
                username:jyokoduwa@gmail.com
                age:25
                bio:i love coding and eating. 
            </div>
        </section>
    </div>
  )
}

export default Home
