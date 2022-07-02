import React from 'react'
import ComparisonRow from './ComparisonRow'
import { Link } from 'react-router-dom'

function ComparisonVisibility() {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center text-[#186fc5]'>It Doesn't stop at visibility</h1>
            <p className='text-center my-8 px-4 lg:px-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iusto excepturi omnis repellendus nostrum, quam ipsa quod animi laudantium at vel autem libero maiores saepe esse eius sit sunt incidunt ab dolorum et tenetur id commodi. Error odio incidunt hic molestiae deserunt officiis minima cum nobis, sint explicabo deleniti architecto?</p>
            <div className='lg:flex justify-center gap-x-3 text-center space-y-3 lg:space-y-0 px-10 lg:px-0 '>
                <p className='bg-blue-600 text-white ring-1 ring-blue-600 px-2 py-2 rounded-lg'>Lorem ipsum dolor sit amet.</p>
                <p className='bg-white text-blue-600 px-2 py-2 rounded-lg ring-1 ring-gray-400'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div>
                <ComparisonRow
                    first
                    src='/images/comparison/Revenue-bro.png'
                    heading='smart spend insights cut costs from day1'
                    text='consectetur adipisicing elit. Inventore iusto excepturi omnis repellendus nostrum, quam ipsa quod animi laudantium at vel autem libero maiores saepe esse eius sit sunt incidunt ab dolorum et tenetur id commodi. Error odio incidunt hic molestiae'
                />
                <ComparisonRow
                    src='/images/comparison/Cyber-attack.png'
                    heading='smart spend insights cut costs from day1'
                    text='consectetur adipisicing elit. Inventore iusto excepturi omnis repellendus nostrum, quam ipsa quod animi laudantium at vel autem libero maiores saepe esse eius sit sunt incidunt ab dolorum et tenetur id commodi. Error odio incidunt hic molestiae'
                />
            </div>

            <div className='lg:grid grid-cols-2 my-20'>
                <div className='col-span-1 text-center lg:text-left'>
                    <h1 className='text-3xl font-bold text-[#186fc5]'>Get your Demo Today</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, magni?</p>
                </div>

                <div className='col-span-1 grid place-items-center mt-5'>
                    <div>
                        <Link to='/demo' target='_blank' className='text-white rounded-full px-4 py-2 bg-[#df7324]'>Request a Demo</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComparisonVisibility
