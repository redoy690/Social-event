import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const [data, setData] = useState({})
    const { id } = useParams()
    const allData = useLoaderData()
    useEffect(() => {
        const dataFind = allData.find(data => data.id === id)
        setData(dataFind)
    }, [id, allData])
    const { Picture_small, Title, Price, Description,Picture1,Picture2 } = data
    return (
        <div className='mt-4'>
            <h4 className="text-center text-4xl text-[#FFBB00] rounded-b-xl font-bold mb-3 bg-slate-400 border border-[#FF6F33] py-6">{Title}</h4>
            <img className='w-full h-[80vh]' src={Picture_small} alt="" />
            <p className='mt-4'>
                {Description}
            </p>
            <h4 className="text-center text-4xl mt-10 text-[#FFBB00] rounded-xl font-bold mb-3 bg-slate-400 border border-[#FF6F33] py-6">ORDER NOW</h4>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-4 gap-6'>
                <div className='h-full'>
                    <img className='h-full rounded-xl border-4 border-yellow-500' src={Picture1} alt="" />

                </div>
                <div>
                    <div className="card  shadow-2xl bg-base-100 ">
                        <h2 className='text-center text-4xl font-bold text-white border-4 rounded-xl py-2 mt-3 mx-6'>EVENT INFORMATION</h2>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="email" placeholder="John Linkon" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="password" placeholder="email@mail.com" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" placeholder="+12585555" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Address</span>
                                </label>
                                <textarea name="" id="" cols="20" rows="5"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Information</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <h4 className=" mt-10 text-center text-4xl text-[#FFBB00] rounded-xl font-bold mb-3 bg-slate-400 border border-[#FF6F33] py-6">COMPELTE PAYMENT</h4>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-2 gap-6'>
                <div>
                    <div className="card   shadow-2xl bg-base-100 ">
                        <h2 className='text-center text-4xl font-bold text-white border-4 rounded-xl py-2 mt-3 mx-6'>PAYMENT INFORMATION</h2>
                        <div className=''>
                            <div className='flex px-7 mt-4 gap-4'>
                                <img className='w-[30%]' src={Picture2} alt="" />
                                <div>
                                    <div className='flex justify-between'>
                                        <h2 className='text-xl mr-8'>{Title} =</h2>
                                        <h2 className='text-xl'>{Price}$</h2>
                                    </div>
                                    <div className='flex justify-between mb-3'>
                                        <h2 className='text-xl mr-8'>Discount =</h2>
                                        <h2 className='text-xl'>00$</h2>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between font-bold mt-2'>
                                        <h2 className='text-xl mr-8'>Total =</h2>
                                        <h2 className='text-xl'>{Price}$</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <img className='mx-auto mt-4 w-[70%]' src={'https://i.ibb.co/Fw13mFv/928-9280025-follow-us-payment-footer.png'} alt="" />
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="email" placeholder="John Linkon" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="email" placeholder="John Linkon" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="email" placeholder="John Linkon" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input type="email" placeholder="John Linkon" className="input input-bordered" required />
                                </div>
                            </div>
                            <button className='mt-6'>Complete Payment</button>
                        </div>
                    </div>
                </div>
                <div className='h-full'>
                    <img className='h-full rounded-xl border-4 border-yellow-500' src={Picture2} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Details;