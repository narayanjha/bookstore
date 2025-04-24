import React from 'react'
import list from '../../public/list.json';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
const Course = () => {
    const courseData = list;
    console.log(courseData);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='text-center justify-center items-center mt-28'>
                    <h1 className='text-2xl md:text-4xl'>We're delighted to have <span className='text-pink-500'>you here!!!</span></h1>
                    <p className='mt-18'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi fuga maxime voluptas provident expedita enim nostrum ipsam officia consequatur necessitatibus ad, voluptates explicabo nam sunt natus reiciendis sit? Dolores.</p>
                    <Link to={'/'}>
                    <button className='bg-pink-500 text-white px-5 py-2 rounded-sm mt-6 cursor-pointer hover:bg-pink-700 duration-300'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-md1 md:grid-cols-3'>
                    {
                        courseData.map((data) =>
                            <Card dataList={data} key={data.id} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Course