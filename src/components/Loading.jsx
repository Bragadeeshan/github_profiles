import React from 'react'

const Loading = () => {
  return (
    <div className='h-96 flex justify-center items-center'>
      <span className='border-4 p-5 rounded-full border-b-transparent border-sky-500 animate-spin tracking-wide'></span>
    </div>
  )
};

export default Loading