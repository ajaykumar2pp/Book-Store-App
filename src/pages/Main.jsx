import React from 'react'
const Main = () => {
  return (
    <>
      <div className="container  flex items-center justify-between mt-8">
        <div className='2/5 p-8 '>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Book Store</span></h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>

        <div className='2/5'>
          <img src="./book-logo.png" alt="book-logo"  />
        </div>
      </div>
    </>
  )
}

export default Main