import React from 'react'
import AboutUsExecutiveRow from './AboutUsExecutiveRow'
function AboutsUsExecutives() {
    return (
        <div className='mb-10'>
            <div className="text-center">
                <h3 className='text font-semibold lg:text-xl text-[#0762bb]' >THE VISIONARIES</h3>
                <h1 className='text-[#2a3158] text-3xl lg:text-4xl font-semibold'>Meet Our Key executives</h1>
            </div>

            <div className='max-w-6xl mx-auto mt-20'>
                <AboutUsExecutiveRow
                    img='/images/about-us/aboutus-executive-1.png'
                    text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nam quo temporibus? Enim explicabo iusto nobis quod voluptas excepturi ducimus laboriosam placeat accusantium aut est nesciunt magni aperiam nam aliquid provident id dignissimos accusamus obcaecati sint perspiciatis, molestias reiciendis commodi in! Earum, qui impedit numquam repellat quia aut atque fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptas ullam ea sequi natus dolorem facere perferendis tenetur ad rem consequuntur sed rerum labore maiores minima cum, in aliquam nemo!'
                    name='User-1'
                />
                <AboutUsExecutiveRow
                    first={true}
                    img='/images/about-us/aboutus-executive-2.png'
                    text='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum nam quo temporibus? Enim explicabo iusto nobis quod voluptas excepturi ducimus laboriosam placeat accusantium aut est nesciunt magni aperiam nam aliquid provident id dignissimos accusamus obcaecati sint perspiciatis, molestias reiciendis commodi in! Earum, qui impedit numquam repellat quia aut atque fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptas ullam ea sequi natus dolorem facere perferendis tenetur ad rem consequuntur sed rerum labore maiores minima cum, in aliquam nemo!'
                    name='User-2'
                />
            </div>
        </div>
    )
}

export default AboutsUsExecutives
