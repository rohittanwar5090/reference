import React from 'react'

function Template5Search({ bgcolor }) {
    return (
        <div className={`px-10 py-5 lg:grid bg-black grid-cols-7 pt-20 lg:px-12 lg:py-10`}
        >
            <div className='text-white col-span-2'>
                <h4 className="text-2xl text-[#cd9c56]">Sign up for <span className='text-white'> free recipes </span> delivered to your inbox weekly </h4>

            </div>
            <div className="col-span-4  mt-5 space-y-5 lg:space-y-0 lg:mt-0 lg:flex justify-center items-center gap-x-5 lg:px-5">
                <form className='w-full'>
                    <input type="text" placeholder=" Name" className={`w-full h-12 px-2 outline-none rounded-full cursor-pointer`} />
                </form>
                <form className='w-full'>
                    <input type="email" placeholder=" Email ID" className='w-full h-12 px-2 outline-none rounded-full  cursor-pointer' />
                </form>
            </div>

            <div className='col-span-1 grid place-items-center mt-4 lg:mt-0'>
                <a href="#yourlink" className='text-white rounded-full text-2xl px-5 py-2 bg-[#cd9c56]'>Sign up</a>
            </div>
        </div>
    )
}

export default Template5Search
