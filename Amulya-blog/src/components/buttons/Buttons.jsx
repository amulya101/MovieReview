import React from 'react'

const Buttons = ({label, myMar}) => {
  return (
    <button className={`${myMar} border-solid font-roboto border-2 p-2 px-3 rounded-lg bg-blue-700 text-white` }>
        {label}
    </button>
  )
}

export default Buttons