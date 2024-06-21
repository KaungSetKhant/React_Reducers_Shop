import React from 'react'
import Error from "../images/404.svg"
import { Link } from 'react-router-dom'
const Noitemfound = () => {
  return (
    <div className=' flex items-center justify-center flex-col mx-auto mt-20'>
      <img src={Error} className=' w-full h-[600px]' />
      <Link to={'/'}>
        <button className=' text-white font-mono text-xl rounded-lg shadow-lg px-6 py-3 bg-cyan-600 mb-5'>Add to cart</button>
      </Link>
    </div>
  )
}

export default Noitemfound
