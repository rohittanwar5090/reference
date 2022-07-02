import React from 'react'
import Template5ChefRow from './Template5ChefRow'

function Template5Chefs() {
    return (
        <div className='px-5 lg:px-0 py-20'>
            <Template5ChefRow
                first
                src='/images/template5/template5-chef2.png'
                heading1='Supercharge your'
                heading2='Baking career with us'
                text='we will transform you into a professional home baker and certified Chocolatier.'
            />

            <Template5ChefRow
                src='/images/template5/template5-chef1.png'
                heading1='Enjoy unlimited access'
                heading2=' to All courses'
                text='Pay once & get unlimited access to all courses website-wide.'
            />
            <Template5ChefRow
                first
                src='/images/template5/template5-chef3.png'
                heading1='Recipes taught'
                heading2='by professionals'
                text='Learn baking from the best professionals & kick start your career.'
            />
            <div className='pt-10 text-center'>
                <p className='inline-block text-white bg-black rounded-full px-8 py-2'
                >
                    Buy now
                </p>
            </div>
        </div>
    )
}

export default Template5Chefs
