import React from 'react'

const Navbar = () => {
  return (
      <div className="navbar h-16 mx-auto px-auto">
        <div className="flex gap-10">
          <div className='flex-start my-auto text-blue-900'>
            <a className="text-3xl">BookStore</a>
          </div>
          <div className='flex float-right justify-end items-end gap-x-4'>
            <button
              className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
              onClick={() => setShowType('table')}
            >
              Table
            </button>
            <button
              className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
              onClick={() => setShowType('card')}
            >
              Card
            </button>
          </div>
        </div>
        <div className="flex-none">
          <div className='flex justify-center items-center gap-x-4'>
            <button
              className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
              onClick={() => setShowType('table')}
            >
              Table
            </button>
            <button
              className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
              onClick={() => setShowType('card')}
            >
              Card
            </button>
          </div>
        </div>
      </div>
  )
}

export default Navbar