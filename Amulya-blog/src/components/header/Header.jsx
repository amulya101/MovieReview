import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
import Buttons from "../buttons/Buttons";
import { Link } from 'react-router-dom';
library.add(faHouse);


const Header = ({name}) => {
  return (
    <header className="flex justify-between h-14 bg-slate-300">
        <div className="flex items-center" >
            <h1 className="ml-2 font-roboto text-xl">{name}</h1>
        </div>
        <div>
        <Link to="/">
            <FontAwesomeIcon className='p-5' icon="fa-solid fa-house" />
        </Link>
        </div>
        <div className="flex items-center">
        <Link to="/about">
            <Buttons label={"About Me"} myMar="mr-2"/>
        </Link>            
        </div>
    </header>
  )
}

export default Header