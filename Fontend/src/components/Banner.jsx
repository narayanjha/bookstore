import React from 'react'

const Banner = () => {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 mt-4'>
                    <div className='space-y-12'>
                        <h1 className='text-4xl font-bold'>Hello, Welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit consectetur autem deserunt voluptates nihil temporibus nam veritatis quisquam inventore! Cum, qui deleniti! Blanditiis beatae sequi ducimus pariatur alias, ad porro?</p>
                        <div>
                            <label className="input validator w-full">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                    </div>
                        <div className='mt-4'>
                            <button className="btn btn-secondary">Secondary</button>
                        </div>
                </div>
                <div className='order-1 w-full md:w-1/2 mt-4'>
                    <img src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1745460013~exp=1745463613~hmac=bbb3d83f9a169786fbb91ec755451ca9aa45c575086ecb0f3423cc45296b07b0&w=740" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner