<<<<<<< HEAD
import React from 'react'
import {footerBottomItem} from "../../constants/index"
const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto px-4'>
<div className='w-full grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6  lgl:grid-cols-7 gap-3 place-content-center text-gray-400'>
  {
    footerBottomItem.map((item)=> (
      <div className='group cursor-pointer' key={item._id}>
        <h3 className='w-24 font-semibold text-xs group-hover:underline text-[#ddd] leading-3 mb-[2px]'>{item.title}</h3>
        <p className='w-24 tracking-tight text-xs text-[#999] group-hover:underline leading-3'>{item.des}</p>
      </div>
    ))
  }
</div>
      </div>
    </div>
  )
}

export default FooterBottom
=======
import React from 'react'
import {footerBottomItem} from "../../constants/index"
const FooterBottom = () => {
  return (
    <div className='w-full bg-footerBottom py-8'>
      <div className='max-w-5xl mx-auto px-4'>
<div className='w-full grid grid-cols-3 md:grid-cols-5 mdl:grid-cols-6  lgl:grid-cols-7 gap-3 place-content-center text-gray-400'>
  {
    footerBottomItem.map((item)=> (
      <div className='group cursor-pointer' key={item._id}>
        <h3 className='w-24 font-semibold text-xs group-hover:underline text-[#ddd] leading-3 mb-[2px]'>{item.title}</h3>
        <p className='w-24 tracking-tight text-xs text-[#999] group-hover:underline leading-3'>{item.des}</p>
      </div>
    ))
  }
</div>
      </div>
    </div>
  )
}

export default FooterBottom
>>>>>>> 6d7858233edd166cd04ec5265f9d09fd6e302ba5
