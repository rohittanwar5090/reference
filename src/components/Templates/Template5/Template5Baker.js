import React from 'react'

function Template5Baker() {
    return (
        <div
            style={{
                backgroundImage: "url('/images/template5/template5-baker.png')",
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '100%',
            }}
            className='px-5 lg:px-0 pb-20 lg:pb-32'
        >
            <div className='pt-20'>
                <h1
                    className='text-2xl font-bold text-center text-[#cd9c56]'
                >You are just one step away from beginning a <span className='text-white'> Professional Baker</span>
                </h1>
                <div className='flex justify-center gap-2 pt-10'>
                    <div className='grid gap-2'>
                        <img src="/images/template5/template5-baking1.png" className='w-full h-auto object-contain' alt="" />
                        <img src="/images/template5/template5-baking2.png" className='w-full h-auto object-contain' alt="" />
                    </div>
                    <div>
                        <img src="/images/template5/template5-baking3.png" className='w-full h-auto object-contain' alt="" />
                    </div>
                    <div className=' grid gap-2'>
                        <img src="/images/template5/template5-baking4.png" className='w-full h-auto object-contain' alt="" />
                        <img src="/images/template5/template5-baking5.png" className='w-full h-auto object-contain' alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Template5Baker
