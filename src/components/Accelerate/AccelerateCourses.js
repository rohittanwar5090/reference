import React from 'react'
import AccelerateCourseRow from './AccelerateCourseRow'

function AccelerateCourses() {
    return (
        <>
            <div className='mb-10 container max-w-7xl mx-auto px-5 lg:px-0 flex justify-center flex-wrap gap-10'>
                <AccelerateCourseRow
                    src='/images/Accelerate/course-1.png'
                    course='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam?'
                    instructor='Rajat Sharma'
                    courses={25}
                    details='
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam libero doloribus similique, distinctio inventore quasi sequi. Ex blanditiis iusto pariatur, dignissimos cupiditate officia aspernatur sed, quia deleniti reprehenderit, consectetur voluptatem.'
                />
                <AccelerateCourseRow
                    src='/images/Accelerate/course-2.png'
                    course='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam?'
                    instructor='Rajat Sharma'
                    courses={25}
                    details='
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam libero doloribus similique, distinctio inventore quasi sequi. Ex blanditiis iusto pariatur, dignissimos cupiditate officia aspernatur sed, quia deleniti reprehenderit, consectetur voluptatem.'
                />
                <AccelerateCourseRow
                    src='/images/Accelerate/course-3.png'
                    course='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam?'
                    instructor='Rajat Sharma'
                    courses={25}
                    details='
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam libero doloribus similique, distinctio inventore quasi sequi. Ex blanditiis iusto pariatur, dignissimos cupiditate officia aspernatur sed, quia deleniti reprehenderit, consectetur voluptatem.'
                />
                <AccelerateCourseRow
                    src='/images/Accelerate/course-4.png'
                    course='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam?'
                    instructor='Rajat Sharma'
                    courses={25}
                    details='
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam libero doloribus similique, distinctio inventore quasi sequi. Ex blanditiis iusto pariatur, dignissimos cupiditate officia aspernatur sed, quia deleniti reprehenderit, consectetur voluptatem.'
                />
                <AccelerateCourseRow
                    src='/images/Accelerate/course-5.png'
                    course='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam?'
                    instructor='Rajat Sharma'
                    courses={25}
                    details='
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam libero doloribus similique, distinctio inventore quasi sequi. Ex blanditiis iusto pariatur, dignissimos cupiditate officia aspernatur sed, quia deleniti reprehenderit, consectetur voluptatem.'
                />
                <AccelerateCourseRow
                    src='/images/Accelerate/course-6.png'
                    course='Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam?'
                    instructor='Rajat Sharma'
                    courses={25}
                    details='
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam libero doloribus similique, distinctio inventore quasi sequi. Ex blanditiis iusto pariatur, dignissimos cupiditate officia aspernatur sed, quia deleniti reprehenderit, consectetur voluptatem.'
                />
            </div>
            <div className='grid place-items-center'>
                <button
                    className='rounded-md text-white px-5 py-2 text-xl bg-[#ff960c]'
                >Browse All Courses</button>
            </div>
        </>
    )
}

export default AccelerateCourses
