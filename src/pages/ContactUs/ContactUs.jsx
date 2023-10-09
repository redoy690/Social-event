import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const ContactUs = () => {
    return (
        <div>
            <div className='bg-[#005153] mt-4'>
                <h2 className='text-center text-white text-3xl font-extrabold py-12'>GET IN TOUCH</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-12 pb-20'>
                    <div className="  border-white border rounded-xl">
                        <div className="px-10 pt-10 ">
                            <div className='bg-[#78A8AA] w-20 rounded-full py-4 mx-auto'>
                                <CiLocationOn className='text-white text-5xl font-bold mx-auto'></CiLocationOn>
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-bold text-white">ADDRESS</h2>
                            <p className='text-white'>3226 Elk Avenue, street park
                                <br />Homer, MI 49245</p>
                            <p className='text-white'>2419 Hanifan Lane, Avenue park
                                <br />Norcross, GA 30071</p>

                        </div>
                    </div>
                    <div className="  border-white border rounded-xl">
                        <div className="px-10 pt-10 ">
                            <div className='bg-[#78A8AA] w-20 rounded-full py-4 mx-auto'>
                                <AiOutlinePhone className='text-white text-5xl font-bold mx-auto'></AiOutlinePhone>
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-bold text-white">PHONE</h2>
                            <p className='text-white'>CEO
                                <br />678-515-6625</p>
                            <p className='text-white'>Event Organizer
                                <br />147-471-8724</p>

                        </div>
                    </div>
                    <div className="  border-white border rounded-xl">
                        <div className="px-10 pt-10 ">
                            <div className='bg-[#78A8AA] w-20 rounded-full py-4 mx-auto'>
                                <AiOutlineMail className='text-white text-5xl font-bold mx-auto'></AiOutlineMail>
                            </div>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="text-xl font-bold text-white">EMAIL</h2>

                            <p className='text-white'>Event Organizer:
                                <br />or@socialevent.com</p>

                            <p className='text-white'>Program Organizer:
                                <br />po@socialevent.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-14'>
                <div className='pl-2 lg:pl-20'>
                    <h1 className='text-red-600 text-4xl font-bold'>Message Us</h1>
                    <p className='my-6'>We are always here for your message. You just send us a message. Send your message with name and phone number. If you send us phone number we can easily find you and contact with you later</p>
                    <img className='border border-pink-700 mb-4' src={'https://i.ibb.co/6tMBpy8/Social-Events-1.jpg'} alt="" />
                </div>
                <div className='px-2 lg:px-14'>
                    <div className="card flex-shrink-0 w-full  shadow-2xl ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile Number</span>
                                </label>
                                <input type="number" placeholder="+14258255555" className="input input-bordered" required />
                            </div>
                            <label className="label">
                                    <span className="label-text">Write your Message here</span>
                                </label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;