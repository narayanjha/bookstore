import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = ({ dataList }) => {
    const data = dataList;
    return (
        <div className='my-5 d-flex justify-center hover:scale-105 duration-300'>
            <div className="card w-100 md:w-86 bg-base-100 shadow-sm dark:bg-slate-900 dark:text-white">
                <figure>
                    <img
                        src={data.image}
                        alt="Books" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.name}
                        <div className="badge badge-secondary">{data.category}</div>
                    </h2>
                    <p>{data.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">₹ : {data.price}</div>
                        <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 px-2 py-1 cursor-pointer">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card
