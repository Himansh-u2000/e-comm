import React from 'react'
import Heading from './Heading'
import rectangle9 from '../assets/Rectangle9.png'
import { productData } from '../data/productData.js'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";



export default function BestRecommended() {
  return (
    <div>
      <Heading text={`Our Best o2`} className={`py-6`} />
      {/* {productData.map((product, index) => (
        <Product {...product} key={index}/>
      ))} */}
      <Product img={productData[0].img} heading={productData[0].heading} desc={productData[0].desc} />
    </div>
  )
}



const Product = ({ img = "", heading = "", desc = [], index = 0 }) => <div className='md:mx-12 m-2 md:flex justify-center items-start gap-6 md:p-12 p-6 md:h-[450px]'
  style={{
    backgroundImage: `url(${rectangle9})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top'
  }}>
  <div className="md:w-1/2 flex justify-end relative md:-top-28"><img src={img} alt="plant" className='md:w-[500px] md:h-[500px] w-44 h-44' /></div>
  <div className="md:w-1/2 flex flex-col gap-4 md:mt-18 text-white/90">
    <h2 className='md:text-3xl font-semibold'>{heading}</h2>
    <p className='md:text-lg '>{desc.map((para) => (
      <div className='py-2 md:text-base text-[9px]'>{para}</div>
    ))}</p>
    <div className="flex justify-between flex-wrap gap-4">
      <button className='px-6 py-2 border border-white rounded-lg cursor-pointer'>Explore</button>
      <span className='flex gap-2 items-center'>
        <MdOutlineKeyboardArrowLeft className='hover:cursor-pointer' size={30}/>
        {index} / 4
        <MdOutlineKeyboardArrowRight className='hover:cursor-pointer' size={30} />
      </span>
    </div>
  </div>
</div>