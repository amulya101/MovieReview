import React from 'react'
import Buttons from '../components/buttons/Buttons'
import { Link } from 'react-router-dom'

const Home = () => {

    const bg_style= {
        backgroundImage: "url(/mtn_bg.jpeg)",
        height:'100vh',
    }
  return (
    <div className='relative overflow-hidden bg-cover bg-no-repeat bg-center bg-fixed '
    style={bg_style}>
        <div className="absolute flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{"backgroundColor": "rgba(0, 0, 0, 0.6)"}}>
            <div className="flex flex-col backdrop-opacity-10 backdrop-invert bg-white/5 mb-96 px-20 h-1/4 text-white items-center m-auto justify-center rounded-lg border-none border-2 ">     
                <h2 className="mb-7 font-roboto text-4xl">Amulya's Blog</h2>
                <Link to="/blogs">
                    <Buttons label={"Explore"} />
                </Link>        
            </div>
        </div>
       
    </div>
  )
}

export default Home