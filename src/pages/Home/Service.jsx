import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, Picture_small, Title, Description, Price } = service
    return (
        <div>

            <div className="cardContainer  " >
                <div className="card " >
                    <p className="city text-center">{Title}</p>
                    <div className='h-full'>
                        <img className='my-6 h-[50%]' src={Picture_small} alt="" />
                    </div>
                    <div className="minmaxContainer bg-white rounded-lg py-2 border border-[#164ca7] px-2">
                        <p className="temp">{Description.slice(0, 180)}</p>
                    </div>
                    <div className='flex mt-8 justify-between'>
                        <h2 className='text-start text-3xl text text-[#164ca7] border border-[#164ca7] px-3 pt-2 rounded-lg font-bold'>Price:{Price}$</h2>
                        <button className="btn-shine">
                            <Link to={`/services/${id}`}><span>Show Details</span></Link>
                        </button>
                    </div>
                </div>
            </div>











        </div>
    );
};

export default Service;