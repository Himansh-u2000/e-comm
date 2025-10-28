import React from 'react'

export default function Button({children}) {
  return (
    <button className='border border-white rounded-lg px-6 py-2 hover:cursor-pointer'>{children}</button>
  )
}
