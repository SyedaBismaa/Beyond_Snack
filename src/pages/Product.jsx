import React from 'react'
import PCard from '../componants/PCard'

const Product = () => {

    const arr=[10,20,20,40,50,60,60,70,70]
  return (
    <div className='p-10 flex gap-10  flex-wrap'>
        {arr.map(function(elem){
            return <PCard/>
        })}
    </div>
  )
}

export default Product