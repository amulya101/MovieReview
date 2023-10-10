import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/buttons/Buttons';

const BlogDetail = () => {

    const bg_style = {
        backgroundImage: "url(/about_stupa.jpeg)",
        height:'100vh',
    }
  return (
    <div className='flex relative overflow-hidden bg-cover bg-no-repeat bg-center bg-fixed '
    style={bg_style}>
        <div className="absolute flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{"backgroundColor": "rgba(0, 0, 0, 0.6)"}}>
            <div className="flex flex-col backdrop-opacity-10 backdrop-invert bg-white/5 mb-96 px-20  text-white items-center m-auto justify-center rounded-lg border-none border-2 w-full max-w-md">     
                <h2 className="mb-7 font-roboto text-4xl pt-7">Title</h2>
                <p className='font-roboto text-center mb-7'> Description     </p>
                <Link to="/blogs">
                    <Buttons label={"Go Back"} myMar="mb-7"/>
                </Link>                          
            </div>
        </div>
       
    </div>
  )
}

export default BlogDetail