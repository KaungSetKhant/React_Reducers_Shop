import React from 'react'
import { StateContextCustom } from '../context/StateContext'

const Category = () => {
    const {category,setCategory} = StateContextCustom()
  return (
    <div className='font-mono mt-5'>
       <h2 className='text-2xl mb-2'>Search by Category</h2> 
      <select className=' w-[240px] rounded-lg shadow-lg border-pink-500' value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">electronics</option>
        <option value="jewelery">jewelery</option>
        <option value="men's clothing">men clothing</option>
        <option value="women's clothing">women clothing</option>
      </select>
    </div>
  )
}

export default Category
