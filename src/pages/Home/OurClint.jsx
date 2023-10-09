import React from 'react';
import './OurClint.css'

const OurClint = () => {
    return (
        <div className='client-section'>
            <h4 className="text-center text-4xl text-[#FFBB00] rounded-xl font-bold my-6 bg-slate-400 border border-[#FF6F33] py-6">Our Sponsor List</h4>
            <div className='client_bg'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 '>
                    <div className=" bg-transparent clint_card border " data-aos="flip-left">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Shabby-Chic.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold ">Shabby</h2>
                        </div>
                    </div>
                    <div className=" bg-transparent clint_card border" data-aos="flip-right">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Explore.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold">Explore</h2>
                        </div>
                    </div>
                    <div className=" bg-transparent clint_card border " data-aos="flip-left">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Chocolate.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold">Chocolate</h2>
                        </div>
                    </div>
                    <div className=" bg-transparent clint_card border" data-aos="flip-right">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Mountain.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold">Mountain</h2>
                        </div>
                    </div>
                    <div className=" bg-transparent clint_card border" data-aos="flip-left">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Mountain.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold ">Mountain</h2>
                        </div>
                    </div>
                    <div className=" bg-transparent clint_card border" data-aos="flip-right">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Chocolate.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold">Chocolate</h2>
                        </div>
                    </div>
                    <div className=" bg-transparent clint_card border" data-aos="flip-left">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Explore.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold">Explore</h2>
                        </div>
                    </div>
                    <div className=" bg-transparent clint_card border" data-aos="flip-right">
                        <img className='mx-auto' src={"https://mall.cmsmasters.net/wp-content/uploads/2015/11/Shabby-Chic.png"} alt="Shoes" />
                        <div className="card-body text-center">
                            <h2 className=" text-3xl font-bold">Shabby</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurClint;