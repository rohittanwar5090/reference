import React from 'react'
import Loader from '../components/Loader';
import useLoader from '../components/useLoader';
import NavbarHeader from '../components/NavbarHeader';
import { useHistory } from 'react-router-dom';
import Article1 from '../components/Articles/Article1';
import Article2 from '../components/Articles/Article2';
import Article3 from '../components/Articles/Article3';
import Article4 from '../components/Articles/Article4';
import Article5 from '../components/Articles/Article5';
import Article6 from '../components/Articles/Article6';
import Article7 from '../components/Articles/Article7';
import Article8 from '../components/Articles/Article8';
import Article9 from '../components/Articles/Article9';
import Article11 from '../components/Articles/Article11';
import Article12 from '../components/Articles/Article12';
import ArticleMore from '../components/Articles/ArticleMore';
import ArticlesCard from '../components/Articles/ArticlesCard';
import img1 from '../assets/article-card-1.png'
import img2 from '../assets/article-card-2.png'
import img3 from '../assets/article-card-3.png'
import Footer from '../components/Footer/Footer';


function BlogsContent() {
    const loading = useLoader()
    const history = useHistory()
    let heading = history.location.pathname.split('/')[2].replace(/-/g, " ");

    return (
        <>
            {
                loading ? (
                    <Loader loading={loading} />
                ) : (
                    <>
                        <div>
                            <NavbarHeader />
                            <div className="max-w-6xl mx-auto pt-44">
                                <div className='px-5 lg:px-0 lg:grid grid-cols-3'>
                                    <div className='col-span-2 '>
                                        <h1 className='w-4/5 text-2xl font-semibold capitalize  text-[#2a3158]'>{heading} </h1>
                                        <div>
                                            {/**blogs details */}

                                            {
                                                heading === 'how to provide student centric online education' && (
                                                    <Article1 />
                                                )
                                            }

                                            {
                                                heading === 'the biggest drawbacks of online learning' && (
                                                    <Article2 />
                                                )
                                            }
                                            {
                                                heading === 'benefits of using collaboration software to engage your students' && (
                                                    <Article3 />
                                                )
                                            }
                                            {
                                                heading === 'an essential guide to formulating the perfect content creation strategy' && (
                                                    <Article4 />
                                                )
                                            }
                                            {
                                                heading === '10 best online course niches' && (
                                                    <Article5 />
                                                )
                                            }
                                            {
                                                heading === 'the best email marketing tools for your online course' && (
                                                    <Article6 />
                                                )
                                            }
                                            {
                                                heading === 'how to create an online course from scratch' && (
                                                    <Article7 />
                                                )
                                            }
                                            {
                                                heading === 'how to price your online course' && (
                                                    <Article8 />
                                                )
                                            }
                                            {
                                                heading === 'how to grow your online audience' && (
                                                    <Article9 />
                                                )
                                            }

                                            {
                                                heading === '5 common myths about online courses' && (
                                                    <Article11 />
                                                )
                                            }
                                            {
                                                heading === '10 best side hustles for teachers' && (
                                                    <Article12 />
                                                )
                                            }
                                        </div>
                                    </div>

                                    {/**Blogs Articles Right section */}
                                    <div className='col-span-1 lg:ml-10 mb-5'>
                                        <div className='flex items-center mb-12'>
                                            <input type="text" placeholder="search for .." className=' w-4/5 text-xl h-11 p-4 ring-1 ring-gray-700 rounded-l-full' />
                                            <a href="#yourlink">
                                                <i className="fas fa-search bg-gray-700 text-2xl text-white p-2 rounded-r-full"></i>
                                            </a>
                                        </div>
                                        <div>
                                            <h1 className="text-4xl font-semibold mb-4  text-[#2a3158] ">Connect us on</h1>
                                            <p className="text-md text-gray-700 ">
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                                Delectus, quae. Lorem ipsum dolor sit amet.
                                            </p>
                                            <div className="mt-5 flex items-center justify-around">
                                                {
                                                    ['fa-facebook-f', 'fa-twitter', 'fa-linkedin-in', 'fa-instagram', 'fa-youtube'].map((item, idx) => {
                                                        return (
                                                            <a key={idx} href="#yourlink" className='text-4xl text-[#0762bb]'>
                                                                <i className={`fab ${item}`}></i>
                                                            </a>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className='mt-10 lg:mt-60 space-y-5'>
                                            <ArticlesCard img={img1} text='About us' />
                                            <ArticlesCard img={img2} text='Schedule a Demo' />
                                            <ArticlesCard img={img3} text='Lead Magnet' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ArticleMore />
                        <Footer />

                    </>
                )
            }
        </>
    )
}

export default BlogsContent
