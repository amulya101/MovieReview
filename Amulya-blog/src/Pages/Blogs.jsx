import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from '../components/buttons/Buttons';

const Blogs = ({blogs}) => {

    const bg_style= {
        backgroundImage: "url(/blog_bg.jpeg)",
        height:'100vh',
    }
  return (
    <div className='flex relative overflow-hidden bg-cover bg-no-repeat bg-center bg-fixed'
    style={bg_style}>
        <div className="absolute flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
        style={{"backgroundColor": "rgba(0, 0, 0, 0.6)"}}>
            <div className='m-auto px-3 w-full max-w-[1440px]'>
                <div className="flex flex-row  flex-wrap backdrop-opacity-10 backdrop-invert bg-white/5  px-20   text-white justify-center rounded-lg border-none border-2 sm:w-full max-w-full overflow-hidden">     
                   {
                    blogs?.map((blog) => {
                        return (                           
                            <div className='flex flex-col border-solid font-roboto border-2 rounded-lg w-[95%] max-w-[327px] m-2 'key={blog.blogId} >
                                <div className='h-[70%] overflow-hidden'>
                                    <img src={blog.blogImg} className='rounded-t-lg ' alt="desc" />
                                </div>
                                <div className=''>
                                    <p>Amulya Poudel</p>
                                </div>
                                <Link to={`/blog/${blog.blogId}`}>
                                    <Buttons label={"Read more"} myMar="mb-1"/>
                                </Link>
                                
                            </div>             
                        )                        
                    })
                   } 
                    

                </div>
            </div>
            
        </div>
       
    </div>
  )
}

export default Blogs